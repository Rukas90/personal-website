import React, { useEffect, useRef } from "react"
import { gsap, Circ } from "gsap"
import throttle from "lodash.throttle"

type Point = {
  x: number
  y: number
  originX: number
  originY: number
  shiftStrength: number
  circle: Circle
  active?: number
  closest?: Target[]
  disabled?: boolean
  tween?: gsap.core.Tween
}

type Circle = {
  x: number
  y: number
  radius: number
  color: string
  active: number
  draw: (scale?: number) => void
}

type Target = {
  x: number
  y: number
}

const SPOTLIGHT_RADIUS = 600
const ADD_STRENGTH = 0.5
const SHIFT_STRENGTH = 20
const BASE_COLOR = "156,217,249"
const POINTS_DENSITY = 80

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const paused = useRef<boolean>(false)
  const hasRequestedAnimation = useRef<boolean>(false)
  const animationFrameId = useRef<number>()
  const resizeTimeout = useRef<number | null>(null)

  let points: Point[] = []
  let width = window.innerWidth
  let height = window.innerHeight
  let target: Target = { x: width / 1.5, y: height / 2 }

  const getDistance = (p1: Point | Target, p2: Point | Target) => {
    const dx = p1.x - p2.x
    const dy = p1.y - p2.y

    return Math.sqrt(dx * dx + dy * dy)
  }
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext("2d")

    if (!ctx) {
      return
    }

    const initializePoints = () => {
      const requiredCount =
        Math.ceil(width / POINTS_DENSITY) * Math.ceil(height / POINTS_DENSITY)
      const currentCount = points.length

      if (requiredCount > currentCount) {
        for (let i = currentCount; i < requiredCount; i++) {
          points.push(createNewPoint())
        }
      } else if (requiredCount < currentCount) {
        for (let i = requiredCount; i < currentCount; i++) {
          points[i].disabled = true
        }
      }
      let index = 0

      for (let x = 0; x < width; x += POINTS_DENSITY) {
        if (index >= requiredCount) {
          break
        }
        for (let y = 0; y < height; y += POINTS_DENSITY) {
          if (index >= requiredCount) {
            break
          }
          const px = x + (Math.random() * width) / 1000
          const py = y + (Math.random() * height) / 1000

          const dist = getDistance(target, { x: px, y: py })
          const mask = 1.0 - dist / SPOTLIGHT_RADIUS

          if (mask < 0.05) {
            continue
          }
          const point = points[index]

          point.disabled = false

          point.x = px
          point.y = py

          point.originX = px
          point.originY = py

          point.circle.x = px
          point.circle.y = py

          if (point.tween) {
            point.tween.kill()
          }
          shiftPoint(point, true)

          index++
        }
      }
      updateClosestPoints()
    }
    const createNewPoint = (): Point => {
      return {
        x: 0,
        originX: 0,
        y: 0,
        originY: 0,
        shiftStrength: 1,
        circle: new Circle(
          0,
          0,
          2 + Math.random() * 2,
          "rgba(255,255,255,0.3)"
        ),
      }
    }
    function disposePoint(point: Point) {
      if (point.tween) {
        point.tween.kill()
        point.tween = undefined
      }
      if (point.closest) {
        point.closest.length = 0
        point.closest = undefined
      }
      point.x = 0
      point.y = 0
      point.originX = 0
      point.originY = 0
      point.shiftStrength = 0
      point.active = undefined
      point.disabled = undefined

      point.circle.x = 0
      point.circle.y = 0
      point.circle.radius = 0
      point.circle.active = 0
      point.circle.color = ""
    }
    const updateClosestPoints = () => {
      for (let i = 0; i < points.length; i++) {
        let closest: Point[] = []
        const p1 = points[i]

        for (let j = 0; j < points.length; j++) {
          const p2 = points[j]

          if (!(p1 === p2)) {
            let placed = false

            for (let k = 0; k < 2; k++) {
              if (!placed) {
                if (closest[k] === undefined) {
                  closest[k] = p2
                  placed = true
                }
              }
            }

            for (let k = 0; k < 2; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2
                  placed = true
                }
              }
            }
          }
        }
        p1.closest = closest
      }
    }

    const scrollCheck = () => {
      if (
        document.body.scrollTop > height ||
        document.documentElement.scrollTop > height
      ) {
        pause()
      } else {
        evaluateResolution()
      }
    }

    const mouseMove = (e: MouseEvent) => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      mousePosition.current = { x: e.clientX, y: e.clientY + scrollY }
    }

    const animate = () => {
      if (!ctx) {
        return
      }
      ctx.clearRect(0, 0, width, height)

      for (let i in points) {
        if (points[i].disabled) {
          continue
        }
        const dist = getDistance(target, points[i])
        let mask = 1.0 - dist / SPOTLIGHT_RADIUS

        const mD = getDistance(mousePosition.current, points[i])
        let add = 1.0 - mD / SPOTLIGHT_RADIUS

        if (add < 0) {
          add = 0
        }
        const baseBrightness = 1.0
        const brightness = (baseBrightness + ADD_STRENGTH * add) * mask

        points[i].active = brightness
        points[i].circle.active = brightness
        points[i].shiftStrength = add * 2

        drawLines(points[i])

        points[i].circle.draw(0.5 + add)
      }
      if (paused.current) {
        return
      }
      if (hasRequestedAnimation.current) {
        return
      }
      hasRequestedAnimation.current = true
      setTimeout(() => {
        hasRequestedAnimation.current = false
        animationFrameId.current = requestAnimationFrame(animate)
      }, 40)
    }

    const shiftPoint = (p: Point, immediate = false) => {
      const shiftX =
        (SHIFT_STRENGTH / 10 + Math.random() * SHIFT_STRENGTH) * p.shiftStrength
      const shiftY =
        (SHIFT_STRENGTH / 10 + Math.random() * SHIFT_STRENGTH) * p.shiftStrength

      const newX = p.originX - shiftX
      const newY = p.originY - shiftY

      if (immediate) {
        p.x = newX
        p.y = newY
        p.circle.x = newX
        p.circle.y = newY
      }
      const shiftDuration = 1 + Math.random()

      if (p.tween) {
        p.tween.kill()
        p.tween = undefined
      }
      p.tween = gsap.to(p, {
        duration: shiftDuration,
        x: newX,
        y: newY,
        ease: Circ.easeInOut,
        onComplete: () => {
          // FIX DEEP RECURSION MEMORY USAGE LEAK ISSUE
          shiftPoint(p)
        },
        onUpdate: () => {
          p.circle.x = p.x
          p.circle.y = p.y
        },
      })
    }

    const drawLines = (p: Point) => {
      if (!p.active || !p.closest || !ctx) {
        return
      }

      ctx.beginPath()
      p.closest.forEach((closestPoint) => {
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(closestPoint.x, closestPoint.y)
      })
      ctx.strokeStyle = `rgba(${BASE_COLOR},` + p.active / 20.0 + ")"
      ctx.stroke()

      for (let i = 0; i < p.closest.length - 1; i++) {
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(p.closest[i].x, p.closest[i].y)
        ctx.lineTo(p.closest[i + 1].x, p.closest[i + 1].y)
        ctx.closePath()

        ctx.fillStyle = `rgba(${BASE_COLOR},` + p.active / 150 + ")"
        ctx.fill()
      }
    }

    class Circle {
      constructor(
        public x: number,
        public y: number,
        public radius: number,
        public color: string
      ) {
        this.active = 0
      }

      active: number

      draw(scale?: number) {
        if (!this.active || !ctx) {
          return
        }
        ctx.beginPath()
        ctx.arc(
          this.x,
          this.y,
          this.radius * (scale ?? 1.0),
          0,
          2 * Math.PI,
          false
        )
        ctx.fillStyle = `rgba(${BASE_COLOR},` + this.active / 1.5 + ")"
        ctx.fill()
      }
    }

    const evaluateResolution = () => {
      if (
        canvas.width !== window.innerWidth ||
        canvas.height !== window.innerHeight
      ) {
        width = window.innerWidth
        height = window.innerHeight

        target = { x: width / 1.5, y: height / 2 }

        if (!canvas) {
          return
        }
        canvas.width = width
        canvas.height = height

        initializePoints()
      }
      resume()
    }
    const onResize = () => {
      pause()

      if (resizeTimeout.current !== null) {
        window.clearTimeout(resizeTimeout.current)
      }
      resizeTimeout.current = window.setTimeout(() => {
        resizeTimeout.current = null

        evaluateResolution()
      }, 1000)
    }

    const pause = () => {
      paused.current = true
    }
    const resume = () => {
      if (!paused.current) {
        return
      }
      paused.current = false
      animate()
    }

    const scrollCheckFunc = throttle(scrollCheck, 200)
    const mouseMoveFunc = throttle(mouseMove, 20)
    const resizeFunc = throttle(onResize, 100)
    const clickFunc = throttle(evaluateResolution, 100)

    const addListeners = () => {
      window.addEventListener("scroll", scrollCheckFunc)
      window.addEventListener("mousemove", mouseMoveFunc)
      window.addEventListener("blur", pause)
      window.addEventListener("focus", resume)
      window.addEventListener("resize", resizeFunc)
      window.addEventListener("click", clickFunc)
    }
    addListeners()

    initializePoints()
    animate()

    return () => {
      scrollCheckFunc.cancel()
      mouseMoveFunc.cancel()
      resizeFunc.cancel()
      clickFunc.cancel()

      window.removeEventListener("scroll", scrollCheckFunc)
      window.removeEventListener("mousemove", mouseMoveFunc)
      window.removeEventListener("blur", pause)
      window.removeEventListener("focus", resume)
      window.removeEventListener("resize", resizeFunc)
      window.removeEventListener("click", clickFunc)

      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current)
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
      points.forEach((point) => {
        disposePoint(point)
        points.length = 0
      })
    }
  }, [])

  return (
    <>
      <canvas
        className="absolute w-full h-full top-0 left-0 pointer-events-none -z-20"
        ref={canvasRef}
      />
    </>
  )
}

export default AnimatedBackground
