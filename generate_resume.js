import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

function createResume() {
  const doc = new PDFDocument({ margin: 36, size: 'LETTER' });
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const filePath1 = path.join(publicDir, 'Prasath_M_Resume.pdf');
  const filePath2 = path.join(publicDir, 'Prasath_M_Technical_Support_Engineer_Resume.pdf');
  
  const stream = fs.createWriteStream(filePath1);
  doc.pipe(stream);

  // Styling palette
  const PRIMARY_TEXT = '#172033';
  const SECONDARY_TEXT = '#5B6577';
  const PRIMARY_BLUE = '#155EEF';
  const BORDER_COLOR = '#E4E7EC';

  // Header
  doc.fillColor(PRIMARY_TEXT).fontSize(22).font('Helvetica-Bold').text('PRASATH M', { align: 'center' });
  doc.moveDown(0.2);
  doc.fillColor(PRIMARY_BLUE).fontSize(11).font('Helvetica-Bold').text('Technical Support Engineer | IT Operations | System Administration', { align: 'center' });
  doc.moveDown(0.2);
  
  // Contact bar (Without GitHub)
  doc.fillColor(SECONDARY_TEXT).fontSize(9).font('Helvetica')
     .text('Chennai, India  |  +91 8122126203  |  hariprasath2954@gmail.com  |  linkedin.com/in/prasathmurugan', { align: 'center' });
  
  doc.moveDown(0.5);
  // Divider line
  doc.strokeColor(BORDER_COLOR).lineWidth(1).moveTo(36, doc.y).lineTo(576, doc.y).stroke();
  doc.moveDown(0.5);

  // Section Helper
  function addSectionHeader(title) {
    doc.fillColor(PRIMARY_BLUE).fontSize(11).font('Helvetica-Bold').text(title.toUpperCase());
    doc.moveDown(0.1);
    doc.strokeColor(BORDER_COLOR).lineWidth(0.75).moveTo(36, doc.y).lineTo(576, doc.y).stroke();
    doc.moveDown(0.3);
  }

  // Summary
  addSectionHeader('Professional Summary');
  doc.fillColor(PRIMARY_TEXT).fontSize(9.5).font('Helvetica')
     .text('Enterprise IT support professional with experience supporting Windows infrastructure, Active Directory, Microsoft 365, endpoint environments, networking, identity and access management, and systematic incident resolution. Proven track record supporting enterprise-scale environments comprising 6,000+ endpoints/users and multi-platform Linux-to-AD integrations.', { align: 'justify' });
  doc.moveDown(0.6);

  // Experience
  addSectionHeader('Professional Experience');

  // Role 1
  doc.fillColor(PRIMARY_TEXT).fontSize(10).font('Helvetica-Bold').text('Technical Support Engineer', { continued: true });
  doc.fillColor(SECONDARY_TEXT).fontSize(9).font('Helvetica').text('  |  Aspire Systems  |  Chennai, India', { continued: true });
  doc.fillColor(PRIMARY_BLUE).fontSize(9).font('Helvetica-Bold').text('   Feb 2026 – Present', { align: 'right' });
  doc.moveDown(0.2);

  const role1Bullets = [
    'Provide enterprise technical support for Windows systems, applications, hardware, software, and endpoint issues using structured troubleshooting, incident resolution, documentation, and escalation procedures.',
    'Perform user provisioning, account configuration, access management, password administration, and role-based permissions to support enterprise identity and access requirements.',
    'Support Active Directory and Microsoft 365 administration, including users, groups, Outlook, Teams, and OneDrive, with user-access and application troubleshooting.',
    'Troubleshoot TCP/IP, DNS, DHCP, VPN, Ethernet, firewall, software, and endpoint issues using systematic diagnostics and escalation procedures.',
    'Support enterprise endpoint and security operations involving EDR/XDR and Zscaler ZIA, including alert triage, endpoint-agent troubleshooting, security-log monitoring, and policy-related issue resolution.'
  ];

  role1Bullets.forEach(bullet => {
    doc.fillColor(PRIMARY_TEXT).fontSize(9).font('Helvetica').text('•  ', { continued: true, indent: 8 });
    doc.text(bullet, { align: 'left' });
    doc.moveDown(0.15);
  });
  doc.moveDown(0.3);

  // Role 2
  doc.fillColor(PRIMARY_TEXT).fontSize(10).font('Helvetica-Bold').text('AR/VR Intern', { continued: true });
  doc.fillColor(SECONDARY_TEXT).fontSize(9).font('Helvetica').text('  |  Monolith Technologies Pvt. Ltd.  |  Chennai, India', { continued: true });
  doc.fillColor(SECONDARY_TEXT).fontSize(9).font('Helvetica').text('   Aug 2024 – Nov 2024', { align: 'right' });
  doc.moveDown(0.2);

  doc.fillColor(PRIMARY_TEXT).fontSize(9).font('Helvetica').text('•  ', { continued: true, indent: 8 });
  doc.text('Developed and tested Shogun Run using Unreal Engine 5, contributing to gameplay implementation, debugging, testing, and performance optimization.');
  doc.moveDown(0.6);

  // Enterprise Projects
  addSectionHeader('Selected Enterprise Projects (Aspire Systems)');
  
  const projects = [
    { title: 'Ubuntu-to-Active Directory Migration (2026)', desc: 'Supported migration of 200+ Ubuntu Linux users into Windows Active Directory using SSSD and Realmd, enabling centralized authentication, identity management, and policy enforcement.' },
    { title: 'Endpoint & Cloud Security Support (2026)', desc: 'Supported EDR/XDR and Zscaler ZIA operations across 6,000+ endpoints, including security-log monitoring, alert triage, incident escalation, agent troubleshooting, and policy-conflict resolution.' },
    { title: 'Windows 10-to-11 Upgrade (2026)', desc: 'Supported Windows 10-to-Windows 11 upgrades for 6,000+ users, covering system preparation, installation, configuration, validation, and post-upgrade troubleshooting.' }
  ];

  projects.forEach(p => {
    doc.fillColor(PRIMARY_TEXT).fontSize(9.5).font('Helvetica-Bold').text(p.title);
    doc.fillColor(PRIMARY_TEXT).fontSize(9).font('Helvetica').text(p.desc, { align: 'left', indent: 8 });
    doc.moveDown(0.2);
  });
  doc.moveDown(0.4);

  // Technical Skills
  addSectionHeader('Technical Skills');
  
  const skills = [
    { cat: 'System Administration: ', items: 'Windows 10/11, Active Directory, Group Policy, User Provisioning, Identity & Access Management, Microsoft 365, Azure AD / Entra ID, Endpoint Support' },
    { cat: 'Networking: ', items: 'TCP/IP, DNS, DHCP, VPN, Ethernet, Network Diagnostics, Firewall Troubleshooting, Ping, Tracert, IPConfig' },
    { cat: 'ITSM & Tech Support: ', items: 'Desktop Support, Hardware & Software Support, Incident Escalation, ServiceNow, JIRA, Remote Desktop, Documentation' },
    { cat: 'Security & Tools: ', items: 'EDR/XDR, Zscaler ZIA, Security Log Monitoring, Alert Triage, Microsoft Office, Git' },
    { cat: 'Programming: ', items: 'Python, SQL, C, C++' }
  ];

  skills.forEach(s => {
    doc.fillColor(PRIMARY_TEXT).fontSize(9).font('Helvetica-Bold').text(s.cat, { continued: true });
    doc.fillColor(SECONDARY_TEXT).font('Helvetica').text(s.items);
    doc.moveDown(0.15);
  });
  doc.moveDown(0.4);

  // Certifications & Education
  addSectionHeader('Certifications & Education');
  
  doc.fillColor(PRIMARY_TEXT).fontSize(9.5).font('Helvetica-Bold').text('Education: ', { continued: true });
  doc.fillColor(PRIMARY_TEXT).font('Helvetica').text('B.Tech – Artificial Intelligence and Data Science  |  Prince Dr. Vasudevan College of Engineering and Technology (2021 – 2025)');
  doc.moveDown(0.2);

  doc.fillColor(PRIMARY_TEXT).fontSize(9.5).font('Helvetica-Bold').text('Certifications: ', { continued: true });
  doc.fillColor(PRIMARY_TEXT).font('Helvetica').text('Naalayathiran – IBM SkillsBuild (2025)  |  Network Essentials – Cisco (2024)  |  DevOps – GUVI (2024)');
  doc.moveDown(0.2);

  doc.fillColor(PRIMARY_TEXT).fontSize(9.5).font('Helvetica-Bold').text('Honors: ', { continued: true });
  doc.fillColor(PRIMARY_TEXT).font('Helvetica').text('Best NSS Volunteer Award – National Service Scheme (NSS) Cell, Anna University');

  doc.end();

  stream.on('finish', () => {
    fs.copyFileSync(filePath1, filePath2);
    console.log('PDF Resumes generated successfully (GitHub removed)!');
  });
}

createResume();
