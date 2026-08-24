import React from 'react';
import { ArrowDown, Download, CheckCircle2, Shield } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import HeroVisual from './HeroVisual';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Text Column */}
          <div className="hero-text-content">
            <div className="hero-eyebrow">
              <Shield size={14} />
              TECHNICAL SUPPORT ENGINEER
            </div>

            <h1 className="hero-title">PRASATH M</h1>

            <div className="hero-headline">
              <span className="hero-headline-badge"></span>
              Technical Support Engineer | IT Operations | System Administration
            </div>

            <p className="hero-description">
              Enterprise IT support professional with experience supporting Windows infrastructure, Active Directory, Microsoft 365, endpoint environments, networking, identity and access management, and incident resolution.
            </p>

            <div className="hero-ctas">
              <a href="#experience" className="btn-primary" id="hero-view-experience-btn">
                View Experience
                <ArrowDown size={16} />
              </a>

              <button 
                className="btn-secondary" 
                onClick={onOpenResume}
                id="hero-download-resume-btn"
              >
                <Download size={16} />
                Download Resume
              </button>

              <a 
                href="https://www.linkedin.com/in/prasathmurugan/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline-brand"
                id="hero-linkedin-btn"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </div>

            {/* Hero Metrics */}
            <div className="hero-metrics">
              <div className="hero-metric-card">
                <div className="hero-metric-value">6+ Months</div>
                <div className="hero-metric-label">Enterprise IT Experience</div>
                <div className="hero-metric-note">Aspire Systems</div>
              </div>

              <div className="hero-metric-card">
                <div className="hero-metric-value">6,000+</div>
                <div className="hero-metric-label">Endpoints / Users Supported</div>
                <div className="hero-metric-note">Enterprise Environment Exposure</div>
              </div>

              <div className="hero-metric-card">
                <div className="hero-metric-value">200+</div>
                <div className="hero-metric-label">Ubuntu Linux Users</div>
                <div className="hero-metric-note">Active Directory Migration</div>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="hero-visual-container">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
