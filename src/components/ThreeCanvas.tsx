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
    let isVisible = true

    // Dimensions
    const width = container.clientWidth || 340
    const height = container.clientHeight || 240

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.z = 5.2

    // Renderer with optimized settings
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    // Cap pixel ratio at 1.5 for 60fps performance on mobile devices
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    container.appendChild(renderer.domElement)

    // Lighting (Studio Chrome Look)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2)
    keyLight.position.set(5, 7, 4)
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0x94a3b8, 2.0)
    fillLight.position.set(-5, -3, -2)
    scene.add(fillLight)

    const rimLight = new THREE.DirectionalLight(0xffffff, 2.8)
    rimLight.position.set(0, 5, -4)
    scene.add(rimLight)

    // Group for mouse interaction
    const group = new THREE.Group()
    scene.add(group)

    // Lightweight yet stunning smooth chrome torus knot (96x24 segments)
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.35, 96, 24, 2, 3)
    const material = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.94,
      roughness: 0.14,
    })
    const mesh = new THREE.Mesh(geometry, material)
    group.add(mesh)

    // Outer Orbit Ring
    const ringGeo = new THREE.TorusGeometry(2.1, 0.02, 12, 80)
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.9,
      roughness: 0.2,
      transparent: true,
      opacity: 0.5,
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 3.5
    group.add(ring)

    // Second intersecting orbit ring
    const ringGeo2 = new THREE.TorusGeometry(2.3, 0.015, 12, 80)
    const ring2 = new THREE.Mesh(ringGeo2, ringMat)
    ring2.rotation.y = Math.PI / 4
    ring2.rotation.z = Math.PI / 6
    group.add(ring2)

    // Interaction tracking
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = event.clientX - rect.left - rect.width / 2
      const y = event.clientY - rect.top - rect.height / 2
      targetX = (x / rect.width) * 0.6
      targetY = (y / rect.height) * 0.6
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Pause rendering when scrolled out of view to save 100% GPU
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true
      },
      { threshold: 0.05 }
    )
    intersectionObserver.observe(container)

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width
        const newHeight = entry.contentRect.height
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight
          camera.updateProjectionMatrix()
          renderer.setSize(newWidth, newHeight)
        }
      }
    })
    resizeObserver.observe(container)

    // Clock
    const clock = new THREE.Clock()

    // Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Skip render calculations when scrolled off screen
      if (!isVisible) return

      const elapsedTime = clock.getElapsedTime()

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05
      mouseY += (targetY - mouseY) * 0.05

      // Fluid continuous rotation
      mesh.rotation.y = elapsedTime * 0.25 + mouseX * 0.7
      mesh.rotation.x = Math.sin(elapsedTime * 0.2) * 0.25 + mouseY * 0.7

      ring.rotation.z = elapsedTime * 0.12
      ring2.rotation.x = -elapsedTime * 0.1

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      intersectionObserver.disconnect()
      resizeObserver.disconnect()

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      ringGeo.dispose()
      ringGeo2.dispose()
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
