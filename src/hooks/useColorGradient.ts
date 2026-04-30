/**
 * Hook to calculate timer color based on time remaining
 * Gradient: Blue (60s) → Orange (30s) → Red (0s)
 */
export function useColorGradient(timeRemaining: number, totalTime: number = 60) {
  // Normalize time to 0-1 (1 = full time, 0 = no time)
  const progress = Math.max(0, Math.min(1, timeRemaining / totalTime))

  // Define color stops
  interface ColorStop {
    ratio: number
    color: { r: number; g: number; b: number }
  }

  const stops: ColorStop[] = [
    { ratio: 1.0, color: { r: 26, g: 115, b: 232 } }, // Blue #1a73e8
    { ratio: 0.5, color: { r: 249, g: 171, b: 0 } }, // Orange #f9ab00
    { ratio: 0.0, color: { r: 211, g: 47, b: 47 } }, // Red #d32f2f
  ]

  // Find the two stops we're between
  let stop1 = stops[0]
  let stop2 = stops[1]

  for (let i = 0; i < stops.length - 1; i++) {
    if (progress <= stops[i].ratio && progress >= stops[i + 1].ratio) {
      stop1 = stops[i]
      stop2 = stops[i + 1]
      break
    }
  }

  // Interpolate between the two stops
  const localProgress = (progress - stop2.ratio) / (stop1.ratio - stop2.ratio)
  const r = Math.round(stop2.color.r + (stop1.color.r - stop2.color.r) * localProgress)
  const g = Math.round(stop2.color.g + (stop1.color.g - stop2.color.g) * localProgress)
  const b = Math.round(stop2.color.b + (stop1.color.b - stop2.color.b) * localProgress)

  const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`

  // Return color + intensity level (for animations/effects)
  const intensity = 1 - progress // 0 at start, 1 at end (more intense)
  const isCritical = timeRemaining <= 5
  const isWarning = timeRemaining <= 15

  return {
    color: hexColor,
    intensity,
    isCritical,
    isWarning,
  }
}
