import { Bot, Wifi, WifiOff } from 'lucide-react'

export default function StatusPanel({ online = true, onToggle }) {
  return (
    <div className="glass rounded-2xl p-4 flex items-center justify-between border border-[rgba(255,255,255,0.12)]">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl flex items-center justify-center btn-neon border border-[rgba(0,229,255,0.35)]">
          <Bot className="text-neon-cyan" />
        </div>
        <div>
          <div className="text-sm tracking-wide text-white/70">A.R.I.S. Status</div>
          <div className="flex items-center gap-2">
            <div
              className={`h-2.5 w-2.5 rounded-full ${
                online ? 'bg-status-online shadow-glow' : 'bg-status-offline'
              }`}
            />
            <span className="font-medium">
              {online ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={onToggle}
        className="btn-neon glass rounded-xl px-3 py-2 border border-[rgba(255,255,255,0.12)] text-sm flex items-center gap-2"
        aria-label="Toggle Connection"
      >
        {online ? <Wifi className="text-neon-blue" /> : <WifiOff className="text-neon-blue" />}
        {online ? 'Connected' : 'Disconnected'}
      </button>
    </div>
  )
}
