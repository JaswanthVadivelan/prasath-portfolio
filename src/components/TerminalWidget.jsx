import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Play, RotateCcw } from 'lucide-react';

export default function TerminalWidget() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Aspire Enterprise IT Support Diagnostic Shell v2.4' },
    { type: 'output', text: 'Type "help" or click a preset button below to test IT diagnostic commands.' }
  ]);

  const terminalEndRef = useRef(null);

  const commandResponses = {
    help: `Available Diagnostic Commands:
  • ping dc1.aspire.local     - Test Active Directory Domain Controller connectivity
  • tracert gateway           - Trace network hops across gateway & Zscaler ZIA
  • get-aduser prasath        - Query Active Directory user provisioning & permissions
  • zscaler-status            - Check EDR/XDR & Zscaler ZIA agent health
  • systeminfo                - Display Windows 11 enterprise endpoint configuration
  • clear                     - Clear console output`,
    
    'ping dc1.aspire.local': `Pinging dc1.aspire.local [10.120.4.15] with 32 bytes of data:
Reply from 10.120.4.15: bytes=32 time=2ms TTL=128
Reply from 10.120.4.15: bytes=32 time=1ms TTL=128
Reply from 10.120.4.15: bytes=32 time=3ms TTL=128
Reply from 10.120.4.15: bytes=32 time=2ms TTL=128

Ping statistics for 10.120.4.15:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 1ms, Maximum = 3ms, Average = 2ms`,

    'tracert gateway': `Tracing route to gateway.aspire.local [10.120.0.1] over a maximum of 30 hops:
  1     1 ms     1 ms     1 ms  10.120.4.1 [L3 Switch - Core]
  2     2 ms     2 ms     2 ms  10.120.0.1 [Enterprise Firewall / Gateway]
  3     4 ms     5 ms     4 ms  100.64.12.1 [Zscaler ZIA Security Tunnel - ACTIVE]
Trace complete.`,

    'get-aduser prasath': `DistinguishedName : CN=Prasath M,OU=IT-Support,OU=Operations,DC=aspire,DC=local
Enabled           : True
GivenName         : Prasath
Surname           : M
UserPrincipalName : hariprasath2954@gmail.com
Role              : Technical Support Engineer
MemberOf          : {CN=IT-Helpdesk-Admins, CN=M365-Enterprise-Users, CN=Endpoint-Security-Ops}
PasswordLastSet   : 2026-08-01 09:30:00 AM
SSSD Linux Sync   : Enabled (Realmd AD Joined)`,

    'zscaler-status': `[EDR/XDR & ZSCALER ZIA DIAGNOSTICS]
Service Name     : Zscaler Service (ZSATray)
State            : RUNNING
Cloud Status     : Connected to ZIA Enterprise Node (Chennai Edge)
User Enrolled    : Prasath M (Aspire Systems)
Tunnel Protocol  : Z-Tunnel 2.0 (TLS 1.3 Encryption)
EDR/XDR Agent    : CrowdStrike Falcon / Defender Endpoint (ACTIVE & UPDATED)
Alert Status     : 0 Critical Alerts | Log Triage Normal`,

    systeminfo: `Host Name:                 AP-ENDPT-6029
OS Name:                   Microsoft Windows 11 Enterprise
OS Version:                10.0.22631 N/A Build 22631
System Manufacturer:       Aspire Enterprise Deployment
Domain:                    aspire.local
Network Cards:             Ethernet Adapter (10.120.4.88)
VPN Status:                Enterprise SSL VPN Connected
Active Directory Sync:     Synchronized (SSSD & Group Policy Active)`
  };

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const newHistory = [...history, { type: 'input', text: cmdStr }];

    if (commandResponses[trimmed]) {
      newHistory.push({ type: 'output', text: commandResponses[trimmed] });
    } else {
      newHistory.push({ 
        type: 'output', 
        text: `Command not recognized: "${cmdStr}". Type "help" to see valid IT diagnostic commands.` 
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section className="terminal-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div className="section-eyebrow" style={{ margin: '0 auto 10px auto' }}>
            <Terminal size={14} />
            INTERACTIVE DIAGNOSTICS
          </div>
          <h2 className="section-title">IT Support Shell Console</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 24px auto' }}>
            Simulate enterprise IT support commands to inspect network, Active Directory, and security agent diagnostics.
          </p>
        </div>

        <div className="terminal-box">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot dot-red"></span>
              <span className="terminal-dot dot-yellow"></span>
              <span className="terminal-dot dot-green"></span>
            </div>
            <div className="terminal-title-text">
              prasath@aspire-support:~$ (PowerShell / SSSD Environment)
            </div>
            <button 
              className="terminal-btn" 
              onClick={() => setHistory([{ type: 'output', text: 'Console reset. Type "help".' }])}
              title="Reset Console"
            >
              <RotateCcw size={12} /> Clear
            </button>
          </div>

          <div className="terminal-body">
            {history.map((item, index) => (
              <div key={index} className="terminal-line">
                {item.type === 'input' ? (
                  <div>
                    <span className="terminal-prompt">PS C:\Support&gt; </span>
                    <span style={{ color: '#F8FAFC', fontWeight: 600 }}>{item.text}</span>
                  </div>
                ) : (
                  <pre style={{ margin: 0, fontFamily: 'inherit', color: '#94A3B8', whiteSpace: 'pre-wrap' }}>
                    {item.text}
                  </pre>
                )}
              </div>
            ))}

            <div className="terminal-prompt-line">
              <span className="terminal-prompt">PS C:\Support&gt; </span>
              <input
                type="text"
                className="terminal-input"
                placeholder="Type command here (e.g. ping dc1.aspire.local, get-aduser prasath, zscaler-status)..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleCommand(inputVal);
                }}
              />
            </div>
            <div ref={terminalEndRef} />
          </div>

          <div className="terminal-buttons">
            <span style={{ fontSize: '0.75rem', color: '#64748B', display: 'flex', alignItems: 'center', marginRight: '6px' }}>
              Quick Run:
            </span>
            <button className="terminal-btn" onClick={() => handleCommand('ping dc1.aspire.local')}>
              ping dc1.aspire.local
            </button>
            <button className="terminal-btn" onClick={() => handleCommand('tracert gateway')}>
              tracert gateway
            </button>
            <button className="terminal-btn" onClick={() => handleCommand('get-aduser prasath')}>
              get-aduser prasath
            </button>
            <button className="terminal-btn" onClick={() => handleCommand('zscaler-status')}>
              zscaler-status
            </button>
            <button className="terminal-btn" onClick={() => handleCommand('systeminfo')}>
              systeminfo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
