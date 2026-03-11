import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Square, RotateCcw } from 'lucide-react'
import cn from 'classnames'

export default function ControlPad({
  onForward,
  onBackward,
  onLeft,
  onRight,
  onStop,
  onSpin
}) {
  return (
    <div className="relative flex items-center justify-center">
      <div className="ring-gradient absolute -inset-6 rounded-full blur-sm" />
      <div className="neon-ring glass rounded-full p-4 md:p-6">
        <div className="dpad-grid">
          <div />
          <button
            aria-label="Forward"
            className={cn('control-button btn-neon', 'col-span-1')}
            onClick={onForward}
          >
            <ArrowUp className="text-neon-blue" />
          </button>
          <div />

          <button
            aria-label="Left"
            className="control-button btn-neon"
            onClick={onLeft}
          >
            <ArrowLeft className="text-neon-blue" />
          </button>

          <button
            aria-label="Stop"
            className={cn(
              'control-button btn-neon',
              'bg-[rgba(255,255,255,0.12)] border-[1.5px] border-[rgba(0,229,255,0.55)]'
            )}
            onClick={onStop}
          >
            <Square className="text-neon-cyan" />
          </button>

          <button
            aria-label="Right"
            className="control-button btn-neon"
            onClick={onRight}
          >
            <ArrowRight className="text-neon-blue" />
          </button>

          <div />
          <button
            aria-label="Backward"
            className="control-button btn-neon"
            onClick={onBackward}
          >
            <ArrowDown className="text-neon-blue" />
          </button>
          <div />
        </div>
      </div>

      <button
        aria-label="Spin 360"
        className="absolute -top-1 -right-1 md:-top-2 md:-right-2 control-button btn-neon h-10 w-10 md:h-12 md:w-12 rounded-full"
        onClick={onSpin}
        title="360° Spin"
      >
        <RotateCcw className="text-neon-cyan" />
      </button>
    </div>
  )
}
