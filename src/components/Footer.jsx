import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">PRASATH M</div>
          <div className="footer-tagline">
            Technical Support Engineer | IT Operations | System Administration
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
            Chennai, India &bull; hariprasath2954@gmail.com
          </div>

          <ul className="footer-links">
            <li>
              <a 
                href="mailto:hariprasath2954@gmail.com" 
                className="footer-link"
                id="footer-email-link"
              >
                <Mail size={14} />
                Email
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/prasathmurugan/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link"
                id="footer-linkedin-link"
              >
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/prasathm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link"
                id="footer-github-link"
              >
                <GithubIcon size={14} />
                GitHub
              </a>
            </li>
          </ul>

          <div className="footer-copy">
            &copy; 2026 Prasath M. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
