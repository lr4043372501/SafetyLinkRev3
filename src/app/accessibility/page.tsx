export default function AccessibilityPage() {
  return (
    <main style={{ minHeight: '60vh', padding: '120px 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="sl-h1" style={{ color: 'var(--sl-navy-700)', marginBottom: '2rem' }}>Accessibility Statement</h1>
      <p className="sl-body" style={{ color: 'var(--sl-ink-600)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        SafetyLink is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
      </p>
      <p className="sl-body" style={{ color: 'var(--sl-ink-600)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        <strong>Feedback</strong><br/>
        We welcome your feedback on the accessibility of SafetyLink. Please let us know if you encounter accessibility barriers on SafetyLink:
        <br/><br/>
        E-mail: compliance@safetylink.ai<br/>
        Postal address: 111 Congress Ave, Suite 500, Austin, Texas 78701
      </p>
    </main>
  );
}
