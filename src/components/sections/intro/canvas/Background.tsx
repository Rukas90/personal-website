import React, { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { BufferGeometry, BufferAttribute } from "three"
import { Position } from "src/types/Position"
import {
  ChromaticAberration,
  EffectComposer,
  HueSaturation,
  Vignette,
  WaterEffect,
} from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import { useTheme } from "src/components/contexts/ThemeContext"

interface Data {
  positions: Float32Array
  colors: Float32Array
}

const Particles: React.FC<{ count: number }> = ({ count }) => {
  const { isDark } = useTheme()

  const mesh = useRef<THREE.Points>(null)
  const originalPositions = useRef<Float32Array>()
  const mousePosition = useRef<Position>({ x: 0, y: 0 })
  const buffer = useRef<BufferGeometry | null>(null)
  const [material, setMaterial] = useState<THREE.PointsMaterial | null>(null)
  const data = useRef<Data | null>(null)

  const radius = 2.85

  const updateMousePosition = (event: MouseEvent) => {
    mousePosition.current = {
      x: event.clientX,
      y: event.clientY,
    }
  }
  useEffect(() => {
    setMaterial((current) => {
      current?.dispose()
      return new THREE.PointsMaterial({
        size: 0.01,
        sizeAttenuation: true,
        transparent: true,
        opacity: 1,
        vertexColors: true,
      })
    })
    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      buffer.current?.dispose()
      setMaterial((current) => {
        current?.dispose()
        return null
      })
      data.current = null

      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  useEffect(() => {
    if (data.current) {
      data.current = null
    }
    data.current = {
      positions: new Float32Array(count * 3),
      colors: new Float32Array(count * 4),
    }
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      data.current.positions[i * 3 + 0] = x
      data.current.positions[i * 3 + 1] = y
      data.current.positions[i * 3 + 2] = z
    }
    originalPositions.current = data.current.positions.slice()
  }, [count])

  const geometry = useMemo(() => {
    buffer.current?.dispose()

    if (!data.current) {
      return
    }
    const geometry = new BufferGeometry()

    geometry.setAttribute(
      "position",
      new BufferAttribute(data.current.positions, 3)
    )
    geometry.setAttribute(
      "color",
      new BufferAttribute(data.current.colors, 4, true)
    )
    buffer.current = geometry

    return geometry
  }, [data.current])

  const isMobile = window.innerWidth < 768
  let frame = 0

  useFrame(({ camera }) => {
    if (isMobile && frame++ % 4 !== 0) {
      return
    }
    if (!mesh.current || !originalPositions.current) {
      return
    }
    mesh.current.rotation.x -= 0.00025
    mesh.current.rotation.y += 0.0005

    const positions = mesh.current.geometry.attributes.position
      .array as Float32Array
    const colors = mesh.current.geometry.attributes.color.array as Float32Array

    const meshMatrix = mesh.current.matrixWorld

    for (let i = 0; i < count; i++) {
      const id = i * 3
      const colorId = i * 4

      const position = new THREE.Vector3(
        originalPositions.current[id],
        originalPositions.current[id + 1],
        originalPositions.current[id + 2]
      ).applyMatrix4(meshMatrix)

      let currentPosition = position

      positions[id] = currentPosition.x
      positions[id + 1] = currentPosition.y
      positions[id + 2] = currentPosition.z

      const ndcPosition = currentPosition.clone().project(camera)

      const proximityToEdge = Math.min(
        1 - Math.abs(ndcPosition.x),
        1 - Math.abs(ndcPosition.y)
      )
      const fadeThreshold = 0.125

      const alpha =
        (1.0 -
          Math.min(
            Math.max(
              (currentPosition.x * currentPosition.z * currentPosition.y) / 1.5,
              0
            ),
            1
          )) *
          proximityToEdge <
        fadeThreshold
          ? proximityToEdge / fadeThreshold
          : 1
      const brightness = 0.5

      colors[colorId] = (isDark ? 0.0 : 1.0) * alpha * brightness
      colors[colorId + 1] = (isDark ? 0.2 : 0.05) * alpha * brightness
      colors[colorId + 2] = (isDark ? 0.5 : 0.0) * alpha * brightness
      colors[colorId + 3] = alpha * brightness
    }

    mesh.current.geometry.attributes.position.needsUpdate = true
    mesh.current.geometry.attributes.color.needsUpdate = true
  })
  if (!material || !buffer.current) {
    return <></>
  }
  return <points ref={mesh} geometry={geometry} material={material} />
}

const Background: React.FC = () => {
  const { isDark } = useTheme()
  const isMobile = window.innerWidth < 768

  return (
    <Canvas>
      <Particles count={isMobile ? 50 : 10000} />
      <EffectComposer>
        <HueSaturation
          hue={-0.5}
          saturation={isDark ? -0.5 : -1}
          blendFunction={BlendFunction.SOFT_LIGHT}
        />
        <WaterEffect
          factor={isDark ? 4 : 6}
          blendFunction={BlendFunction.AVERAGE}
        />
        <ChromaticAberration
          offset={new THREE.Vector2(isDark ? 0.005 : 0.001, 0)}
          radialModulation
          modulationOffset={0.1}
        />
        <Vignette
          darkness={1.5}
          blendFunction={
            isDark ? BlendFunction.DIFFERENCE : BlendFunction.VIVID_LIGHT
          }
        />
        <Vignette darkness={1} />
      </EffectComposer>
    </Canvas>
  )
}

export default Background
