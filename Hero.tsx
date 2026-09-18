import React from 'react';
import './Hero.css';

interface RailFact {
  key: string;
  value: string;
}

const facts: RailFact[] = [
  { key: 'Frontend', value: 'React · TypeScript' },
  { key: 'Backend', value: 'Node.js · Express · Django' },
  { key: 'Databases', value: 'MongoDB · MySQL · Oracle' },
  { key: 'Deployment', value: 'Render · Vercel · Git' },
  { key: 'English', value: 'Advanced (C1)' },
];

export const Hero: React.FC = () => {
  return (
    <aside className="rail">
      <div>
        <p className="eyebrow">Buenos Aires, Argentina · UTC−3</p>
        <h1 className="hero-name">
          Matías
          <br />
          Acosta
        </h1>
        <p className="hero-role">Full Stack Developer · JavaScript / TypeScript · Python</p>
        <p className="hero-bio">
          I build web applications end to end — React interfaces, REST APIs in Node.js and Django,
          deployed to production. Career changer with <em>a decade managing clinical data</em> in an
          intensive care unit, where accuracy was non-negotiable.
        </p>
      </div>

      <div className="rail-actions">
        <a className="btn primary" href="/cv-matias-acosta.pdf" download>
          Download CV <span className="arw">↓</span>
        </a>
        <a
          className="btn"
          href="https://www.linkedin.com/in/matias-ariel-acosta-50903b207"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <span className="arw">→</span>
        </a>
        <a className="btn" href="https://github.com/matii1942" target="_blank" rel="noopener noreferrer">
          GitHub <span className="arw">→</span>
        </a>
      </div>

      <div className="rail-meta">
        {facts.map((fact) => (
          <div key={fact.key}>
            <span>{fact.key}</span>
            <b>{fact.value}</b>
          </div>
        ))}
      </div>
    </aside>
  );
};
