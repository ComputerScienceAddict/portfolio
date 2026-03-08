import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }
    const leave = () => setIsVisible(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [isVisible])

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        className="cursor-ring"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  )
}
