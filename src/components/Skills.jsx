import React from 'react';
import { Cpu, Network, Headphones, ShieldCheck, Code2 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      id: 'cat-sysadmin',
      title: 'System Administration',
      icon: <Cpu size={18} color="#155EEF" />,
      skills: [
        'Windows 10/11',
        'Active Directory',
        'Group Policy',
        'User Provisioning',
        'Identity & Access Management',
        'Microsoft 365',
        'Azure AD / Entra ID',
        'Endpoint Support'
      ]
    },
    {
      id: 'cat-networking',
      title: 'Networking',
      icon: <Network size={18} color="#155EEF" />,
      skills: [
        'TCP/IP',
        'DNS',
        'DHCP',
        'VPN',
        'Ethernet',
        'Network Diagnostics',
        'Firewall Troubleshooting',
        'Ping',
        'Tracert',
        'IPConfig'
      ]
    },
    {
      id: 'cat-support',
      title: 'Technical Support & ITSM',
      icon: <Headphones size={18} color="#155EEF" />,
      skills: [
        'Desktop Support',
        'Hardware Troubleshooting',
        'Software Installation',
        'OS Installation',
        'Application Support',
        'Incident Management',
        'Incident Escalation',
        'Remote Desktop',
        'Technical Documentation',
        'ServiceNow',
        'JIRA'
      ]
    },
    {
      id: 'cat-security',
      title: 'Security & Tools',
      icon: <ShieldCheck size={18} color="#155EEF" />,
      skills: [
        'EDR/XDR',
        'Zscaler ZIA',
        'Security Log Monitoring',
        'Alert Triage',
        'Microsoft Office',
        'Git'
      ]
    },
    {
      id: 'cat-programming',
      title: 'Programming & Databases',
      icon: <Code2 size={18} color="#155EEF" />,
      skills: ['Python', 'SQL', 'C', 'C++']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-eyebrow">
          <Cpu size={14} />
          CORE COMPETENCIES
        </div>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Structured inventory of technical domains, enterprise tools, and IT infrastructure administration skill sets.
        </p>

        <div className="skills-categories">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="skills-category-card">
              <div className="category-title">
                {cat.icon}
                <span>{cat.title}</span>
              </div>
              <div className="skill-pills">
                {cat.skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
