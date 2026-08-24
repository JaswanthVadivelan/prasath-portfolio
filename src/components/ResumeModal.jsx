import React from 'react';
import { X, Download, FileText } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDirectDownload = () => {
    const link = document.createElement('a');
    link.href = '/Prasath_M_Technical_Support_Engineer_Resume.pdf';
    link.download = 'Prasath_M_Technical_Support_Engineer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={20} color="#155EEF" />
            <span className="modal-title">Prasath M - Official Resume (PDF)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button className="btn-primary" onClick={handleDirectDownload} style={{ padding: '6px 14px', fontSize: '0.8125rem' }}>
              <Download size={14} />
              Download PDF
            </button>
            <button className="modal-close" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-body">
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '32px', fontFamily: 'Inter, sans-serif' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', borderBottom: '2px solid var(--border-color)', paddingBottom: '16px', marginBottom: '20px' }}>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>PRASATH M</h1>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--brand-blue)', marginBottom: '6px' }}>
                Technical Support Engineer | IT Operations | System Administration
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                Chennai, India &bull; +91 8122126203 &bull; hariprasath2954@gmail.com &bull; linkedin.com/in/prasathmurugan
              </div>
            </div>

            {/* Summary */}
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--brand-blue)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
                Professional Summary
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Enterprise IT support professional with experience supporting Windows infrastructure, Active Directory, Microsoft 365, endpoint environments, networking, identity and access management, and incident resolution.
              </p>
            </div>

            {/* Experience */}
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--brand-blue)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
                Professional Experience
              </h3>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                  <span>Technical Support Engineer &bull; Aspire Systems</span>
                  <span>Feb 2026 – Present | Chennai, India</span>
                </div>
                <ul style={{ paddingLeft: '18px', marginTop: '6px', fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  <li>Provide enterprise technical support for Windows systems, applications, hardware, software, and endpoint issues using structured troubleshooting and escalation procedures.</li>
                  <li>Perform user provisioning, account configuration, access management, password administration, and role-based permissions to support enterprise identity requirements.</li>
                  <li>Support Active Directory and Microsoft 365 administration, including users, groups, Outlook, Teams, and OneDrive.</li>
                  <li>Troubleshoot TCP/IP, DNS, DHCP, VPN, Ethernet, and firewall issues using systematic diagnostics.</li>
                  <li>Support enterprise endpoint and security operations involving EDR/XDR and Zscaler ZIA, including alert triage, agent troubleshooting, security-log monitoring, and policy resolution.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                  <span>AR/VR Intern &bull; Monolith Technologies Pvt. Ltd.</span>
                  <span>Aug 2024 – Nov 2024 | Chennai, India</span>
                </div>
                <ul style={{ paddingLeft: '18px', marginTop: '4px', fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  <li>Developed and tested Shogun Run using Unreal Engine 5, contributing to gameplay implementation, debugging, testing, and performance optimization.</li>
                </ul>
              </div>
            </div>

            {/* Enterprise Projects */}
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--brand-blue)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
                Selected Projects (Aspire Systems)
              </h3>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div><strong>Ubuntu-to-Active Directory Migration (2026):</strong> Supported migration of 200+ Ubuntu Linux users into Windows Active Directory using SSSD and Realmd for centralized authentication and policy enforcement.</div>
                <div><strong>Endpoint & Cloud Security Support (2026):</strong> Supported EDR/XDR and Zscaler ZIA operations across 6,000+ endpoints, including alert triage and security-log monitoring.</div>
                <div><strong>Windows 10-to-11 Upgrade (2026):</strong> Supported Windows 10-to-Windows 11 upgrades for 6,000+ users, covering system preparation, installation, configuration, and troubleshooting.</div>
              </div>
            </div>

            {/* Skills & Credentials */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--brand-blue)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
                  Technical Skills
                </h3>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  <strong>SysAdmin:</strong> Windows 10/11, Active Directory, Group Policy, Microsoft 365, Azure AD<br/>
                  <strong>Networking:</strong> TCP/IP, DNS, DHCP, VPN, Ethernet, Diagnostics<br/>
                  <strong>ITSM & Security:</strong> ServiceNow, JIRA, EDR/XDR, Zscaler ZIA<br/>
                  <strong>Programming:</strong> Python, SQL, C, C++
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--brand-blue)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
                  Education & Certifications
                </h3>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  <strong>B.Tech:</strong> AI & Data Science (2021–2025)<br/>
                  Prince Dr. Vasudevan College of Eng. & Tech.<br/>
                  <strong>Certs:</strong> Naalayathiran – IBM (2025), Network Essentials – Cisco (2024), DevOps – GUVI (2024)<br/>
                  <strong>Award:</strong> Best NSS Volunteer Award, Anna University
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
