import React from 'react';
import './Skills.css';

interface SkillGroup {
  label: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  { label: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL', 'HTML5', 'CSS3'] },
  { label: 'Frontend', items: ['React', 'Component architecture', 'Responsive design'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'CRUD'] },
  { label: 'Databases', items: ['MongoDB', 'MySQL', 'Oracle'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Render', 'Vercel', 'HubSpot'] },
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
