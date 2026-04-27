"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: "On-Site Safety Audits",
      desc: "We don't just send a checklist. Our experts conduct comprehensive physical walkthroughs of your facility to identify hidden risks before OSHA does.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    {
      title: "Custom Safety Programs",
      desc: "Generic safety manuals collect dust. We write site-specific policies that reflect your actual operations and are easy for your team to follow.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
    {
      title: "OSHA Inspection Support",
      desc: "When the inspector arrives, you shouldn't be alone. We provide immediate guidance and representation during OSHA visits and help manage citations.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: "Specialized Training",
      desc: "From fall protection to hazard communication, our authorized trainers deliver engaging, compliant instruction that workers actually retain.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="10 8 16 12 10 16 10 8"></polygon>
        </svg>
      )
    }
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
            Expert guidance. Real-world solutions.
          </h1>
          <p className="sl-body" style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem', color: '#ffffff' }}>
            We pair powerful technology with deep regulatory expertise to protect your people and your business.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section style={{ padding: '96px 2rem', backgroundColor: 'var(--sl-bg-subtle, #F8FAFC)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundColor: '#fff',
                padding: '3rem',
                borderRadius: '16px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                marginBottom: '2rem',
                display: 'flex',
                gap: '2rem',
                alignItems: 'flex-start',
                border: '1px solid var(--sl-ink-200, #E4E7EC)'
              }}
            >
              <div style={{
                flexShrink: 0,
                width: '64px',
                height: '64px',
                backgroundColor: 'var(--sl-navy-100)',
                color: 'var(--sl-navy-700)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {service.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--sl-navy-700)', margin: '0 0 1rem 0' }}>{service.title}</h3>
                <p style={{ color: 'var(--sl-ink-600)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '96px 2rem', backgroundColor: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--sl-navy-700)' }}>Ready to protect your team?</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--sl-ink-600)', marginBottom: '2.5rem' }}>
            Get a clear, actionable report on your current compliance status.
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
