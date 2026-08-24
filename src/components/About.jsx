import React from 'react';
import { UserCheck, Building2, MapPin, GraduationCap, Briefcase, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-eyebrow">
          <UserCheck size={14} />
          BACKGROUND & EXPERIENCE
        </div>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          {/* Left Column: Detailed Bio */}
          <div className="about-content">
            <p>
              I am a Technical Support Engineer with enterprise IT experience at Aspire Systems, supporting Windows infrastructure, Active Directory, Microsoft 365, endpoint environments, networking, and identity and access management.
            </p>

            <p>
              My experience includes user provisioning, account and access administration, Windows and application troubleshooting, hardware and software support, Active Directory and Microsoft 365 administration, and network troubleshooting across TCP/IP, DNS, DHCP, VPN, Ethernet, and firewall environments.
            </p>

            <p>
              I have supported large-scale enterprise environments involving 6,000+ endpoints and users, including EDR/XDR and Zscaler ZIA operations, security-log monitoring, alert triage, endpoint-agent troubleshooting, and incident escalation.
            </p>

            <p>
              I have also supported Windows 10-to-Windows 11 upgrades for 6,000+ users and migration of 200+ Ubuntu Linux users into Windows Active Directory using SSSD and Realmd.
            </p>

            <div className="about-target-callout">
              <h4>Target Opportunities</h4>
              <p>
                Interested in opportunities across Technical Support, IT Support, IT Operations, Endpoint Support, and Junior System Administration.
              </p>
            </div>
          </div>

          {/* Right Column: Professional Snapshot */}
          <div className="snapshot-container">
            <div className="snapshot-card">
              <div className="snapshot-header">
                <div className="snapshot-avatar">PM</div>
                <div className="snapshot-title">
                  <h3>Prasath M</h3>
                  <p>Technical Support Engineer</p>
                </div>
              </div>

              <ul className="snapshot-list">
                <li className="snapshot-item">
                  <Briefcase className="snapshot-icon" size={18} />
                  <div>
                    <span className="snapshot-label">Role</span>
                    <span className="snapshot-val">Technical Support Engineer</span>
                  </div>
                </li>

                <li className="snapshot-item">
                  <Building2 className="snapshot-icon" size={18} />
                  <div>
                    <span className="snapshot-label">Company</span>
                    <span className="snapshot-val">Aspire Systems</span>
                  </div>
                </li>

                <li className="snapshot-item">
                  <ShieldCheck className="snapshot-icon" size={18} />
                  <div>
                    <span className="snapshot-label">Experience</span>
                    <span className="snapshot-val">6+ months enterprise IT</span>
                  </div>
                </li>

                <li className="snapshot-item">
                  <MapPin className="snapshot-icon" size={18} />
                  <div>
                    <span className="snapshot-label">Location</span>
                    <span className="snapshot-val">Chennai, India</span>
                  </div>
                </li>

                <li className="snapshot-item">
                  <GraduationCap className="snapshot-icon" size={18} />
                  <div>
                    <span className="snapshot-label">Education</span>
                    <span className="snapshot-val">B.Tech – Artificial Intelligence and Data Science</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
