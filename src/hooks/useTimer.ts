import { useState, useEffect, useRef } from 'react';

export function useTimer(initialTime: number = 60) {
  const [time, setTime] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<number | null>(null)

  const start = () => {
    if (isRunning) return
    setIsRunning(true)
    intervalRef.current = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          setIsRunning(false)
          alert("Time's up!")
          return initialTime
        }
        return prev - 1
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

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return { time, isRunning, start, pause, reset }
}