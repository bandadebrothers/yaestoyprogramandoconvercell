'use client'

import { useEffect, useRef } from 'react'

type Piece = {
  x: number
  y: number
  w: number
  h: number
  rot: number
  vx: number
  vy: number
  vr: number
  color: string
}

const COLORS = [
  '#7c3aed',
  '#ec4899',
  '#f59e0b',
  '#10b981',
  '#3b82f6',
  '#ef4444',
  '#ffffff',
]

export function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let raf = 0

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    const spawn = (count: number): Piece[] =>
      Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * -height,
        w: 6 + Math.random() * 8,
        h: 8 + Math.random() * 10,
        rot: Math.random() * Math.PI * 2,
        vx: -1.5 + Math.random() * 3,
        vy: 2 + Math.random() * 4,
        vr: -0.1 + Math.random() * 0.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))

    let pieces = spawn(160)

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of pieces) {
        p.x += p.vx
        p.y += p.vy
        p.rot += p.vr
        if (p.y > height + 20) {
          p.y = -20
          p.x = Math.random() * width
        }
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        ctx.restore()
      }
      raf = requestAnimationFrame(render)
    }
    render()

    // Ease off the density after the initial burst.
    const timeout = setTimeout(() => {
      pieces = pieces.slice(0, 60)
    }, 4000)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timeout)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50"
    />
  )
}
