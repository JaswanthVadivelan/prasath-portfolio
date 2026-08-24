import React from 'react';
import { FolderGit2, Shield, Terminal, Monitor, Server } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 'proj-ubuntu-ad',
      title: 'Ubuntu-to-Active Directory Migration',
      company: 'Aspire Systems',
      year: '2026',
      desc: 'Supported migration of 200+ Ubuntu Linux users into Windows Active Directory using SSSD and Realmd, enabling centralized authentication, identity management, and policy enforcement across previously unmanaged endpoints.',
      technologies: ['Ubuntu Linux', 'Active Directory', 'SSSD', 'Realmd', 'Identity Management']
    },
    {
      id: 'proj-security',
      title: 'Endpoint & Cloud Security Support',
      company: 'Aspire Systems',
      year: '2026',
      desc: 'Supported EDR/XDR and Zscaler ZIA operations across 6,000+ endpoints, including security-log monitoring, alert triage, incident escalation, agent troubleshooting, and policy-conflict resolution.',
      technologies: ['EDR/XDR', 'Zscaler ZIA', 'Endpoint Security', 'Security Monitoring', 'Incident Escalation']
    },
    {
      id: 'proj-upgrade',
      title: 'Windows 10-to-11 Upgrade',
      company: 'Aspire Systems',
      year: '2026',
      desc: 'Supported Windows 10-to-Windows 11 upgrades for 6,000+ users, covering system preparation, installation, configuration, validation, and post-upgrade troubleshooting.',
      technologies: ['Windows 10', 'Windows 11', 'System Configuration', 'OS Deployment', 'Troubleshooting']
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-eyebrow">
          <FolderGit2 size={14} />
          KEY INITIATIVES
        </div>
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-subtitle">
          Key enterprise infrastructure and endpoint support projects executed at Aspire Systems.
        </p>

        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="project-card">
              <div>
                <div className="project-header">
                  <span className="project-company">{proj.company}</span>
                  <span className="project-year">{proj.year}</span>
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
              </div>

              <div className="tech-tags">
                {proj.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Background Note */}
        <div style={{ marginTop: '36px', padding: '18px 24px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Server size={20} color="#155EEF" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
            <strong>Academic Project Background:</strong> B.Tech coursework & engineering projects include IoT robotic arm implementation and software testing fundamentals. Primary focus remains on Enterprise IT Support & System Administration.
          </p>
        </div>
      </div>
    </section>
  );
}
