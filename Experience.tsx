import React from 'react';
import './Experience.css';

interface Role {
  title: string;
  org: string;
  when: string;
  description: string;
}

const roles: Role[] = [
  {
    title: 'Freelance Full Stack Developer',
    org: 'Law firm · client project',
    when: '2026 — Present',
    description:
      'Designed and built a website giving prospective clients a clear way to find and contact a lawyer, including an intake flow where visitors describe their case before being matched. Handled confidential information with care, limiting what is collected and who can reach it.',
  },
  {
    title: 'Data Management & Functional Support',
    org: 'Clínica Espora · Intensive Care Unit',
    when: '2014 — 2025',
    description:
      'Maintained clinical data and database workflows for an ICU, supporting traceability, digital documentation and information quality relied on daily by medical staff, and contributing process improvements in an environment where data accuracy is critical.',
  },
  {
    title: 'Digital Operations & Web Maintenance',
    org: 'Invid Computers',
    when: '2019 — 2021',
    description:
      "Updated website content, product listings and promotional material across the company's platforms, and ran publishing, maintenance and reporting workflows.",
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience">
      <div className="s-head">
        <span className="tag">Experience</span>
        <h2>Where I have worked</h2>
      </div>
      {roles.map((role) => (
        <article className="job" key={role.title}>
          <div className="job-top">
            <h3>{role.title}</h3>
            <span className="job-when">{role.when}</span>
          </div>
          <p className="job-org">{role.org}</p>
          <p className="job-desc">{role.description}</p>
        </article>
      ))}
    </section>
  );
};
