import { useState } from 'react'
import { Mic } from 'lucide-react'

export default function MicButton({ onStart, onEnd, floating = true }) {
  const [pressed, setPressed] = useState(false)
  const base =
    'h-14 w-14 md:h-16 md:w-16 rounded-full glass btn-neon border border-[rgba(0,229,255,0.45)] flex items-center justify-center'
  const pos = floating ? 'fixed bottom-6 right-6' : ''
  const active = pressed ? 'shadow-glowStrong animate-pulseGlow border-[rgba(0,229,255,0.75)]' : ''
  const handleStart = (e) => {
    setPressed(true)
    onStart && onStart()
    try {
      e.currentTarget.setPointerCapture?.(e.pointerId)
    } catch {}
  }
  const handleEnd = (e) => {
    if (!pressed) return
    setPressed(false)
    onEnd && onEnd()
    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId)
    } catch {}
  }
  return (
    <button
      aria-label="Push to talk"
      aria-pressed={pressed}
      className={`${pos} ${base} ${active}`}
      onPointerDown={handleStart}
      onPointerUp={handleEnd}
      onPointerLeave={handleEnd}
      onBlur={(e) => pressed && handleEnd(e)}
      title="Hold to talk"
    >
      <Mic className="text-neon-cyan" />
      <span className="sr-only">Hold to talk</span>
    </button>
  )
}
