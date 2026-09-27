import React from 'react';
import './Skills.css';

interface SkillGroup {
  label: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  { label: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL', 'HTML5', 'CSS3'] },
  { label: 'Frontend', items: ['React', 'Vite', 'Component architecture', 'Responsive design', 'Accessible data visualisation'] },
  { label: 'Backend', items: ['Node.js', 'NestJS', 'Express.js', 'Django', 'REST APIs', 'SOAP / XML', 'CRUD'] },
  { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle', 'Prisma ORM'] },
  { label: 'Cloud & DevOps', items: ['AWS', 'Terraform', 'Docker', 'GitHub Actions', 'Render', 'Vercel'] },
  { label: 'Testing', items: ['Vitest', 'Supertest', 'Testing Library', 'pytest', 'Postman'] },
  { label: 'AI & LLMs', items: ['LLM API integration', 'Prompt engineering', 'Token and cost budgeting', 'Output verification'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'HubSpot'] },
];

export const Skills: React.FC = () => {
  return (
    <section id="stack">
      <div className="s-head">
        <span className="tag">Stack</span>
        <h2>Technical skills</h2>
      </div>
      <div className="stack-list">
        {skillGroups.map((group) => (
          <div className="stack-row" key={group.label}>
            <span className="stack-key">{group.label}</span>
            <span className="stack-val">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
