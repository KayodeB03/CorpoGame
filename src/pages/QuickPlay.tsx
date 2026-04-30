import { useState, useEffect, useRef } from 'react'
import { useTimer } from '../hooks/useTimer'
import { useGameState, type Player } from '../hooks/useGameState'
import Timer from '../components/Timer'
import TurnTransition from '../components/TurnTransition'
import WrapUpTimer from '../components/WrapUpTimer'
import '../styles/quickplay.css'

export default function QuickPlay() {
  const [phase, setPhase] = useState<'setup' | 'game' | 'wrapup' | 'transition'>('setup')
  const [numPlayers, setNumPlayers] = useState(3)
  const [playerNames, setPlayerNames] = useState<string[]>(['Player 1', 'Player 2', 'Player 3'])
  const [showSetupError, setShowSetupError] = useState(false)

  // Main turn timer (30 seconds)
  const {
    time: mainTime,
    isRunning: isMainRunning,
    start: startMain,
    pause: pauseMain,
    skip: skipMain,
    restart: restartMain,
  } = useTimer(30, {
    onTimeUp: () => setPhase('wrapup'),
  })

  // Wrap-up timer (5 seconds)
  const {
    time: wrapupTime,
    isRunning: isWrapupRunning,
    start: startWrapup,
    skip: skipWrapup,
  } = useTimer(5, {
    onTimeUp: () => {
      gameState.advanceToNextPlayer()
      setPhase('transition')
      setTimeout(() => setPhase('game'), 1200)
    },
  })

  // Game state management
  const players: Player[] = playerNames.map((name, idx) => ({ id: idx, name }))
  const gameState = useGameState({ players })

  // Track if this is first turn
  const isFirstTurn = gameState.turnNumber === 1

  // Ref to track the last turn number we auto-started for
  const lastAutoStartTurnRef = useRef(-1)

  // Auto-start timer for non-first player turns
  useEffect(() => {
    // Only auto-start if we're in game phase, not first turn, and this is a new turn
    if (phase === 'game' && !isFirstTurn && gameState.turnNumber !== lastAutoStartTurnRef.current) {
      lastAutoStartTurnRef.current = gameState.turnNumber
      // Auto-start timer for subsequent players
      restartMain()
    }
  }, [phase, isFirstTurn, gameState.turnNumber, restartMain])

  // Handle turn state transitions
  useEffect(() => {
    if (phase === 'game' && gameState.gameState === 'waiting') {
      gameState.startTurn()
    } else if (phase === 'wrapup' && gameState.gameState === 'active') {
      gameState.endTurn()
      startWrapup()
    }
  }, [phase, gameState.gameState, gameState, startWrapup])

  const handleSetup = () => {
    // Validate player names
    const allNamesValid = playerNames.every(name => name.trim().length > 0)
    if (!allNamesValid) {
      setShowSetupError(true)
      return
    }
    setShowSetupError(false)
    gameState.reset()
    setPhase('game')
  }

  const handlePlayerNameChange = (index: number, value: string) => {
    const newNames = [...playerNames]
    newNames[index] = value
    setPlayerNames(newNames)
  }

  const handleNumPlayersChange = (num: number) => {
    setNumPlayers(num)
    const newNames = Array.from({ length: num }, (_, i) => `Player ${i + 1}`)
    setPlayerNames(newNames)
  }

  // Setup Phase
  if (phase === 'setup') {
    return (
      <section className="quickplay-setup">
        <div className="quickplay-setup-container">
          <h1>Quick Play Mode Setup</h1>
          <p className="setup-subtitle">
            Get ready for fast-paced decision making. Each player gets 30 seconds!
          </p>

          {/* Number of Players */}
          <div className="setup-section">
            <label className="setup-label">Number of Players</label>
            <div className="setup-buttons">
              <button
                className={`setup-btn ${numPlayers === 3 ? 'active' : ''}`}
                onClick={() => handleNumPlayersChange(3)}
              >
                3 Players
              </button>
              <button
                className={`setup-btn ${numPlayers === 4 ? 'active' : ''}`}
                onClick={() => handleNumPlayersChange(4)}
              >
                4 Players
              </button>
            </div>
          </div>

          {/* Player Names */}
          <div className="setup-section">
            <label className="setup-label">Player Names</label>
            <div className="player-inputs">
              {playerNames.map((name, idx) => (
                <input
                  key={idx}
                  type="text"
                  className="player-input"
                  placeholder={`Player ${idx + 1}`}
                  value={name}
                  onChange={e => handlePlayerNameChange(idx, e.target.value)}
                  maxLength={20}
                />
              ))}
            </div>
            {showSetupError && <p className="setup-error">Please enter names for all players</p>}
          </div>

          {/* Start Button */}
          <button className="setup-start-btn" onClick={handleSetup}>
            Start Game
          </button>

          <div className="setup-info">
            <h3>How to Play</h3>
            <ul>
              <li>Each player gets 30 seconds per turn</li>
              <li>After time's up, 5 seconds to wrap up</li>
              <li>Can skip at any time during their turn</li>
              <li>Next player takes the turn</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }

  // Game Phase
  return (
    <section className="quickplay-game">
      <TurnTransition
        playerNumber={gameState.currentPlayerIndex + 1}
        playerName={gameState.currentPlayer.name}
        isVisible={phase === 'transition'}
      />

      <div className="quickplay-container">
        {phase === 'game' && (
          <Timer
            time={mainTime}
            totalTime={30}
            isRunning={isMainRunning}
            playerName={gameState.currentPlayer.name}
            nextPlayerName={gameState.nextPlayer.name}
            onStart={startMain}
            onPause={pauseMain}
            onSkip={() => {
              skipMain()
              setPhase('wrapup')
            }}
            isFirstTurn={isFirstTurn}
          />
        )}

        {phase === 'wrapup' && (
          <div className="wrapup-main-display">
            <p className="wrapup-main-text">Turn #{gameState.turnNumber}</p>
            <h2 className="wrapup-main-player">{gameState.currentPlayer.name}</h2>
            <WrapUpTimer
              time={wrapupTime}
              isVisible={isWrapupRunning}
              onSkip={() => {
                skipWrapup()
              }}
            />
          </div>
        )}
      </div>

      <div className="quickplay-footer">
        <p className="turn-info">
          Turn {gameState.turnNumber} • {numPlayers} Players
        </p>
      </div>
    </section>
  )
}