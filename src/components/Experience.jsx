import React from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 'role-aspire',
      title: 'Technical Support Engineer',
      company: 'Aspire Systems',
      dates: 'Feb 2026 – Present',
      location: 'Chennai, India',
      isCurrent: true,
      isPrimary: true,
      bullets: [
        'Provide enterprise technical support for Windows systems, applications, hardware, software, and endpoint issues using structured troubleshooting, incident resolution, documentation, and escalation procedures.',
        'Perform user provisioning, account configuration, access management, password administration, and role-based permissions to support enterprise identity and access requirements.',
        'Support Active Directory and Microsoft 365 administration, including users, groups, Outlook, Teams, and OneDrive, with user-access and application troubleshooting.',
        'Troubleshoot TCP/IP, DNS, DHCP, VPN, Ethernet, firewall, software, and endpoint issues using systematic diagnostics and escalation procedures.',
        'Support enterprise endpoint and security operations involving EDR/XDR and Zscaler ZIA, including alert triage, endpoint-agent troubleshooting, security-log monitoring, and policy-related issue resolution.'
      ],
      technologies: [
        'Windows 10/11',
        'Active Directory',
        'Microsoft 365',
        'Azure AD / Entra ID',
        'Endpoint Support',
        'TCP/IP',
        'DNS',
        'DHCP',
        'VPN',
        'EDR/XDR',
        'Zscaler ZIA',
        'ServiceNow',
        'JIRA'
      ]
    },
    {
      id: 'role-monolith',
      title: 'AR/VR Intern',
      company: 'Monolith Technologies Pvt. Ltd.',
      dates: 'Aug 2024 – Nov 2024',
      location: 'Chennai, India',
      isCurrent: false,
      isPrimary: false,
      bullets: [
        'Developed and tested Shogun Run using Unreal Engine 5, contributing to gameplay implementation, debugging, testing, and performance optimization.'
      ],
      technologies: [
        'Unreal Engine 5',
        'Debugging',
        'Testing',
        'Performance Optimization'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-eyebrow">
          <Briefcase size={14} />
          CAREER HISTORY
        </div>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          Demonstrated hands-on experience in enterprise IT operations, system administration, and technical support.
        </p>

        <div className="timeline">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className={`experience-card ${exp.isPrimary ? 'primary-role' : 'secondary-role'}`}
            >
              <div className="role-header">
                <div className="role-title-group">
                  <h3>{exp.title}</h3>
                  <div className="company-name">
                    <Building2 size={16} />
                    <span>{exp.company}</span>
                    {exp.isCurrent && <span className="role-badge-current">Current Role</span>}
                  </div>
                </div>

                <div className="role-meta">
                  <span className="role-dates">{exp.dates}</span>
                  <span className="role-location">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="role-bullets">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              <div className="tech-tags">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
