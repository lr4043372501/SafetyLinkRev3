"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      


      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--sl-navy-900, #0B1E31)',
        color: '#fff',
        padding: '120px 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}
        >
          <h1 className="sl-h1" style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#ffffff' }}>Stop chasing OSHA paperwork.<br/>Start running a safer site.</h1>
          <p className="sl-body" style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem', color: '#ffffff' }}>
            Compliance, made human. SafetyLink combines OSHA-authorized expert guidance with powerful software for audits, inspections, and training.
          </p>
          <Link href="/consultation" style={{ textDecoration: 'none' }}>
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
              Request a Free Consultation
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Dynamic Walkthrough Section */}
      <section style={{ padding: '96px 2rem', backgroundColor: 'var(--sl-bg-subtle, #F8FAFC)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', color: 'var(--sl-navy-700, #14375B)', marginBottom: '3rem' }}
          >
            How We Help: From Walkthrough to Action Plan
          </motion.h2>
          
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { step: 1, title: 'Site Walkthrough', desc: 'We visit your facility to understand your operations.' },
              { step: 2, title: 'Current Situation Report', desc: 'We identify gaps, risks, and compliance needs.' },
              { step: 3, title: 'Custom Action Plan', desc: 'A clear roadmap to becoming provably safer and OSHA compliant.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                style={{
                  backgroundColor: '#fff',
                  padding: '24px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  flex: '1 1 300px',
                  textAlign: 'left'
                }}
              >
                <div style={{ 
                  display: 'inline-block',
                  backgroundColor: 'var(--sl-navy-700, #14375B)', 
                  color: '#fff', 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  textAlign: 'center', 
                  lineHeight: '32px',
                  marginBottom: '1rem',
                  fontWeight: 'bold'
                }}>{item.step}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--sl-navy-700, #14375B)' }}>{item.title}</h3>
                <p style={{ color: 'var(--sl-text, #1F2937)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Pronged Approach Section */}
      <section style={{ padding: '96px 2rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{ flex: '1 1 400px' }}
            >
              <h2 className="sl-h2" style={{ color: 'var(--sl-navy-700, #14375B)', marginBottom: '1.5rem' }}>Expertise on call.<br/>Built for the field.</h2>
              <p className="sl-body" style={{ color: 'var(--sl-ink-600, #475467)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                <strong>For the Office:</strong> Have real OSHA-authorized experts on your side. We build your site-specific programs and keep you updated on regulatory changes.
              </p>
              <p className="sl-body" style={{ color: 'var(--sl-ink-600, #475467)', fontSize: '1.1rem' }}>
                <strong>For the Field:</strong> A bilingual, mobile-first app designed for hard hats and gloves. Workers can complete checklists, report hazards, and finish training right from their phones.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{ flex: '1 1 400px', backgroundColor: 'var(--sl-bg-subtle, #F8FAFC)', borderRadius: '16px', height: '400px', border: '1px solid var(--sl-ink-200, #E4E7EC)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {/* Placeholder for App Interface Image */}
              <div style={{ color: 'var(--sl-ink-400)', fontWeight: 600 }}>Mobile App Preview</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section style={{ padding: '96px 2rem', backgroundColor: 'var(--sl-navy-900, #0B1E31)', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#ffffff' }}
          >
            Compliance tailored to your worksite.
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {['Construction', 'Manufacturing', 'Logistics', 'Healthcare'].map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: 'var(--sl-green-500, #3FC548)' }}
                style={{
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 'var(--sl-radius-md, 10px)',
                  padding: '3rem 2rem',
                  backgroundColor: 'var(--sl-navy-800, #102C49)',
                  cursor: 'pointer'
                }}
              >
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Case Study */}
      <section style={{ padding: '96px 2rem', backgroundColor: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="sl-h2" 
            style={{ color: 'var(--sl-navy-700, #14375B)', marginBottom: '2rem' }}
          >
            Provably safer, provably cheaper.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              padding: '3rem',
              backgroundColor: 'var(--sl-bg-subtle, #F8FAFC)',
              borderRadius: 'var(--sl-radius-lg, 14px)',
              border: '1px solid var(--sl-ink-200, #E4E7EC)'
            }}
          >
            <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--sl-green-600, #28B432)', margin: '0 0 1rem 0' }}>-40%</p>
            <p className="sl-body" style={{ fontSize: '1.25rem', color: 'var(--sl-ink-700, #2C394B)', marginBottom: '1.5rem' }}>
              Reduction in recordable incidents within the first year of adopting SafetyLink across 12 manufacturing sites.
            </p>
            <p className="sl-body-sm" style={{ fontWeight: 600 }}>— VP of Operations, Acme Manufacturing</p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: 'var(--sl-navy-900, #0B1E31)', color: '#fff', padding: '64px 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#ffffff' }}>Ready to run a safer site?</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2.5rem', color: '#ffffff' }}>Let's find out where you stand. Book your on-site walkthrough today.</p>
          <Link href="/consultation" style={{ textDecoration: 'none' }}>
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
              Request a Free Consultation
            </button>
          </Link>
        </div>
      </section>
      
    </main>
  );
}
