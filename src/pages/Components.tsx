import { useState } from 'react'
import FlipCard from '../components/FlipCard'

// Import Worker Card SVGs
import worker1 from '../assets/workercards/worker_1.svg'
import worker2 from '../assets/workercards/worker_2.svg'
import worker41 from '../assets/workercards/worker_4_1.svg'
import worker42 from '../assets/workercards/worker_4_2.svg'
import worker43 from '../assets/workercards/worker_4_3.svg'
import worker44 from '../assets/workercards/worker_4_4.svg'
import workerBack from '../assets/workercards/worker_back.svg'

// Import Audit Card SVGs
import auditUnionStrike from '../assets/auditcards/audit_union_strike.svg'
import auditHesiInv from '../assets/auditcards/audit_hesi_inv.svg'
import auditCorpScandal from '../assets/auditcards/audit_corp_scandal.svg'
import auditCrisisManagement from '../assets/auditcards/audit_crisis_management.svg'
import auditHiringEvent from '../assets/auditcards/audit_hiring_event.svg'
import auditHushMoney from '../assets/auditcards/audit_hush_money.svg'
import auditIrs from '../assets/auditcards/audit_irs.svg'
import auditJobFair from '../assets/auditcards/audit_job_fair.svg'
import auditMole from '../assets/auditcards/audit_mole.svg'
import auditRecOutreach from '../assets/auditcards/audit_rec_outreach.svg'
import auditStrikeADeal from '../assets/auditcards/audit_strike_a_deal.svg'
import auditBack from '../assets/auditcards/audit_back.svg'

// Import Game Board and PR Token
import gameBoardSvg from '../assets/coporate_sabotage_game_board.svg'
import prTokenSvg from '../assets/coporate_sabotage_pr_token.svg'

// Import Logo SVGs
import capLogoSvg from '../assets/cap_logo_svg.svg'

// Component data with file paths and display names
const componentCategories = {
  'Audit Cards': {
    logo: auditBack,
    components: [
      { name: 'Union Strike', imagePath: auditUnionStrike, backPath: auditBack, hasBack: true },
      { name: 'Hesitant Investment', imagePath: auditHesiInv, backPath: auditBack, hasBack: true },
      { name: 'Corporate Scandal', imagePath: auditCorpScandal, backPath: auditBack, hasBack: true },
      { name: 'Crisis Management', imagePath: auditCrisisManagement, backPath: auditBack, hasBack: true },
      { name: 'Hiring Event', imagePath: auditHiringEvent, backPath: auditBack, hasBack: true },
      { name: 'Hush Money', imagePath: auditHushMoney, backPath: auditBack, hasBack: true },
      { name: 'IRS Alert', imagePath: auditIrs, backPath: auditBack, hasBack: true },
      { name: 'Job Fair', imagePath: auditJobFair, backPath: auditBack, hasBack: true },
      { name: 'Mole', imagePath: auditMole, backPath: auditBack, hasBack: true },
      { name: 'Recruitment Outreach', imagePath: auditRecOutreach, backPath: auditBack, hasBack: true },
      { name: 'Strike A Deal', imagePath: auditStrikeADeal, backPath: auditBack, hasBack: true },
    ],
  },
  'Worker Cards': {
    logo: workerBack,
    components: [
      { name: 'Entry Level Worker', imagePath: worker1, backPath: workerBack, hasBack: true },
      { name: 'Middle Management Worker', imagePath: worker2, backPath: workerBack, hasBack: true },
      { name: 'Executive Worker: +2', imagePath: worker41, backPath: workerBack, hasBack: true },
      { name: 'Executive Worker: Nullify', imagePath: worker42, backPath: workerBack, hasBack: true },
      { name: 'Executive Worker: Extra Worker', imagePath: worker43, backPath: workerBack, hasBack: true },
      { name: 'Executive Worker: Invincible', imagePath: worker44, backPath: workerBack, hasBack: true },
    ],
  },
  'Other': {
    logo: capLogoSvg,
    components: [
      { name: 'Game Board', imagePath: gameBoardSvg, backPath: '', hasBack: false },
      { name: 'PR Token', imagePath: prTokenSvg, backPath: '', hasBack: false },
    ],
  },
}

export default function ComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedName, setSelectedName] = useState<string>('')

  const categories = Object.keys(componentCategories)
  const names = selectedCategory
    ? componentCategories[selectedCategory as keyof typeof componentCategories].components.map(c => c.name)
    : []
  const selectedComponent = selectedCategory && selectedName
    ? componentCategories[selectedCategory as keyof typeof componentCategories].components.find(c => c.name === selectedName)
    : null

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setSelectedName('')
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedName(e.target.value)
  }

  return (
    <section className="section timer-section">
      <h1>View Components</h1>

      <div className="category-buttons">
        {categories.map(category => (
          <div key={category} className="category-button-group" data-category={category}>
            <button
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
              title={category}
            >
              <img
                src={componentCategories[category as keyof typeof componentCategories].logo}
                alt={category}
                className="category-logo"
              />
            </button>
            <label className="category-label">{category}</label>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="component-selects">
          <div className="select-group">
            <label htmlFor="name-select">Component Name:</label>
            <select
              id="name-select"
              value={selectedName}
              onChange={handleNameChange}
            >
              <option value="">-- Select Name --</option>
              {names.map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {selectedComponent && (
        <div className="preview-section" key={`${selectedCategory}-${selectedName}`}>
          {selectedComponent.hasBack ? (
            <FlipCard
              frontImage={selectedComponent.imagePath}
              backImage={selectedComponent.backPath}
            />
          ) : (
            <img
              src={selectedComponent.imagePath}
              alt={selectedName}
              className="component-preview no-flip"
            />
          )}
        </div>
      )}
    </section>
  )
}