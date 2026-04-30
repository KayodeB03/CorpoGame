import ImageWithFallback from './ImageWithFallback'

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
            <ImageWithFallback src={frontImage} alt="Card front" style={{ width: '100%', height: '100%', objectFit: 'contain' }} wrapperClassName="flip-card-image-wrapper" />
          ) : (
            <span className="flip-card-placeholder">{front}</span>
          )}
        </div>
        <div className="flip-back">
          {backImage ? (
            <ImageWithFallback src={backImage} alt="Card back" style={{ width: '100%', height: '100%', objectFit: 'contain' }} wrapperClassName="flip-card-image-wrapper" />
          ) : (
            <span className="flip-card-placeholder">{back}</span>
          )}
        </div>
      </div>
    </div>
  )
}
