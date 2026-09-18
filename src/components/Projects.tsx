import React, { useState } from 'react';
import './Projects.css';

type Category = 'full' | 'front';
type Filter = 'all' | Category;

interface Project {
  title: string;
  description: string;
  url: string;
  /** Optional repository link, shown as a second action on the card. */
  sourceUrl?: string;
  category: Category;
  status: string;
  tags: string[];
  cta: string;
}

const projects: Project[] = [
  {
    title: 'ELD Trip Planner',
    description:
      'Calculates truck routes across the US and schedules driving time, rest breaks and fuel stops under 11 FMCSA regulations. Django API on Render, JavaScript front end on Vercel, 56 automated tests across both stacks.',
    url: 'https://eld-trip-planner-livid-tau.vercel.app/',
    category: 'full',
    status: 'Live',
    tags: ['Python', 'Django', 'pytest', 'REST API', 'Vercel'],
    cta: 'View project',
  },
  {
    title: 'E-Commerce Application',
    description:
      'Storefront with a 50-product catalog, cart and dynamic data handling from the backend, built on a component architecture and responsive across every view.',
    url: 'https://e-commerce-1-wcxq.onrender.com',
    sourceUrl: 'https://github.com/matii1942/ecommerce',
    category: 'full',
    status: 'Live',
    tags: ['React', 'Node.js', 'MongoDB', 'Render'],
    cta: 'View project',
  },
  {
    title: 'Task Manager',
    description:
      'Full CRUD task management across 15 REST endpoints backed by MongoDB, with reusable TypeScript components handling form validation, state and API errors.',
    url: 'https://github.com/matii1942',
    category: 'full',
    status: 'Source',
    tags: ['React', 'TypeScript', 'Express.js', 'MongoDB'],
    cta: 'View source',
  },
  {
    title: 'Neon Swarm',
    description:
      'Galaga-style arcade game: 40 enemies in formation, dive-bomb attacks, tractor-beam captures and power-ups, rendered on Canvas at 60 fps. Published on itch.io.',
    url: 'https://matii1942.itch.io/neon-swarm',
    sourceUrl: 'https://github.com/matii1942/Neon-Swarm',
    category: 'front',
    status: 'On itch.io',
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
          <article className="project-card" key={project.title}>
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
            <div className="project-actions">
              <a
                className="project-go"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.cta} <span className="arw">→</span>
              </a>
              {project.sourceUrl && (
                <a
                  className="project-source"
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
