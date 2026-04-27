import Link from 'next/link';

export default function ContactPage() {
  return (
    <main style={{ minHeight: '60vh', padding: '120px 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1 className="sl-h1" style={{ color: 'var(--sl-navy-700)', marginBottom: '2rem' }}>Contact Support</h1>
      <p className="sl-body" style={{ color: 'var(--sl-ink-600)', marginBottom: '3rem', fontSize: '1.25rem' }}>
        We are here to help. Reach out to our team using the details below or request a free consultation.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left', marginBottom: '3rem' }}>
        <div style={{ backgroundColor: 'var(--sl-bg-subtle)', padding: '2rem', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--sl-navy-700)', marginBottom: '1rem' }}>General Inquiries</h3>
          <p style={{ color: 'var(--sl-ink-600)', margin: '0 0 0.5rem 0' }}><strong>Email:</strong> compliance@safetylink.ai</p>
          <p style={{ color: 'var(--sl-ink-600)', margin: '0 0 0.5rem 0' }}><strong>Phone:</strong> 888-373-7822</p>
        </div>
        <div style={{ backgroundColor: 'var(--sl-bg-subtle)', padding: '2rem', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--sl-navy-700)', marginBottom: '1rem' }}>Mailing Address</h3>
          <p style={{ color: 'var(--sl-ink-600)', margin: '0 0 0.5rem 0' }}>Safety Link, LLC</p>
          <p style={{ color: 'var(--sl-ink-600)', margin: '0 0 0.5rem 0' }}>111 Congress Ave, Suite 500</p>
          <p style={{ color: 'var(--sl-ink-600)', margin: 0 }}>Austin, Texas 78701</p>
        </div>
      </div>

      <Link href="/consultation">
        <button style={{
          backgroundColor: 'var(--sl-green-600, #28B432)',
          color: '#fff',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: 'var(--sl-radius-md, 10px)',
          fontWeight: 600,
          fontSize: '1.1rem',
          cursor: 'pointer'
        }}>
          Request a Consultation
        </button>
      </Link>
    </main>
  );
}
