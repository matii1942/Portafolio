// src/components/Hero.tsx

import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        
        {/* Botón "Descargar CV" */}
        <button className="download-cv-btn">
          Descargar CV
        </button>

        {/* Título y nombre */}
        <h2 className="hero-title">
          Full Stack Developer
        </h2>
        <h1 className="hero-name">
          Matías Acosta
        </h1>

        {/* Descripción breve */}
        <p className="hero-description">
          Desarrollador apasionado por crear soluciones web innovadoras y eficientes,
          desde el front-end hasta el back-end.
        </p>

        {/* Enlaces a redes sociales */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/tu-perfil/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn linkedin"
          >
            LinkedIn →
          </a>
          <a
            href="https://github.com/tu-usuario/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn github"
          >
            Github →
          </a>
        </div>

        {/* Íconos de tecnologías */}
        <div className="tech-icons">
          <span className="tech-icon">⚛️ React</span>
          <span className="tech-icon">🅰️ Angular</span>
          <span className="tech-icon">☕ Java</span>
          <span className="tech-icon">🌱 Spring Boot</span>
          <span className="tech-icon">🐘 PostgreSQL</span>
        </div>
      </div>
    </section>
  );
};