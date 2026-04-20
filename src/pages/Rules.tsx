import { useState } from 'react'
import {
  FiBriefcase,
  FiRotateCcw,
  FiUsers,
  FiGrid,
  FiTrendingUp,
  FiShield,
  FiAward,
} from 'react-icons/fi'
import RulesSidebar from '../components/RulesSidebar'
import '../styles/rules.css'

interface RuleSection {
  title: string
  content: string[]
}

const sectionIcons: Record<string, React.ReactNode> = {
  'Introduction and Setup': <FiBriefcase size={20} />,
  'Your Turn': <FiRotateCcw size={20} />,
  'Worker Cards': <FiUsers size={20} />,
  'Spaces': <FiGrid size={20} />,
  'Investing and Sectors': <FiTrendingUp size={20} />,
  'Audit Cards': <FiShield size={20} />,
  'Winning the Game': <FiAward size={20} />,
}

const rulesSections: Record<string, RuleSection> = {
  'Rules': {
    title: 'Rules',
    content: [
      '— Introduction and Setup —',
      'In Corporate Sabotage, you are in a race against opposing corporations all trying to corner the market through taking control of various sectors of the economy: Political, Healthcare, Energy, and Technology. The first to claim the three sectors wins the game. You claim sectors via investing your workers into different sectors.',
      'To start the game each player draws three worker cards and plays with them face up. Everyone rolls the two d6 dice, the highest roll goes first.',
      '',
      '— Your Turn —',
      'Turns play out as follows:',
      '1. Start phase (Audit cards may be played here)',
      '2. Roll for movement',
      '3. Resolve Spaces and Triggers',
      '4. Pre-Investment (Audit cards may be played here)',
      '5. Invest (If able to, if not. End the turn)',
      '6. End turn',
      '',
      '— Worker Cards —',
      'Workers come in three tiers:',
      '• Entry Level (1 worker point)',
      '• Middle Management (2 worker points)',
      '• Executive (4 worker points) Executives have special abilities if they are not invested.',
      'Workers must remain visible to all players at all times. Place all workers face up, and clearly distinguish invested workers from non-invested ones by turning invested workers horizontally.',
      'When the workers deck runs out, shuffle the discard pile to create a new draw pile. When you discard a worker, it goes face up in a discard pile next to the draw pile.',
      '',
      '— Spaces —',
      'Start: Start here. Every time you pass Start, draw 1 new worker. You may only invest workers on the turn you pass or land on start.',
      'Audit: Draw an Audit card.',
      'Layoffs: Discard one non-invested employee that you control.',
      'IRS: Roll the two or three d6 dice, rolling a 9 or above results in firing a worker. If you roll an 8 or lower, nothing happens.',
      'Career Fair: Draw two workers, put one worker at the bottom of the worker pile.',
      'Public Relations: Gain a PR Token when landing on this space. (A PR Token may be used to negate one negative effect that would cause you to lose worker(s), except effects caused by Hostile Takeover). Players can\'t have more than 2 PR Tokens.',
      'Hostile Takeover: When you land on Hostile Takeover, choose a worker that another player has invested. You and that player each roll a d6, rerolling in the case of a tie until there is a winner. If the targeted player loses the roll, they lose control of that worker, and you gain control of it in its current sector (PR tokens do not negate this effect).',
      'Sent to the IRS: You get sent to the IRS space. The IRS space roll does trigger.',
      '',
      '— Investing and Sectors —',
      'After passing Start, you must invest if able:',
      '• If you have 4 or more Worker Points (invested or uninvested), you must invest at least 1 worker if you are able to.',
      '• If you have 10 or more Worker Points (invested or uninvested), you must invest at least 3 workers if you are able to.',
      '• You must still have at least 4 Worker Points remaining after investing.',
      'Example: You have 2, 2, and 1 WP (5 total). After passing Start, you must invest at least 1 worker. If you invest 2 WP, you\'ll have 3 WP remaining, which is allowed.',
      '',
      '— Audit Cards —',
      'Audit cards are your method to slowing other players\' progress. You can mess with other players\' workers through audits, poaching, and moles. Discard audit cards after into the discard pile. Shuffle the discard pile after there are no longer audit cards to draw.',
      '(4x) Hesitant Investment: Uninvest target entry level (wp1) or middle management (wp2) worker for a target player.',
      '(4x) Hush Money: Select an uninvested worker from one target player. It can\'t be invested in the next time they invest.',
      '(4x) IRS: Play before a player rolls for their turn. That player loses their turn and is sent directly to the IRS space. They must roll for the IRS space.',
      '(4x) Mole: Target player can\'t use worker abilities or audit cards for 5 turns.',
      '(4x) Recruitment outreach: Take control of an invested entry level (wp1) or middle management (wp2) worker from a sector and invest the worker in another sector.',
      '(4x) Strike a deal: Choose an uninvested entry level (wp1) or middle management (wp2) and gain that worker, targeted player draws an audit card.',
      '(4x) Union Strike: Target player does not benefit from one of their sectors abilities for 5 turns.',
      '(2x) Crisis Management: Gain a Public Relations token (You may only have a maximum of two PR tokens).',
      '(2x) Hiring Event: Draw a worker',
      '(1x) Job Fair: If you have invested at least two times this game you may play this audit card; Draw four workers.',
      '(1x) Corporate Scandal: Target player uninvested a total of four worker points of your choosing from one or more sectors.',
      '',
      '— Winning the Game —',
      'To win the game, you must control at least three sectors by having the highest total invested worker points above five in those three sectors.',
    ],
  },
  'Introduction and Setup': {
    title: 'Introduction and Setup',
    content: [
      'In Corporate Sabotage, you are in a race against opposing corporations all trying to corner the market through taking control of various sectors of the economy: Political, Healthcare, Energy, and Technology. The first to claim the three sectors wins the game. You claim sectors via investing your workers into different sectors.',
      'To start the game each player draws three worker cards and plays with them face up. Everyone rolls the two d6 dice, the highest roll goes first.',
    ],
  },
  'Your Turn': {
    title: 'Your Turn',
    content: [
      'Turns play out as follows:',
      '1. Start phase (Audit cards may be played here)',
      '2. Roll for movement',
      '3. Resolve Spaces and Triggers',
      '4. Pre-Investment (Audit cards may be played here)',
      '5. Invest (If able to, if not. End the turn)',
      '6. End turn',
    ],
  },
  'Worker Cards': {
    title: 'Worker Cards',
    content: [
      'Workers come in three tiers:',
      '• Entry Level (1 worker point)',
      '• Middle Management (2 worker points)',
      '• Executive (4 worker points) Executives have special abilities if they are not invested.',
      'Workers must remain visible to all players at all times. Place all workers face up, and clearly distinguish invested workers from non-invested ones by turning invested workers horizontally.',
      'When the workers deck runs out, shuffle the discard pile to create a new draw pile. When you discard a worker, it goes face up in a discard pile next to the draw pile.',
    ],
  },
  'Spaces': {
    title: 'Spaces',
    content: [
      'Start: Start here. Every time you pass Start, draw 1 new worker. You may only invest workers on the turn you pass or land on start.',
      'Audit: Draw an Audit card.',
      'Layoffs: Discard one non-invested employee that you control.',
      'IRS: Roll the two or three d6 dice, rolling a 9 or above results in firing a worker. If you roll an 8 or lower, nothing happens.',
      'Career Fair: Draw two workers, put one worker at the bottom of the worker pile.',
      'Public Relations: Gain a PR Token when landing on this space. (A PR Token may be used to negate one negative effect that would cause you to lose worker(s), except effects caused by Hostile Takeover). Players can\'t have more than 2 PR Tokens.',
      'Hostile Takeover: When you land on Hostile Takeover, choose a worker that another player has invested. You and that player each roll a d6, rerolling in the case of a tie until there is a winner. If the targeted player loses the roll, they lose control of that worker, and you gain control of it in its current sector (PR tokens do not negate this effect).',
      'Sent to the IRS: You get sent to the IRS space. The IRS space roll does trigger.',
    ],
  },
  'Investing and Sectors': {
    title: 'Investing and Sectors',
    content: [
      'After passing Start, you must invest if able:',
      '• If you have 4 or more Worker Points (invested or uninvested), you must invest at least 1 worker if you are able to.',
      '• If you have 10 or more Worker Points (invested or uninvested), you must invest at least 3 workers if you are able to.',
      '• You must still have at least 4 Worker Points remaining after investing.',
      'Example: You have 2, 2, and 1 WP (5 total). After passing Start, you must invest at least 1 worker. If you invest 2 WP, you\'ll have 3 WP remaining, which is allowed.',
    ],
  },
  'Audit Cards': {
    title: 'Audit Cards',
    content: [
      'Audit cards are your method to slowing other players\' progress. You can mess with other players\' workers through audits, poaching, and moles. Discard audit cards after into the discard pile. Shuffle the discard pile after there are no longer audit cards to draw.',
      '(4x) Hesitant Investment: Uninvest target entry level (wp1) or middle management (wp2) worker for a target player.',
      '(4x) Hush Money: Select an uninvested worker from one target player. It can\'t be invested in the next time they invest.',
      '(4x) IRS: Play before a player rolls for their turn. That player loses their turn and is sent directly to the IRS space. They must roll for the IRS space.',
      '(4x) Mole: Target player can\'t use worker abilities or audit cards for 5 turns.',
      '(4x) Recruitment outreach: Take control of an invested entry level (wp1) or middle management (wp2) worker from a sector and invest the worker in another sector.',
      '(4x) Strike a deal: Choose an uninvested entry level (wp1) or middle management (wp2) and gain that worker, targeted player draws an audit card.',
      '(4x) Union Strike: Target player does not benefit from one of their sectors abilities for 5 turns.',
      '(2x) Crisis Management: Gain a Public Relations token (You may only have a maximum of two PR tokens).',
      '(2x) Hiring Event: Draw a worker',
      '(1x) Job Fair: If you have invested at least two times this game you may play this audit card; Draw four workers.',
      '(1x) Corporate Scandal: Target player uninvested a total of four worker points of your choosing from one or more sectors.',
    ],
  },
  'Winning the Game': {
    title: 'Winning the Game',
    content: [
      'To win the game, you must control at least three sectors by having the highest total invested worker points above five in those three sectors.',
    ],
  },
}

