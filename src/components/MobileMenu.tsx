import { Link, useNavigate } from 'react-router-dom'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navigate = useNavigate()

  if (!isOpen) return null

  return (
    <div className="mobile-menu-overlay">
      <button className="mobile-menu-close" onClick={onClose} aria-label="Close menu">
        ✕
      </button>
      <nav className="mobile-menu-nav">
        <Link to="/" className="mobile-menu-link" onClick={onClose}>
          Home
        </Link>
        <Link to="/rules" className="mobile-menu-link" onClick={onClose}>
          Rules
        </Link>
        <Link to="/quickplay" className="mobile-menu-link" onClick={onClose}>
          Quick Play
        </Link>
        <Link to="/components" className="mobile-menu-link" onClick={onClose}>
          Components
        </Link>
        <button
          className="mobile-menu-purchase"
          onClick={() => {
            navigate('/purchase')
            onClose()
          }}
        >
          Purchase
        </button>
      </nav>
    </div>
  )
}
