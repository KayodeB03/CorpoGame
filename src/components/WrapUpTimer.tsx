import '../styles/wrapup.css'

interface WrapUpTimerProps {
  time: number
  isVisible: boolean
  onSkip: () => void
}

export default function WrapUpTimer({ time, isVisible, onSkip }: WrapUpTimerProps) {
  if (!isVisible) return null

  return (
    <div className="wrapup-container">
      <div className="wrapup-content">
        <p className="wrapup-text">Finish Up In:</p>
        <div className="wrapup-timer">{time}</div>
        <button className="wrapup-button" onClick={onSkip}>
          I'm Done
        </button>
      </div>
    </div>
  )
}
