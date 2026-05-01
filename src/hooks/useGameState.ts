import { useState, useCallback, useRef } from 'react'

export type GameState = 'waiting' | 'active' | 'transition' | 'wrapup'

export interface Player {
  id: number
  name: string
}

interface UseGameStateProps {
  players: Player[]
}

export function useGameState({ players }: UseGameStateProps) {
  const [gameState, setGameState] = useState<GameState>('waiting')
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const [turnNumber, setTurnNumber] = useState(1)
  const [turnStartTime, setTurnStartTime] = useState<number | null>(null)
  
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const currentPlayer = players[currentPlayerIndex]
  const nextPlayerIndex = (currentPlayerIndex + 1) % players.length
  const nextPlayer = players[nextPlayerIndex]

  const startTurn = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setGameState('active')
    setTurnStartTime(Date.now())
  }, [])

  const endTurn = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setGameState('transition')
    // Auto transition after animation (1 second)
    timeoutRef.current = setTimeout(() => {
      setGameState('wrapup')
    }, 1000)
  }, [])

  const advanceToNextPlayer = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setCurrentPlayerIndex(prev => (prev + 1) % players.length)
    setTurnNumber(prev => prev + 1)
    setGameState('waiting')
    setTurnStartTime(null)
  }, [players.length])

  const reset = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setGameState('waiting')
    setCurrentPlayerIndex(0)
    setTurnNumber(1)
    setTurnStartTime(null)
  }, [])

  return {
    gameState,
    setGameState,
    currentPlayer,
    currentPlayerIndex,
    nextPlayer,
    nextPlayerIndex,
    turnNumber,
    turnStartTime,
    startTurn,
    endTurn,
    advanceToNextPlayer,
    reset,
  }
}
