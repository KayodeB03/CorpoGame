import { useLocation, Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default function Breadcrumbs() {
  const location = useLocation()
  
  // Only show breadcrumbs on purchase-related routes
  const isPurchaseRoute = location.pathname === '/' || 
    location.pathname === '/purchase' || 
    location.pathname === '/purchase/checkout'
  
  if (!isPurchaseRoute || location.pathname === '/') {
    return null
  }

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    ...(location.pathname === '/purchase' || location.pathname === '/purchase/checkout'
      ? [{ label: 'Purchase', path: '/purchase' }]
      : []),
    ...(location.pathname === '/purchase/checkout'
      ? [{ label: 'Checkout', path: '#' }]
      : []),
  ]

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map((crumb, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {crumb.path === '#' ? (
            <span className="breadcrumb-text">{crumb.label}</span>
          ) : (
            <Link to={crumb.path} className="breadcrumb-link">
              {crumb.label}
            </Link>
          )}
          {index < breadcrumbs.length - 1 && (
            <FiChevronRight size={16} className="breadcrumb-separator" />
          )}
        </div>
      ))}
    </div>
  )
}
