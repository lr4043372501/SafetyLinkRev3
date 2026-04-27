'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to an API/Formspree/etc here
    setSubmitted(true);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--sl-bg-subtle, #F8FAFC)', padding: '64px 2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', borderRadius: 'var(--sl-radius-lg, 14px)', padding: '3rem', boxShadow: 'var(--sl-shadow-md)' }}>
        
        {!submitted ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="sl-h2" style={{ marginBottom: '1rem', color: 'var(--sl-navy-900)' }}>Request a free consultation</h1>
            <p className="sl-body" style={{ fontSize: '1.1rem', color: 'var(--sl-ink-600)', marginBottom: '2rem' }}>
              Let us visit your site for a comprehensive walkthrough. We'll provide you with a detailed report of your current safety situation and an actionable plan to ensure OSHA compliance.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="firstName" className="sl-label">First name</label>
                  <input type="text" id="firstName" required style={{ padding: '0.75rem', borderRadius: 'var(--sl-radius-sm, 6px)', border: '1px solid var(--sl-border, #E4E7EC)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="lastName" className="sl-label">Last name</label>
                  <input type="text" id="lastName" required style={{ padding: '0.75rem', borderRadius: 'var(--sl-radius-sm, 6px)', border: '1px solid var(--sl-border, #E4E7EC)' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="company" className="sl-label">Company name</label>
                <input type="text" id="company" required style={{ padding: '0.75rem', borderRadius: 'var(--sl-radius-sm, 6px)', border: '1px solid var(--sl-border, #E4E7EC)' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" className="sl-label">Work email</label>
                  <input type="email" id="email" required style={{ padding: '0.75rem', borderRadius: 'var(--sl-radius-sm, 6px)', border: '1px solid var(--sl-border, #E4E7EC)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="phone" className="sl-label">Phone number</label>
                  <input type="tel" id="phone" required style={{ padding: '0.75rem', borderRadius: 'var(--sl-radius-sm, 6px)', border: '1px solid var(--sl-border, #E4E7EC)' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="industry" className="sl-label">Industry</label>
                <select id="industry" required style={{ padding: '0.75rem', borderRadius: 'var(--sl-radius-sm, 6px)', border: '1px solid var(--sl-border, #E4E7EC)', backgroundColor: '#fff' }}>
                  <option value="">Select an industry...</option>
                  <option value="construction">Construction</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="logistics">Logistics & Warehousing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" className="sl-label">How can we help? (Optional)</label>
                <textarea id="message" rows={4} style={{ padding: '0.75rem', borderRadius: 'var(--sl-radius-sm, 6px)', border: '1px solid var(--sl-border, #E4E7EC)', resize: 'vertical' }}></textarea>
              </div>

              <button type="submit" style={{
                backgroundColor: 'var(--sl-green-600, #28B432)',
                color: '#fff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: 'var(--sl-radius-md, 10px)',
                fontWeight: 600,
                fontSize: '1.1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '1rem'
              }}>
                Request consultation <ArrowRight size={20} />
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            style={{ textAlign: 'center', padding: '3rem 0' }}
          >
            <CheckCircle size={64} color="var(--sl-green-600, #28B432)" style={{ margin: '0 auto 1.5rem auto' }} />
            <h2 className="sl-h2" style={{ marginBottom: '1rem', color: 'var(--sl-navy-900)' }}>Request received</h2>
            <p className="sl-body" style={{ fontSize: '1.1rem', color: 'var(--sl-ink-600)' }}>
              Thank you for reaching out. A SafetyLink expert will contact you shortly to schedule your on-site walkthrough and start building your custom action plan.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
