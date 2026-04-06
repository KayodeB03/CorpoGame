import FlipCard from '../components/FlipCard'

export default function ComponentsPage() {
  const auditCards = Array.from({ length: 8 }, (_, i) => `Audit ${i + 1}`)
  const workerCards = ['Entry-Level', 'Middle', 'Executive']

  return (
    <section className="section timer-section">
      <h1>View Components</h1>

      <h2>Worker Cards</h2>
      <div className="component-row">
        {workerCards.map(worker => (
          <FlipCard key={worker} front={worker} back="Details" />
        ))}
      </div>

      <h2>Audit Cards</h2>
      <div className="component-row">
        {auditCards.map(card => (
          <FlipCard key={card} front={card} back="Back" />
        ))}
      </div>

      <h2>PR Token</h2>
      <div className="component-row">
        <FlipCard front="PR Token" back="Back" />
      </div>
    </section>
  )
}