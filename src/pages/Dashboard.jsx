import { useState } from 'react'
import ControlPad from '../components/ControlPad.jsx'
import StatusPanel from '../components/StatusPanel.jsx'
import MicButton from '../components/MicButton.jsx'

export default function Dashboard() {
  const [online, setOnline] = useState(true)
  const [logs, setLogs] = useState([])

  const timestamp = () => new Date().toLocaleTimeString()
  const pushLog = (msg) => setLogs((prev) => [{ t: timestamp(), msg }, ...prev].slice(0, 24))

  const moveForward = () => pushLog('moveForward()')
  const moveBackward = () => pushLog('moveBackward()')
  const moveLeft = () => pushLog('moveLeft()')
  const moveRight = () => pushLog('moveRight()')
  const spin360 = () => {
    pushLog('spin360()')
  }
  const [micActive, setMicActive] = useState(false)
  const startMic = () => {
    setMicActive(true)
    pushLog('mic:start')
  }
  const endMic = () => {
    setMicActive(false)
    pushLog('mic:end')
  }
  const stop = () => pushLog('stop()')
  const clearLogs = () => setLogs([])

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <div className="w-full max-w-6xl px-4 md:px-6 pt-6 md:pt-8">
        <h1 className="text-center text-xl md:text-3xl font-extrabold tracking-wider uppercase shadow-glow">
          A.R.I.S CONTROL PANEL
        </h1>
      </div>
      <main className="w-full max-w-6xl px-4 md:px-6 py-4 md:py-6 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <aside className="glass rounded-2xl border border-[rgba(255,255,255,0.12)] p-6 flex flex-col gap-4">
          <StatusPanel online={online} onToggle={() => setOnline((v) => !v)} />
          <div className="glass rounded-2xl border border-[rgba(255,255,255,0.12)] p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Voice Commands</h2>
              <MicButton onStart={startMic} onEnd={endMic} floating={false} />
            </div>
            <p className="text-white/60 text-sm mt-3">
              {micActive ? 'Listening… hold to speak' : 'Hold the mic button to talk'}
            </p>
          </div>
        </aside>

        <section className="glass rounded-2xl border border-[rgba(255,255,255,0.12)] p-6 flex flex-col items-center justify-center">
          <h2 className="text-lg font-medium mb-4">Robot Control Pad</h2>
          <ControlPad
            onForward={moveForward}
            onBackward={moveBackward}
            onLeft={moveLeft}
            onRight={moveRight}
            onStop={stop}
            onSpin={spin360}
          />
        </section>

        <div className="flex flex-col gap-6">
          <div className="glass rounded-2xl border border-[rgba(255,255,255,0.12)] p-6">
            <h2 className="text-lg font-medium mb-4">Camera</h2>
            <div className="h-48 md:h-64 glass rounded-xl border border-[rgba(255,255,255,0.12)] flex items-center justify-center">
              <div className="text-white/50 text-sm">Camera feed placeholder</div>
            </div>
          </div>
          <div className="glass rounded-2xl border border-[rgba(255,255,255,0.12)] p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-medium">Command Logs</h2>
              <button
                className="btn-neon glass rounded-xl px-3 py-1.5 border border-[rgba(0,229,255,0.45)] text-sm"
                onClick={clearLogs}
                aria-label="Clear Command Logs"
              >
                Clear
              </button>
            </div>
            <div className="h-48 overflow-y-auto rounded-xl border border-[rgba(0,229,255,0.25)] p-3 bg-[rgba(255,255,255,0.03)]">
              <ul className="space-y-1">
                {logs.length === 0 && (
                  <li className="text-white/45 text-sm">No commands yet</li>
                )}
                {logs.map((l, i) => (
                  <li key={i} className="text-sm text-white/85">
                    <span className="text-white/55">{l.t}</span>
                    <span className="mx-2 text-neon-blue">•</span>
                    <span className="font-mono">{l.msg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
