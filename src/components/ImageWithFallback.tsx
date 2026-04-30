import { useState, ImgHTMLAttributes } from 'react'
import '../styles/skeleton.css'

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string
}

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  ...props
}: ImageWithFallbackProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`skeleton-wrapper ${wrapperClassName}`}>
      {/* Pulse placeholder visible until the image loads */}
      {!isLoaded && <div className="skeleton-pulse"></div>}

      {/* Actual image */}
      <img
        src={src}
        alt={alt || ''}
        className={`skeleton-image ${isLoaded ? 'loaded' : ''} ${className}`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  )
}
