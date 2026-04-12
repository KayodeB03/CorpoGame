interface RulesSidebarProps {
  onSelectSection: (section: string) => void
  activeSection: string
}

export default function RulesSidebar({ onSelectSection, activeSection }: RulesSidebarProps) {
  const childSections = [
    'Introduction and Setup',
    'Your Turn',
    'Worker Cards',
    'Spaces',
    'Investing and Sectors',
    'Audit Cards',
    'Winning the Game',
  ]

  return (
    <aside className="rules-sidebar">
      <nav className="rules-nav">
        <ul className="rules-nav-list">
          <li key="Rules">
            <button
              className={`rules-nav-link rules-nav-parent ${activeSection === 'Rules' ? 'active' : ''}`}
              onClick={() => onSelectSection('Rules')}
            >
              Rules
            </button>
          </li>
          {childSections.map((section) => (
            <li key={section}>
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
