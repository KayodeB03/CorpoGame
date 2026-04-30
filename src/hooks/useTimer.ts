import { useState, useEffect, useRef } from 'react'

interface UseTimerCallbacks {
  onWarning?: () => void
  onCritical?: () => void
  onTimeUp?: () => void
}

export function useTimer(initialTime: number = 60, callbacks: UseTimerCallbacks = {}) {
  const [time, setTime] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<number | null>(null)
  const callbacksRef = useRef(callbacks)

  // Update callbacks ref to latest version
  useEffect(() => {
    callbacksRef.current = callbacks
  }, [callbacks])

  const start = () => {
    if (isRunning) return
    setIsRunning(true)
    intervalRef.current = setInterval(() => {
      setTime(prev => {
        const next = prev - 1

        // Fire warning callback at 15s
        if (next === 15 && callbacksRef.current.onWarning) {
          callbacksRef.current.onWarning()
        }

        // Fire critical callback at 5s
        if (next === 5 && callbacksRef.current.onCritical) {
          callbacksRef.current.onCritical()
        }

        // Handle time up
        if (next <= 0) {
          setIsRunning(false)
          if (intervalRef.current) clearInterval(intervalRef.current)
          if (callbacksRef.current.onTimeUp) {
            callbacksRef.current.onTimeUp()
          }
          return initialTime
        }
        return next
      })
    }, 1000)
  }

  const pause = () => {
    setIsRunning(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const reset = () => {
    setIsRunning(false)
    setTime(initialTime)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const skip = () => {
    setIsRunning(false)
    setTime(initialTime)
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (callbacksRef.current.onTimeUp) {
      callbacksRef.current.onTimeUp()
    }
  }

  const restart = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setTime(initialTime)
    setIsRunning(true)
    intervalRef.current = setInterval(() => {
      setTime(prev => {
        const next = prev - 1

        // Fire warning callback at 15s
        if (next === 15 && callbacksRef.current.onWarning) {
          callbacksRef.current.onWarning()
        }

        // Fire critical callback at 5s
        if (next === 5 && callbacksRef.current.onCritical) {
          callbacksRef.current.onCritical()
        }

        // Handle time up
        if (next <= 0) {
          setIsRunning(false)
          if (intervalRef.current) clearInterval(intervalRef.current)
          if (callbacksRef.current.onTimeUp) {
            callbacksRef.current.onTimeUp()
          }
          return initialTime
        }
        return next
      })
    }, 1000)
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return { time, isRunning, start, pause, reset, skip, restart }
}