export default function Rules() {
  const [activeSection, setActiveSection] = useState('Rules')
  const currentSection = rulesSections[activeSection]

  const stylizeText = (text: string) => {
    // Replace specific terms with styled versions
    const styledText = text
      .replace(/\b(WP|Worker Points?|worker points?)\b/g, '<strong>$1</strong>')
      .replace(/\b(Political|Healthcare|Energy|Technology)\b/g, '<strong>$1</strong>')
      .replace(/\b(Entry Level|Middle Management|Executive)\b/g, '<strong>$1</strong>')
      .replace(/\b(PR Token|PR Tokens?)\b/g, '<strong>$1</strong>')
      .replace(/\b(Audit cards?|Audit Cards?)\b/g, '<strong>$1</strong>')
      .replace(/\b(uninvest|invest|invested|investing)\b/g, '<em>$1</em>')

    return <span dangerouslySetInnerHTML={{ __html: styledText }} />
  }

  return (
    <div className="rules-container">
      <RulesSidebar onSelectSection={setActiveSection} activeSection={activeSection} />

      <main className="rules-content">
        <section className="rules-section fade-in" key={activeSection}>
          {activeSection !== 'Rules' && (
            <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
              {sectionIcons[activeSection] && (
                <span style={{ color: '#1a73e8', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  {sectionIcons[activeSection]}
                </span>
              )}
              {currentSection.title}
            </h2>
          )}
          <div className="rules-text">
            {currentSection.content.map((paragraph, index) => {
              if (paragraph.startsWith('— ') && paragraph.endsWith(' —')) {
                const sectionName = paragraph.slice(2, -2)
                const icon = sectionIcons[sectionName]
                return (
                  <h3 key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                    {icon && <span style={{ color: '#1a73e8', display: 'flex', alignItems: 'center', flexShrink: 0 }}>{icon}</span>}
                    {sectionName}
                  </h3>
                )
              }
              return <p key={index}>{stylizeText(paragraph)}</p>
            })}
          </div>
        </section>
      </main>
    </div>
  )
}