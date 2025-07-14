'use client'

import React from 'react'

export default function ContactUs() {
  return (
    <section style={{padding: '60px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px' }}>
          Contact Us
        </h2>
        <p style={{ marginBottom: '20px', lineHeight: 1.6 }}>
          Welcome! If you have any needs, please send us an email and we’ll get in touch within 24 hours.
        </p>
        <p style={{ marginBottom: '8px' }}>
          <strong>Address:</strong> Floor 4, A Building, Lehuahang industrial zone, No.37 Kengwei Road,
          Shiyan Town, Bao’an, Shenzhen, China
        </p>
        <p style={{ marginBottom: '8px' }}>
          <strong>Email:</strong> <a href="mailto:info@youlumi.com">info@youlumi.com</a>
        </p>
        <p style={{ color: '#555' }}>(Mon - Fri 09:00 a.m. to 18:00 p.m. CST)</p>
      </div>
    </section>
  )
}
