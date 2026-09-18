import React, { useState } from 'react';
import './Projects.css';

type Category = 'full' | 'front';
type Filter = 'all' | Category;

interface Project {
  title: string;
  description: string;
  url: string;
  category: Category;
  status: string;
  tags: string[];
  cta: string;
}

const projects: Project[] = [
  {
    title: 'ELD Trip Planner',
    description:
      'Calculates truck routes across the US and schedules driving time, rest breaks and fuel stops under FMCSA Hours of Service rules. Django API on Render, JavaScript frontend on Vercel.',
    url: 'https://eld-trip-planner-livid-tau.vercel.app/',
    category: 'full',
    status: 'Live',
    tags: ['Python', 'Django', 'REST API', 'Vercel'],
    cta: 'View project',
  },
  {
    title: 'E-Commerce Application',
    description:
      'Storefront with product listing, cart and dynamic data from the backend, built on a component architecture and responsive across every view.',
    url: 'https://e-commerce-1-wcxq.onrender.com',
    category: 'full',
    status: 'Live',
    tags: ['React', 'Node.js', 'MongoDB', 'Render'],
    cta: 'View project',
  },
  {
    title: 'Task Manager',
    description:
      'Full CRUD task management backed by a REST API and MongoDB, with reusable TypeScript components handling form validation, state and API errors.',
    url: 'https://github.com/matii1942',
    category: 'full',
    status: 'Source',
    tags: ['React', 'TypeScript', 'Express.js', 'MongoDB'],
    cta: 'View source',
  },
  {
    title: 'Neon Swarm',
    description:
      'Galaga-style arcade game: 40 enemies in formation, dive-bomb attacks, tractor-beam captures and power-ups, rendered on Canvas at 60 fps.',
    url: 'https://matii1942.github.io/Neon-Swarm/',
    category: 'front',
    status: 'Live',
    tags: ['React', 'Canvas', 'Web Audio'],
    cta: 'Play now',
  },
];

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'full', label: 'Full Stack' },
  { id: 'front', label: 'Frontend' },
];

const countFor = (id: Filter): number =>
  id === 'all' ? projects.length : projects.filter((p) => p.category === id).length;

export const Projects: React.FC = () => {
  const [active, setActive] = useState<Filter>('all');
  const visible = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects">
      <div className="s-head">
        <span className="tag">Projects</span>
        <h2>Selected work</h2>
      </div>

      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className="filter-btn"
            aria-pressed={active === filter.id}
            onClick={() => setActive(filter.id)}
          >
            {filter.label} <span className="filter-count">{countFor(filter.id)}</span>
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-meta">
              <span>{project.category === 'full' ? 'Full Stack' : 'Frontend'}</span>
              <span>{project.status}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="project-go">
              {project.cta} <span className="arw">→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
