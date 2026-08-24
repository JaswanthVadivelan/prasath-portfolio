import React, { useState } from 'react';
import { Download, Menu, X, Shield, FileText } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="nav-brand" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          <span className="brand-name">PRASATH M</span>
          <span className="brand-subtitle">Technical Support Engineer</span>
        </a>

        {/* Desktop & Mobile Navigation Links */}
        <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* Mobile Download Resume inside menu drawer */}
          {mobileMenuOpen && (
            <li style={{ width: '100%', marginTop: '8px' }}>
              <button 
                className="btn-primary" 
                style={{ width: '100%' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
              >
                <Download size={16} />
                Download Resume
              </button>
            </li>
          )}
        </ul>

        {/* Right CTA Actions */}
        <div className="nav-actions">
          <button 
            className="btn-primary"
            onClick={onOpenResume}
            title="Download PDF Resume"
            id="nav-download-resume-btn"
          >
            <Download size={16} />
            Download Resume
          </button>

          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
