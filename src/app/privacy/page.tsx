export default function PrivacyPage() {
  return (
    <main style={{ minHeight: '60vh', padding: '120px 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="sl-h1" style={{ color: 'var(--sl-navy-700)', marginBottom: '2rem' }}>Privacy Policy</h1>
      <p className="sl-body" style={{ color: 'var(--sl-ink-600)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        At SafetyLink, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our site.
      </p>
      <p className="sl-body" style={{ color: 'var(--sl-ink-600)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        <strong>1. Information We Collect</strong><br/>
        We collect Device Information using the following technologies: "Cookies" are data files that are placed on your device or computer and often include an anonymous unique identifier.
      </p>
      <p className="sl-body" style={{ color: 'var(--sl-ink-600)', lineHeight: 1.6 }}>
        <em>Last Updated: {new Date().getFullYear()}</em>
      </p>
    </main>
  );
}
