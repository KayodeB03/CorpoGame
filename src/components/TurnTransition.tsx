import './turn-transition.css'

interface TurnTransitionProps {
  playerNumber: number
  playerName: string
  isVisible: boolean
}

export default function TurnTransition({ playerNumber, playerName, isVisible }: TurnTransitionProps) {
  if (!isVisible) return null

  return (
    <div className="turn-transition-overlay">
      <div className="turn-transition-content">
        <div className="turn-transition-text">Next Player's Turn!</div>
        <div className="turn-transition-player">
          <span className="turn-transition-number">{playerNumber}</span>
          <span className="turn-transition-name">{playerName}</span>
        </div>
      </div>
    </div>
  )
}
