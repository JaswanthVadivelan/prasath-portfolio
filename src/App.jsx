import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Metrics from './components/Metrics';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TerminalWidget from './components/TerminalWidget';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Always reset scroll to the very top (Hero section) on page load/refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // If there is an anchor hash in URL on refresh, remove it so browser doesn't auto-scroll
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  const showToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const handleOpenResume = () => {
    // Trigger direct PDF download and open modal preview
    const link = document.createElement('a');
    link.href = '/Prasath_M_Technical_Support_Engineer_Resume.pdf';
    link.download = 'Prasath_M_Technical_Support_Engineer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setResumeOpen(true);
    showToast('Downloading official PDF resume...');
  };

  return (
    <div className="app-wrapper">
      <Navbar onOpenResume={handleOpenResume} />
      <main>
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <Experience />
        <Metrics />
        <Projects />
        <Skills />
        <TerminalWidget />
        <Certifications />
        <Contact onOpenResume={handleOpenResume} onShowToast={showToast} />
      </main>
      <Footer />

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <Toast toasts={toasts} />
    </div>
  );
}
