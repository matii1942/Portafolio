// src/components/Projects.tsx

import React from 'react';
import './Projects.css';

// Interfaz para tipar los enlaces de proyectos
interface ProjectLink {
  title: string;
  description: string;
  url: string;
  icon: string;
}

const projectLinks: ProjectLink[] = [
  {
    title: 'Proyecto E-commerce',
    description: 'Tienda online completa con pasarela de pagos integrada.',
    url: 'https://www.enlace-al-proyecto1.com',
    icon: '🛒',
  },
  {
    title: 'Aplicación de Tareas',
    description: 'Gestor de tareas con persistencia de datos local.',
    url: 'https://www.enlace-al-proyecto2.com',
    icon: '✅',
  },
  {
    title: 'Clon de Red Social',
    description: 'Interfaz de usuario inspirada en una red social popular.',
    url: 'https://www.enlace-al-proyecto3.com',
    icon: '💬',
  },
];

export const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <h3 className="section-subtitle">PROYECTOS</h3>
      <h2 className="section-title">Mis proyectos destacados</h2>
      
      {/* Filtros de ejemplo */}
      <div className="project-filters">
        <button className="filter-btn active">Todos</button>
        <button className="filter-btn">Full Stack</button>
        <button className="filter-btn">Frontend</button>
      </div>

      <div className="projects-grid">
        {projectLinks.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="link-text">Ver Proyecto →</span>
          </a>
        ))}
      </div>
    </section>
  );
};