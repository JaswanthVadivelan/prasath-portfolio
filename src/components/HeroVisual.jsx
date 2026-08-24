import React from 'react';
import { Monitor, Server, Cloud, ShieldCheck, Wifi, Activity, Lock, Database } from 'lucide-react';

export default function HeroVisual() {
  return (
    <div className="hero-visual-card">
      <div className="visual-header">
        <div className="visual-title">
          <Activity size={18} color="#155EEF" />
          <span>Enterprise IT Infrastructure & Support Topology</span>
        </div>
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span>Systems Operational</span>
        </div>
      </div>

      <div className="topology-grid">
        {/* Node 1: Workstations & Endpoints */}
        <div className="topology-node">
          <div className="node-icon">
            <Monitor size={20} />
          </div>
          <div className="node-info">
            <h4>Endpoints & Systems</h4>
            <p>Windows 10 / 11 Workstations & Desktop Support</p>
            <span className="node-tag">6,000+ Users</span>
          </div>
        </div>

        {/* Node 2: Directory Services */}
        <div className="topology-node">
          <div className="node-icon">
            <Server size={20} />
          </div>
          <div className="node-info">
            <h4>Active Directory & SSSD</h4>
            <p>Domain Controller, Realmd & Group Policy</p>
            <span className="node-tag">Identity Management</span>
          </div>
        </div>

        {/* Node 3: Cloud & SaaS */}
        <div className="topology-node">
          <div className="node-icon">
            <Cloud size={20} />
          </div>
          <div className="node-info">
            <h4>Microsoft 365 & Entra ID</h4>
            <p>Outlook, Teams, OneDrive & Azure AD</p>
            <span className="node-tag">Cloud Administration</span>
          </div>
        </div>

        {/* Node 4: Endpoint Security */}
        <div className="topology-node">
          <div className="node-icon">
            <ShieldCheck size={20} />
          </div>
          <div className="node-info">
            <h4>EDR/XDR & Zscaler ZIA</h4>
            <p>Alert Triage, Security Log Monitoring & Firewall</p>
            <span className="node-tag">Endpoint Security</span>
          </div>
        </div>

        {/* Node 5: Network Diagnostics */}
        <div className="topology-node">
          <div className="node-icon">
            <Wifi size={20} />
          </div>
          <div className="node-info">
            <h4>Network Operations</h4>
            <p>TCP/IP, DNS, DHCP, VPN & Ethernet Diagnostics</p>
            <span className="node-tag">Network Support</span>
          </div>
        </div>

        {/* Node 6: ITSM Operations */}
        <div className="topology-node">
          <div className="node-icon">
            <Lock size={20} />
          </div>
          <div className="node-info">
            <h4>ITSM & Incident Resolution</h4>
            <p>ServiceNow & JIRA Alert Escalation</p>
            <span className="node-tag">Enterprise ITSM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
