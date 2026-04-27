"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResourcesPage() {
  const guides = [
    { title: "The 2024 Guide to OSHA Recordkeeping", type: "Guide" },
    { title: "Fall Protection: What You Need to Know", type: "Checklist" },
    { title: "Navigating a Surprise OSHA Inspection", type: "Playbook" }
  ];

  const caseStudies = [
    { title: "Acme Manufacturing: -40% Incident Reduction", industry: "Manufacturing" },
    { title: "BuildCorp: Streamlining Toolbox Talks Across 15 Sites", industry: "Construction" }
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--sl-navy-900, #0B1E31)',
        color: '#fff',
        padding: '120px 2rem 80px',
        textAlign: 'center'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <h1 className="sl-h1" style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#ffffff' }}>
            Resources & Insights
          </h1>
          <p className="sl-body" style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem', color: '#ffffff' }}>
            Actionable OSHA compliance guides and real-world case studies from our clients.
          </p>
        </motion.div>
      </section>

      {/* Guides Section */}
      <section style={{ padding: '96px 2rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--sl-navy-700)', marginBottom: '3rem' }}>OSHA Guides & Checklists</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {guides.map((guide, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  border: '1px solid var(--sl-ink-200, #E4E7EC)',
                  borderRadius: '12px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--sl-bg-subtle, #F8FAFC)'
                }}
              >
                <div>
                  <span style={{ 
                    display: 'inline-block', 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: 'var(--sl-navy-100)', 
                    color: 'var(--sl-navy-700)', 
                    borderRadius: '20px', 
                    fontSize: '0.875rem', 
                    fontWeight: 600,
                    marginBottom: '1rem' 
                  }}>
                    {guide.type}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--sl-navy-700)', margin: '0 0 1.5rem 0', lineHeight: 1.4 }}>
                    {guide.title}
                  </h3>
                </div>
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--sl-green-600, #28B432)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: 0
                }}>
                  Download PDF &rarr;
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section style={{ padding: '96px 2rem', backgroundColor: 'var(--sl-navy-800, #102C49)', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Client Case Studies</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  padding: '3rem 2rem',
                  backgroundColor: 'var(--sl-navy-900)'
                }}
              >
                <span style={{ color: 'var(--sl-green-500)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {study.industry}
                </span>
                <h3 style={{ fontSize: '1.75rem', margin: '1rem 0 2rem 0', lineHeight: 1.4 }}>
                  {study.title}
                </h3>
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: 0,
                  textDecoration: 'underline'
                }}>
                  Read Full Study
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '96px 2rem', backgroundColor: 'var(--sl-bg-subtle, #F8FAFC)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--sl-navy-700)' }}>Stop guessing about compliance.</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--sl-ink-600)', marginBottom: '2.5rem' }}>
            Get expert guidance and powerful tools to protect your business.
          </p>
          <Link href="/consultation" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: 'var(--sl-green-600, #28B432)',
              color: '#fff',
              border: 'none',
              padding: '1rem 2.5rem',
              borderRadius: 'var(--sl-radius-md, 10px)',
              fontWeight: 600,
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}>
              Request a Free Consultation
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}
