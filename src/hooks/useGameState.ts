import { useState, useCallback } from 'react'

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

  const currentPlayer = players[currentPlayerIndex]
  const nextPlayerIndex = (currentPlayerIndex + 1) % players.length
  const nextPlayer = players[nextPlayerIndex]

  const startTurn = useCallback(() => {
    setGameState('active')
    setTurnStartTime(Date.now())
  }, [])

  const endTurn = useCallback(() => {
    setGameState('transition')
    // Auto transition after animation (1 second)
    setTimeout(() => {
      setGameState('wrapup')
    }, 1000)
  }, [])

  const advanceToNextPlayer = useCallback(() => {
    setCurrentPlayerIndex(prev => (prev + 1) % players.length)
    setTurnNumber(prev => prev + 1)
    setGameState('waiting')
    setTurnStartTime(null)
  }, [players.length])

  const reset = useCallback(() => {
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
