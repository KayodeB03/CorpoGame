interface TimerProps {
  time: number
  isRunning: boolean
  onStart: () => void
  onPause: () => void
  onReset: () => void
}

export default function Timer({
  time,
  onStart,
  onPause,
  onReset,
}: TimerProps) {
  return (
    <div className="timer-box">
      <div id="timer">{time}</div>

      <div className="timer-controls">
        <button id="startBtn" className="primary" onClick={onStart}>
          Start
        </button>
        <button id="pauseBtn" className="secondary" onClick={onPause}>
          Pause
        </button>
        <button id="resetBtn" className="secondary" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  )
}