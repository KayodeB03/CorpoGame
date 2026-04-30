import { useColorGradient } from '../hooks/useColorGradient'
import '../styles/timer.css'

interface TimerProps {
  time: number
  totalTime?: number
  isRunning: boolean
  playerName?: string
  onStart: () => void
  onPause: () => void
  onSkip: () => void
  nextPlayerName?: string
  isFirstTurn?: boolean
}

export default function Timer({
  time,
  totalTime = 30,
  isRunning,
  playerName = 'Player',
  onStart,
  onPause,
  onSkip,
  nextPlayerName,
  isFirstTurn = false,
}: TimerProps) {
  const { color, isCritical } = useColorGradient(time, totalTime)
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  return (
    <div className="timer-container">
      <div className="timer-header">
        <h2 className="timer-player-name">{playerName}'s Turn</h2>
        {nextPlayerName && <p className="timer-next-player">Next: {nextPlayerName}</p>}
      </div>

      <div className="timer-display-wrapper">
        <div
          className={`timer-display ${isCritical ? 'critical' : ''}`}
          style={{ color }}
        >
          <div className="timer-number">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>

          <svg className="timer-progress-ring" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke={color}
              strokeWidth="8"
              strokeDasharray={`${(time / totalTime) * 565.5} 565.5`}
              style={{
                transition: 'stroke-dasharray 1s linear, stroke 0.3s ease',
              }}
            />
          </svg>
        </div>
      </div>

      <div className="timer-controls">
        {isFirstTurn ? (
          <>
            {!isRunning && (
              <button className="timer-button primary" onClick={onStart}>
                Start Turn
              </button>
            )}
            {isRunning && (
              <button className="timer-button secondary" onClick={onSkip}>
                Skip Turn
              </button>
            )}
          </>
        ) : (
          <>
            {isRunning ? (
              <button className="timer-button pause" onClick={onPause}>
                Pause Game
              </button>
            ) : (
              <button className="timer-button primary" onClick={onStart}>
                Resume
              </button>
            )}
            <button className="timer-button secondary" onClick={onSkip}>
              Skip Turn
            </button>
          </>
        )}
      </div>
    </div>
  )
}
