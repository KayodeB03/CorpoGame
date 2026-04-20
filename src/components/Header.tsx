import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MobileMenu from './MobileMenu'

export default function Header() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="topbar">
        <div className="logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/CorpoGame/favicon.svg" alt="Corporate Sabotage Logo" style={{ width: '40px', height: '40px', flexShrink: 0 }} />
            <span>Corporate Sabotage</span>
          </Link>
        </div>

        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/quickplay">Quick Play</Link>
          <Link to="/components">Components</Link>
        </nav>

        <button className="buy-btn" onClick={() => navigate('/purchase')}>
          Purchase
        </button>

        <button
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}