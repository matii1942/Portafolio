import React from 'react';
import './Contact.css';

interface Channel {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

const channels: Channel[] = [
  { label: 'Email', value: 'matiasariel1986@hotmail.com →', href: 'mailto:matiasariel1986@hotmail.com' },
  {
    label: 'LinkedIn',
    value: 'matias-ariel-acosta →',
    href: 'https://www.linkedin.com/in/matias-ariel-acosta-50903b207',
    external: true,
  },
  { label: 'GitHub', value: '@matii1942 →', href: 'https://github.com/matii1942', external: true },
  { label: 'CV', value: 'PDF ↓', href: '/cv-matias-acosta.pdf' },
];

export const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="s-head">
        <span className="tag">Contact</span>
        <h2>Get in touch</h2>
      </div>
      <p className="note contact-intro">
        Open to full-time roles and freelance projects, remote or hybrid from Buenos Aires.
      </p>
      <div className="contact-grid">
        {channels.map((channel) => (
          <a
            key={channel.label}
            className="contact-row"
            href={channel.href}
            {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <b>{channel.label}</b>
            <span>{channel.value}</span>
          </a>
        ))}
      </div>
      <footer className="site-footer">
        <span>© 2026 Matías Acosta</span>
        <span>Full Stack Developer · Buenos Aires</span>
      </footer>
    </section>
  );
};
