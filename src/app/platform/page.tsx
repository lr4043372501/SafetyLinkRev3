"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PlatformPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--sl-navy-900, #0B1E31)',
        color: '#fff',
        padding: '120px 2rem 80px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <h1 className="sl-h1" style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#ffffff' }}>
            The SafetyLink Platform
          </h1>
          <p className="sl-body" style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem', color: '#ffffff' }}>
            Built for the field. Managed from the office. A single source of truth for your entire safety program.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '96px 2rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--sl-green-100)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--sl-green-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--sl-navy-700)', marginBottom: '1rem' }}>Digital Audits & Inspections</h3>
              <p style={{ color: 'var(--sl-ink-600)', lineHeight: 1.6 }}>
                Turn paper checklists into instant data. Conduct thorough worksite inspections right from your mobile device, attach photos, and automatically generate corrective action reports.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--sl-navy-100)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--sl-navy-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--sl-navy-700)', marginBottom: '1rem' }}>Training Tracker</h3>
              <p style={{ color: 'var(--sl-ink-600)', lineHeight: 1.6 }}>
                Assign, track, and verify toolbox talks and certifications. Keep a digital record of who attended what, ensuring you're always ready for an OSHA request.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--sl-green-100)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--sl-green-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--sl-navy-700)', marginBottom: '1rem' }}>Real-Time Incident Reporting</h3>
              <p style={{ color: 'var(--sl-ink-600)', lineHeight: 1.6 }}>
                Capture hazards before they become injuries. Workers can submit near-misses and incidents directly from the field, alerting management instantly.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--sl-navy-100)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--sl-navy-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--sl-navy-700)', marginBottom: '1rem' }}>Centralized Document Vault</h3>
              <p style={{ color: 'var(--sl-ink-600)', lineHeight: 1.6 }}>
                Never scramble for an OSHA 300 log again. Securely store SDS sheets, safety manuals, and compliance documentation in one accessible location.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Full Width Image / App Mockup Section */}
      <section style={{ padding: '64px 2rem', backgroundColor: 'var(--sl-bg-subtle, #F8FAFC)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              backgroundColor: '#fff', 
              borderRadius: '16px', 
              height: '500px', 
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--sl-ink-200, #E4E7EC)'
            }}
          >
            <div style={{ color: 'var(--sl-ink-400)', fontSize: '1.25rem', fontWeight: 600 }}>Interactive Dashboard Preview</div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '96px 2rem', backgroundColor: 'var(--sl-navy-800, #102C49)', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>See the platform in action.</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem' }}>
            Book a walkthrough to see how SafetyLink can streamline your operations.
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
