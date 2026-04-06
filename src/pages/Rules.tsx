import RuleSection from '../components/RuleSection'

export default function Rules() {
  return (
    <section className="section timer-section">
      <h1>Corporate Sabotage Rules</h1>
      <p>Players: 3–4</p>
      <p>In Corporate Sabotage, you race opposing corporations to claim four economic sectors: Political, Healthcare, Energy, and Technology. Invest workers, play audits, and use Hostile Takeovers to gain control. The first player to control all four sectors wins.</p>

      <RuleSection title="Introduction and Setup">
        <p>Each player draws three worker cards and places them revealed in front of them. Everyone rolls two d6 dice; the highest roll goes first. Play passes to the left.</p>
      </RuleSection>

      <RuleSection title="Your Turn">
        <p>Turns play out in the following order:</p>
        <ol>
          <li>Start phase (Audit cards may be played).</li>
          <li>Roll for movement.</li>
          <li>Resolve spaces and triggers.</li>
          <li>Pre-Investment (Audit cards may be played).</li>
          <li>Invest (if able; otherwise end the turn).</li>
          <li>End turn.</li>
        </ol>
      </RuleSection>

      <RuleSection title="Spaces">
        <dl>
          <dt>Start</dt>
          <dd>Start here. Every time you pass Start, draw 1 new worker. You may only invest workers on the turn you pass or land on Start.</dd>

          <dt>Audit</dt>
          <dd>Draw an Audit card.</dd>

          <dt>Layoffs</dt>
          <dd>Discard one non-invested employee that you control.</dd>

          <dt>IRS</dt>
          <dd>Roll two or three d6 dice. Rolling a 9 or above fires a worker. If you roll 8 or lower, nothing happens.</dd>

          <dt>Career Fair</dt>
          <dd>Draw two workers, discard one. Create a separate face-up pile of discarded or fired workers.</dd>

          <dt>Public Relations</dt>
          <dd>Gain a PR Token when landing on this space. A PR Token may negate one negative effect that would cause you to lose worker(s), except effects caused by Hostile Takeover. Players cannot have more than 2 PR Tokens.</dd>

          <dt>Hostile Takeover</dt>
          <dd>Choose a worker that another player has invested. You and that player each roll a d6, rerolling ties until there is a winner. If the targeted player loses, they lose control of that worker and you gain control in the same sector. PR Tokens do not negate this effect.</dd>

          <dt>Sent to the IRS</dt>
          <dd>You get sent to the IRS space. The IRS space does not trigger.</dd>
        </dl>
      </RuleSection>

      <RuleSection title="Worker Cards">
        <p>Workers come in three tiers:</p>
        <ul>
          <li>Entry-Level: 1 worker point</li>
          <li>Middle Management: 2 worker points</li>
          <li>Executive Suite: 4 worker points (Executives have special abilities if they are not invested.)</li>
        </ul>
        <p>Workers must be visible to other players, revealed in front of you, and distinguished between invested and non-invested by turning invested worker cards horizontally. You play with your workers revealed at all times.</p>
        <p>When the workers deck runs out, shuffle the discard pile to create a new draw pile. Discarded workers go face up in a discard pile next to the draw pile.</p>
      </RuleSection>

      <RuleSection title="Investing and Sectors">
        <p>Whenever you pass or land on Start, you may choose to invest. To invest, you must have at least 4 Worker Points available, and you must still have at least 4 Worker Points remaining after the investment.</p>
        <p><strong>Example:</strong> If you have workers worth 2wp, 2wp, and 1wp, you may invest the 1wp worker.</p>
        <p>To invest, turn the invested workers horizontally and place a worker chip in your chosen sector matching the worker's value (1, 2, or 4). You may choose any sector when investing.</p>
        <p>To control a sector, you must have at least 5 Worker Points invested there and more Worker Points than any other player. If players tie for highest invested Worker Points in a sector, no one gains that sector's benefits until the tie is broken.</p>
      </RuleSection>

      <RuleSection title="Audit Cards">
        <p>Audit cards slow other players by affecting workers, investments, and turns. Discard audit cards after use. Shuffle the discard pile when there are no more audit cards to draw.</p>
        <ul>
          <li><strong>Report to IRS (6):</strong> Send target player to the IRS space; consumes their roll. No spaces passed are triggered.</li>
          <li><strong>Poach Workers (6):</strong> Take one invested entry-level or middle-management worker from another player and swap it to your side, investing it in the same sector.</li>
          <li><strong>Blackmail (6):</strong> Select a card from each opponent. They cannot invest that worker in any sector when they pass Start. This effect wears off for each affected worker after the opponent passes Start.</li>
          <li><strong>Union Strikes (6):</strong> Freeze a player's sector. For 2 turns, the chosen sector will not trigger.</li>
          <li><strong>Hesitation (4):</strong> Target an opponent and uninvest an entry-level worker (1 WP) from the chosen sector.</li>
          <li><strong>Moles (4):</strong> Target player receives a mole and cannot invest their workers on their next turn if they pass Start. Moles do not stack and must expire before another Mole card is applied. If a Mole card cannot be used, keep it but do not apply it.</li>
          <li><strong>Angel Investor (1):</strong> Draw 4 new workers.</li>
          <li><strong>Corporate Scandal (1):</strong> Choose one player; they uninvest up to 4 worker points invested in a sector.</li>
        </ul>
      </RuleSection>

      <RuleSection title="Winning the Game">
        <p>To win, control all four sectors by having the highest total invested worker points in each sector.</p>
      </RuleSection>
    </section>
  )
}