import React, { useEffect, useRef } from "react"
import { gsap, Circ } from "gsap"
import throttle from "lodash.throttle"

interface Point {
  x: number
  y: number
  originX: number
  originY: number
  shiftStrength: number
  circle: Circle
  isDirty: number
  active?: number
  closest?: Point[]
}

interface Circle {
  x: number
  y: number
  radius: number
  color: string
  active: number
  draw: (scale?: number) => void
}

interface Target {
  x: number
  y: number
}

const SPOTLIGHT_RADIUS = 600
const ADD_STRENGTH = 0.5
const SHIFT_STRENGTH = 20
const BASE_COLOR = "156,217,249"
const POINTS_DENSITY = 65

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const paused = useRef<boolean>(false)

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
      points = []

      for (let x = 0; x < width; x += POINTS_DENSITY) {
        for (let y = 0; y < height; y += POINTS_DENSITY) {
          const px = x + (Math.random() * width) / 1000
          const py = y + (Math.random() * height) / 1000

          const dist = getDistance(target, { x: px, y: py })
          const mask = 1.0 - dist / SPOTLIGHT_RADIUS

          if (mask < 0.05) {
            continue
          }
          const p: Point = {
            x: px,
            originX: px,
            y: py,
            originY: py,
            shiftStrength: 1,
            isDirty: -1,
            circle: new Circle(
              px,
              py,
              2 + Math.random() * 2,
              "rgba(255,255,255,0.3)"
            ),
          }
          points.push(p)
          shiftPoint(p)
        }
      }

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
      animate()
    }

    const scrollCheck = () => {
      if (
        document.body.scrollTop > height ||
        document.documentElement.scrollTop > height
      ) {
        pause()
      } else {
        resume()
      }
    }

    const mouseMove = (e: MouseEvent) => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      mousePosition.current = { x: e.clientX, y: e.clientY + scrollY }
    }

    const resize = () => {
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

    const animate = () => {
      if (!ctx) {
        return
      }
      ctx.clearRect(0, 0, width, height)

      for (let i in points) {
        if (points[i].isDirty === 0) {
          //continue
        }
        const dist = getDistance(target, points[i])
        let mask = 1.0 - dist / SPOTLIGHT_RADIUS

        const mD = getDistance(mousePosition.current, points[i])
        let add = 1.0 - mD / SPOTLIGHT_RADIUS

        if (add < 0) {
          add = 0
        }
        const baseBrightness = 0.85
        const brightness = (baseBrightness + ADD_STRENGTH * add) * mask

        points[i].active = brightness
        points[i].circle.active = brightness
        points[i].shiftStrength = add * 2

        drawLines(points[i])

        points[i].circle.draw(0.5 + add)
        points[i].isDirty = 0
      }
      if (paused.current) {
        return
      }
      requestAnimationFrame(animate)
    }

    const shiftPoint = (p: Point) => {
      const shiftDuration = 1 + Math.random()

      gsap.to(p, {
        duration: shiftDuration,
        x:
          p.originX -
          (SHIFT_STRENGTH / 10 + Math.random() * SHIFT_STRENGTH) *
            p.shiftStrength,
        y:
          p.originY -
          (SHIFT_STRENGTH / 10 + Math.random() * SHIFT_STRENGTH) *
            p.shiftStrength,
        ease: Circ.easeInOut,
        onComplete: () => {
          shiftPoint(p)
        },
        onUpdate: () => {
          p.circle.x = p.x
          p.circle.y = p.y
          p.isDirty = 1
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
        ctx.fillStyle = `rgba(${BASE_COLOR},` + this.active / 2 + ")"
        ctx.fill()
      }
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
    const mouseMoveFunc = throttle(mouseMove, 10)
    const resizeFunc = throttle(resize, 1000)

    const addListeners = () => {
      window.addEventListener("scroll", scrollCheckFunc)
      window.addEventListener("mousemove", mouseMoveFunc)
      window.addEventListener("blur", pause)
      window.addEventListener("focus", resume)
      window.addEventListener("resize", resizeFunc)
    }
    addListeners()

    initializePoints()

    return () => {
      window.removeEventListener("scroll", scrollCheckFunc)
      window.removeEventListener("mousemove", mouseMoveFunc)
      window.removeEventListener("blur", pause)
      window.removeEventListener("focus", resume)
      window.removeEventListener("resize", resizeFunc)
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
