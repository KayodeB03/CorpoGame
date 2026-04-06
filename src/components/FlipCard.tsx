interface FlipCardProps {
  front: string
  back: string
}

export default function FlipCard({ front, back }: FlipCardProps) {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="flip-front">
          <span className="flip-card-placeholder">{front}</span>
        </div>
        <div className="flip-back">
          <span className="flip-card-placeholder">{back}</span>
        </div>
      </div>
    </div>
  )
}