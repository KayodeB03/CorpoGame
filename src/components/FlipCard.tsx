interface FlipCardProps {
  front?: string
  back?: string
  frontImage?: string
  backImage?: string
}

export default function FlipCard({ front, back, frontImage, backImage }: FlipCardProps) {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="flip-front">
          {frontImage ? (
            <img src={frontImage} alt="Card front" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <span className="flip-card-placeholder">{front}</span>
          )}
        </div>
        <div className="flip-back">
          {backImage ? (
            <img src={backImage} alt="Card back" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <span className="flip-card-placeholder">{back}</span>
          )}
        </div>
      </div>
    </div>
  )
}