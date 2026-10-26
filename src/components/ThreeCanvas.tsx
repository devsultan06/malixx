import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ThreeCanvasProps {
  className?: string
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrameId: number
    const width = container.clientWidth
    const height = container.clientHeight

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 6.2

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Lighting (Studio Chrome Look)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4)
    keyLight.position.set(5, 6, 4)
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0x94a3b8, 1.6)
    fillLight.position.set(-5, -3, -2)
    scene.add(fillLight)

    const rimLight = new THREE.DirectionalLight(0xe2e8f0, 2.0)
    rimLight.position.set(0, 5, -4)
    scene.add(rimLight)

    // Group for mouse interaction
    const group = new THREE.Group()
    scene.add(group)

    // Smooth Continuous Liquid Chrome Geometry (Zero dots, zero particles)
    const geometry = new THREE.TorusKnotGeometry(1.35, 0.38, 140, 28, 2, 3)
    const material = new THREE.MeshStandardMaterial({
      color: 0xd4d4d8,
      metalness: 0.92,
      roughness: 0.18,
    })
    const mesh = new THREE.Mesh(geometry, material)
    group.add(mesh)

    // Sleek outer orbit ring (solid, smooth, no dots)
    const ringGeo = new THREE.TorusGeometry(2.35, 0.02, 16, 120)
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x71717a,
      metalness: 0.9,
      roughness: 0.25,
      transparent: true,
      opacity: 0.4,
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 3.5
    group.add(ring)

    // Mouse tracking with smooth damping
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = event.clientX - rect.left - rect.width / 2
      const y = event.clientY - rect.top - rect.height / 2
      targetX = (x / rect.width) * 0.7
      targetY = (y / rect.height) * 0.7
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Resize handler
    const handleResize = () => {
      if (!container) return
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }
    window.addEventListener('resize', handleResize)

    // Clock
    const clock = new THREE.Clock()

    // Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05
      mouseY += (targetY - mouseY) * 0.05

      // Continuous rotation & fluid motion
      mesh.rotation.y = elapsedTime * 0.25 + mouseX * 0.8
      mesh.rotation.x = Math.sin(elapsedTime * 0.2) * 0.3 + mouseY * 0.8

      ring.rotation.z = elapsedTime * 0.15
      ring.rotation.y = -elapsedTime * 0.1

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      ringGeo.dispose()
      ringMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
