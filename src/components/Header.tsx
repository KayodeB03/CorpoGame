import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="topbar">
      <div className="logo">
        <Link to="/">
          <span>Corporate Sabotage</span>
        </Link>
      </div>

      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/rules">Rules</Link>
        <Link to="/quickplay">Quick Play</Link>
        <Link to="/components">Components</Link>
      </nav>

      <button className="buy-btn">Purchase</button>
    </header>
  )
}