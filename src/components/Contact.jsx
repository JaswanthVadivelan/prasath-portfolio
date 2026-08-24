import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download, Copy, Check, Send } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

export default function Contact({ onOpenResume, onShowToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const email = 'hariprasath2954@gmail.com';
  const phone = '+91 8122126203';
  const linkedin = 'https://www.linkedin.com/in/prasathmurugan/';

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
      onShowToast('Email address copied to clipboard!');
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
      onShowToast('Phone number copied to clipboard!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    onShowToast('Message transmitted! Prasath will respond shortly.');
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setFormSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-card">
          {/* Left Column: Direct Info */}
          <div className="contact-info-side">
            <div className="section-eyebrow">
              <Mail size={14} />
              GET IN TOUCH
            </div>
            <h3>Let's Connect</h3>
            <p>
              Interested in opportunities across Technical Support, IT Support, IT Operations, Endpoint Support, and Junior System Administration.
            </p>

            <div className="contact-details-list">
              {/* Email */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-detail-text" style={{ flex: 1 }}>
                  <span>Email</span>
                  <a href={`mailto:${email}`} id="contact-email-link">{email}</a>
                </div>
                <button 
                  className="btn-secondary" 
                  style={{ padding: '6px 12px', fontSize: '0.8125rem' }}
                  onClick={() => copyToClipboard(email, 'email')}
                  title="Copy email"
                >
                  {copiedEmail ? <Check size={14} color="#059669" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-text" style={{ flex: 1 }}>
                  <span>Phone</span>
                  <p>{phone}</p>
                </div>
                <button 
                  className="btn-secondary" 
                  style={{ padding: '6px 12px', fontSize: '0.8125rem' }}
                  onClick={() => copyToClipboard(phone, 'phone')}
                  title="Copy phone"
                >
                  {copiedPhone ? <Check size={14} color="#059669" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail-text">
                  <span>Location</span>
                  <p>Chennai, India</p>
                </div>
              </div>

              {/* LinkedIn Link */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <LinkedinIcon size={20} />
                </div>
                <div className="contact-detail-text">
                  <span>LinkedIn Profile</span>
                  <div style={{ display: 'flex', gap: '16px', marginTop: '2px' }}>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" id="contact-linkedin-link">
                      prasathmurugan
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-actions-bar">
              <a href={`mailto:${email}`} className="btn-primary" id="contact-email-btn">
                <Mail size={16} />
                Email Me
              </a>

              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
                id="contact-linkedin-btn"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>

              <button 
                className="btn-outline-brand" 
                onClick={onOpenResume}
                id="contact-download-resume-btn"
              >
                <Download size={16} />
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="contact-form-side">
            <h4>Send a Direct Inquiry</h4>
            {formSent ? (
              <div style={{ backgroundColor: 'var(--status-green-bg)', border: '1px solid var(--status-green-border)', padding: '20px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <Check size={32} color="#059669" style={{ margin: '0 auto 8px auto' }} />
                <h5 style={{ color: '#059669', fontSize: '1rem', marginBottom: '4px' }}>Inquiry Sent Successfully!</h5>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. Prasath will review your message and reply via email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Name / Organization</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Technical Hiring Team / IT Manager"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="form-input"
                    placeholder="name@company.com"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message / Opportunity Details</label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    placeholder="Provide details regarding Technical Support or System Administration role..."
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
