import { useTimer } from '../hooks/useTimer'
import Timer from '../components/Timer'

export default function QuickPlay() {
  const { time, isRunning, start, pause, reset } = useTimer(60)

  return (
    <section className="section timer-section">
      <h1>Quick Play Mode</h1>
      <p>Make fast decisions. Outplay your opponents before time runs out.</p>

      <Timer
        time={time}
        isRunning={isRunning}
        onStart={start}
        onPause={pause}
        onReset={reset}
      />

      <div className="quickplay-info">
        {/* Add quick play info content here */}
      </div>
    </section>
  )
}