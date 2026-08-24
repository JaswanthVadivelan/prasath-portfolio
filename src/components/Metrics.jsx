import React from 'react';
import { ShieldCheck, Users, RefreshCw, Lock } from 'lucide-react';

export default function Metrics() {
  const metrics = [
    {
      id: 'metric-endpoints',
      icon: <Users size={24} color="#155EEF" />,
      number: '6,000+',
      title: 'Endpoints / Users Supported',
      sub: 'Enterprise environment exposure supporting Windows infrastructure'
    },
    {
      id: 'metric-ubuntu',
      icon: <RefreshCw size={24} color="#155EEF" />,
      number: '200+',
      title: 'Ubuntu Linux Users',
      sub: 'Migrated into Active Directory via SSSD & Realmd'
    },
    {
      id: 'metric-upgrade',
      icon: <ShieldCheck size={24} color="#155EEF" />,
      number: 'Windows 10 → 11',
      title: 'Upgrade Support',
      sub: 'OS deployment, configuration & post-upgrade support'
    },
    {
      id: 'metric-security',
      icon: <Lock size={24} color="#155EEF" />,
      number: 'EDR/XDR + Zscaler',
      title: 'Endpoint Security Operations',
      sub: 'Alert triage, security log monitoring & agent support'
    }
  ];

  return (
    <section className="metrics-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-eyebrow" style={{ margin: '0 auto 10px auto' }}>
            SCALE & EXPOSURE
          </div>
          <h2 className="section-title">Enterprise Environment Exposure</h2>
        </div>

        <div className="metrics-grid">
          {metrics.map((m) => (
            <div key={m.id} className="metric-card">
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                {m.icon}
              </div>
              <div className="metric-number">{m.number}</div>
              <div className="metric-title">{m.title}</div>
              <div className="metric-sub">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
