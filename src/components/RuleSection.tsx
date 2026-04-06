interface RuleSectionProps {
  title: string
  children: React.ReactNode
}

export default function RuleSection({ title, children }: RuleSectionProps) {
  return (
    <article className="rule-section">
      <h2>{title}</h2>
      {children}
    </article>
  )
}