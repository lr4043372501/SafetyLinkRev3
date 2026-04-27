"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function IndustriesPage() {
  const industries = [
    {
      name: "Construction",
      desc: "High-risk, fast-moving environments require proactive safety management. From fall protection to heavy machinery operation, our tools help site supervisors track compliance and keep crews safe.",
      color: "var(--sl-navy-800)"
    },
    {
      name: "Manufacturing",
      desc: "Lockout/tagout, machine guarding, and repetitive motion injuries are constant threats. We help plant managers implement robust safety protocols that reduce downtime and lower insurance premiums.",
      color: "var(--sl-navy-700)"
    },
    {
      name: "Logistics & Warehousing",
      desc: "Forklift safety, material handling, and loading dock hazards demand constant vigilance. Train your workforce and conduct daily inspections with our mobile-first platform.",
      color: "var(--sl-navy-800)"
    },
    {
      name: "Healthcare & Facilities",
      desc: "Protecting employees from bloodborne pathogens, ergonomic hazards, and workplace violence is critical. We build programs that meet strict regulatory standards while maintaining operational efficiency.",
      color: "var(--sl-navy-700)"
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
            Compliance tailored to your worksite.
          </h1>
          <p className="sl-body" style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem', color: '#ffffff' }}>
            We understand the unique hazards of your industry. Our software and experts adapt to the way you work.
          </p>
        </motion.div>
      </section>

      {/* Industries List */}
      <section style={{ padding: '96px 2rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: industry.color,
                color: '#fff',
                padding: '4rem 3rem',
                borderRadius: '16px',
                marginBottom: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h2 style={{ fontSize: '2.25rem', margin: '0 0 1rem 0' }}>{industry.name}</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.6, opacity: 0.9, margin: 0, maxWidth: '800px' }}>
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '96px 2rem', backgroundColor: 'var(--sl-bg-subtle, #F8FAFC)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--sl-navy-700)' }}>Ready to transform your safety culture?</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--sl-ink-600)', marginBottom: '2.5rem' }}>
            Let's discuss how we can build a site-specific program for your operations.
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
