import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface RulesSidebarProps {
  onSelectSection: (section: string) => void
  activeSection: string
}

export default function RulesSidebar({ onSelectSection, activeSection }: RulesSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const childSections = [
    'Introduction and Setup',
    'Your Turn',
    'Worker Cards',
    'Spaces',
    'Investing and Sectors',
    'Audit Cards',
    'Winning the Game',
  ]

  const handleRulesClick = () => {
    onSelectSection('Rules')
    setIsExpanded(!isExpanded)
  }

  return (
    <aside className="rules-sidebar">
      <nav className="rules-nav">
        <ul className="rules-nav-list">
          <li key="Rules" className="rules-nav-parent-item">
            <button
              className={`rules-nav-link rules-nav-parent ${activeSection === 'Rules' ? 'active' : ''}`}
              onClick={handleRulesClick}
            >
              <span>Rules</span>
              <span className="rules-nav-chevron">
                {isExpanded ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
              </span>
            </button>
          </li>
          {childSections.map((section) => (
            <li key={section} className={`rules-nav-child-item ${isExpanded ? 'visible' : 'hidden'}`}>
              <button
                className={`rules-nav-link rules-nav-child ${activeSection === section ? 'active' : ''}`}
                onClick={() => onSelectSection(section)}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
