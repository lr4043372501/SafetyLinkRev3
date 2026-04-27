export default function TermsPage() {
  return (
    <main style={{ minHeight: '60vh', padding: '120px 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="sl-h1" style={{ color: 'var(--sl-navy-700)', marginBottom: '2rem' }}>Terms of Service</h1>
      <p className="sl-body" style={{ color: 'var(--sl-ink-600)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        Please read these terms of service carefully before using the SafetyLink website or software platform operated by SafetyLink, LLC.
      </p>
      <p className="sl-body" style={{ color: 'var(--sl-ink-600)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        <strong>Conditions of Use</strong><br/>
        We will provide services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions.
      </p>
      <p className="sl-body" style={{ color: 'var(--sl-ink-600)', lineHeight: 1.6 }}>
        <em>Last Updated: {new Date().getFullYear()}</em>
      </p>
    </main>
  );
}
