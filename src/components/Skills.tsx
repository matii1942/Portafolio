import React from 'react';
import './Skills.css';


interface Skill {
  name: string;
  level: string;
  icon: string;
}

const skillList: Skill[] = [
  { name: 'React', level: 'Avanzado', icon: '⚛️' },
  { name: 'JavaScript', level: 'Avanzado', icon: '📜' },
  { name: 'HTML5 & CSS3', level: 'Avanzado', icon: '💻' },
  { name: 'Node.js', level: 'Intermedio', icon: '🟢' },
  { name: 'Java', level: 'Intermedio', icon: '☕' },
  { name: 'Spring Boot', level: 'Intermedio', icon: '🌱' },
  { name: 'SQL / PostgreSQL', level: 'Intermedio', icon: '🐘' },
  { name: 'Git', level: 'Avanzado', icon: '🐙' },
];

export const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <h3 className="section-subtitle">MIS HERRAMIENTAS</h3>
      <h2 className="section-title">Habilidades Técnicas</h2>
      <div className="skills-grid">
        {skillList.map((skill) => (
          <div key={skill.name} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};