

import React from 'react';
import './Projects.css';

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
    url: 'https://e-commerce-1-wcxq.onrender.com',
    icon: '🛒',
  },
  {
    title: 'ELD Trip Planner',
    description: 'Planificador de viajes con funcionalidades de reserva e itinerario.',
    url: 'https://eld-trip-planner-livid-tau.vercel.app/',
    icon: '🚚',
  },
  {
    title: 'Game Neon Swarm',
    description: 'Juego arcade de acción y supervivencia.',
    url: 'https://matii1942.github.io/Neon-Swarm/',
    icon: '🎮',
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