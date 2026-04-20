// pages/Home.tsx
import { useNavigate } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

export default function Home() {
  const navigate = useNavigate()

  const whatIsTheGame = [
    {
      title: 'Strategic Decision Making',
      description: 'Pick your executive persona.',
    },
    {
      title: 'Corporate Power Plays',
      description: 'Acquire companies & resources.',
    },
    {
      title: 'Market Domination Mechanics',
      description: 'Undermine your opponents.',
    },
  ]

  const steps = [
    '1 Create Your Company',
    '2 Build Up Your Workforce',
    '3 Sabotage Rivals',
    '4 Win the Market',
  ]

  const features = [
    {
      title: 'Variable Market Conditions',
      description: 'Dynamic markets, events and speculation.',
    },
    {
      title: 'Negotiation & Betrayal Tactics',
      description: 'Adaptive strategy and calculated risk.',
    },
    {
      title: 'Risk vs Reward Systems',
      description: 'Higher risk, higher returns.',
    },
    {
      title: 'Replayable Outcomes',
      description: 'Every session evolves differently.',
    },
  ]

  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <h1>Corporate Sabotage</h1>
          <h2>The Corporate Strategy Game</h2>
          <p>Build influence. Control Sectors. Eliminate competitors.</p>

          <div className="hero-buttons">
            <button className="primary" onClick={() => navigate('/purchase')}>
              Buy the Game
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="board-placeholder">Board Preview</div>
        </div>
      </section>

      <div className="content-wrapper">
        <section className="section">
          <h3>What is the Game?</h3>

          <div className="card-grid">
            {whatIsTheGame.map((item) => (
              <div key={item.title} className="card">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h3>How To Play</h3>

          <div className="steps">
            {steps.map((step) => (
              <div key={step} className="step">
                {step}
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h3>Game Features</h3>

          <div className="features">
            {features.map((feature) => (
              <div key={feature.title}>
                <strong>{feature.title}</strong>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="cta-wrapper">
        <section className="cta">
          <h3>Get the Game for $49.99</h3>
          <p>Includes board, player tokens, and strategy cards.</p>
          <br />
          <button className="primary" onClick={() => navigate('/purchase')}>
            Purchase Now
          </button>
        </section>
      </div>
    </>
  )
}