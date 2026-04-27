import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SafetyLink | Compliance, made human',
  description: 'SafetyLink combines site-specific safety programs, bilingual support, OSHA-authorized expert guidance, and software for audits, inspections, and training.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700;800&family=IBM+Plex+Mono:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ backgroundColor: 'var(--sl-bg, #ffffff)', color: 'var(--sl-text, #1F2937)', fontFamily: "'Source Sans 3', sans-serif", margin: 0, padding: 0 }}>
        
        {/* Global Navbar */}
        <header style={{ 
          padding: '1rem 2rem', 
          borderBottom: '1px solid var(--sl-border, #E4E7EC)', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(12px)',
          zIndex: 100
        }}>
          <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>
            <Link href="/">
              <img src="/assets/logo-full.png" alt="SafetyLink" style={{ height: '32px', display: 'block' }} />
            </Link>
          </div>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <Link href="/platform" style={{ color: 'var(--sl-navy-700)', textDecoration: 'none', fontWeight: 600 }}>Platform</Link>
            <Link href="/services" style={{ color: 'var(--sl-navy-700)', textDecoration: 'none', fontWeight: 600 }}>Services</Link>
            <Link href="/industries" style={{ color: 'var(--sl-navy-700)', textDecoration: 'none', fontWeight: 600 }}>Industries</Link>
            <Link href="/resources" style={{ color: 'var(--sl-navy-700)', textDecoration: 'none', fontWeight: 600 }}>Resources</Link>
          </nav>
          <Link href="/consultation" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: 'var(--sl-green-600, #28B432)',
              color: '#fff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--sl-radius-md, 10px)',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              Request a Free Consultation
            </button>
          </Link>
        </header>

        {children}

        {/* Global Footer */}
        <footer style={{ backgroundColor: 'var(--sl-navy-900, #0B1E31)', color: 'var(--sl-ink-200, #E5E7EB)', padding: 'var(--sl-space-11, 96px) 2rem var(--sl-space-6, 24px)', fontSize: '0.9rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '48px' }}>
            
            {/* Left Column */}
            <div style={{ gridColumn: '1 / span 2' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Link href="/">
                  <img src="/assets/logo-full-white.png" alt="SafetyLink" style={{ height: '32px', display: 'block' }} />
                </Link>
              </div>
              <p style={{ lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '400px' }}>
                The only legally defensible safety compliance platform backed by OSHA leadership and top labor law experts. Protecting workforces with bilingual training, audits, and compliance solutions.
              </p>
              <p style={{ fontStyle: 'italic', color: 'var(--sl-ink-300, #9CA3AF)', marginBottom: '2rem', lineHeight: 1.5, maxWidth: '400px' }}>
                SafetyLink is not affiliated with or endorsed by OSHA. Advisory support provided by former OSHA leadership.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--sl-ink-200, #D1D5DB)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                  <span>Safety Link, LLC</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>111 Congress Ave, Suite 500</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  <span>Austin, Texas 78701</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>888-373-7822</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>833-780-0728</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span>compliance@safetylink.ai</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  <span>Website: https://safetylink.ai</span>
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div>
              <h3 className="sl-h3" style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1.5rem', fontWeight: 600 }}>Quick links</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li><Link href="/platform" style={{ color: 'var(--sl-ink-200)', textDecoration: 'none' }}>Solutions</Link></li>
                <li><Link href="/services" style={{ color: 'var(--sl-ink-200)', textDecoration: 'none' }}>Services</Link></li>
                <li><Link href="/contact" style={{ color: 'var(--sl-ink-200)', textDecoration: 'none' }}>Contact support</Link></li>
                <li><Link href="/privacy" style={{ color: 'var(--sl-ink-200)', textDecoration: 'none' }}>Privacy policy</Link></li>
                <li><Link href="#" style={{ color: 'var(--sl-ink-200)', textDecoration: 'none' }}>Login</Link></li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="sl-h3" style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1.5rem', fontWeight: 600 }}>Compliance & trust</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--sl-ink-200)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sl-green-600, #28B432)" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
                  <span>OSHA Authorized trainers with years of experience</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--sl-ink-200)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sl-green-600, #28B432)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
                  <span>SOC 2 Compliant</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--sl-ink-200)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sl-green-600, #28B432)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
                  <span>Privacy Shield</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', color: 'var(--sl-ink-300, #9CA3AF)' }}>
            <p style={{ margin: 0 }}>&copy; 2026 SafetyLink. All rights reserved. | Legally defensible safety compliance solutions.</p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy policy</Link>
              <Link href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of service</Link>
              <Link href="/accessibility" style={{ color: 'inherit', textDecoration: 'none' }}>Accessibility</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
