import React from 'react';
import { Award, GraduationCap, ShieldCheck, Trophy } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      title: 'Naalayathiran',
      issuer: 'IBM SkillsBuild',
      year: '2025'
    },
    {
      title: 'Network Essentials',
      issuer: 'Cisco',
      year: '2024'
    },
    {
      title: 'DevOps',
      issuer: 'GUVI',
      year: '2024'
    }
  ];

  return (
    <section id="certifications" className="credentials-section">
      <div className="container">
        <div className="section-eyebrow">
          <Award size={14} />
          QUALIFICATIONS
        </div>
        <h2 className="section-title">Certifications & Education</h2>
        <p className="section-subtitle">
          Verified technical certifications, engineering degree, and recognized honors.
        </p>

        <div className="credentials-grid">
          {/* Column 1: Certifications */}
          <div>
            <div className="credential-column-title">
              <ShieldCheck size={20} color="#155EEF" />
              <span>Certifications</span>
            </div>
            {certs.map((c, idx) => (
              <div key={idx} className="credential-card">
                <div className="cert-name">{c.title}</div>
                <div className="cert-issuer">{c.issuer}</div>
                <div className="cert-year">{c.year}</div>
              </div>
            ))}
          </div>

          {/* Column 2: Education */}
          <div id="education">
            <div className="credential-column-title">
              <GraduationCap size={20} color="#155EEF" />
              <span>Education</span>
            </div>
            <div className="credential-card">
              <div className="edu-degree">B.Tech – Artificial Intelligence and Data Science</div>
              <div className="edu-college">Prince Dr. Vasudevan College of Engineering and Technology</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Chennai, India
              </div>
              <div className="edu-year">2021 – 2025</div>
            </div>
          </div>

          {/* Column 3: Honors & Awards */}
          <div>
            <div className="credential-column-title">
              <Trophy size={20} color="#155EEF" />
              <span>Honors & Awards</span>
            </div>
            <div className="credential-card">
              <span className="honor-badge">Anna University NSS</span>
              <div className="cert-name">Best NSS Volunteer Award</div>
              <div className="edu-college">National Service Scheme (NSS) Cell, Anna University</div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
                Recognized for leadership, active community outreach, and organizational service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
