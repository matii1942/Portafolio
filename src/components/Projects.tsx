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
    title: 'VitaLink',
    description:
      'Reads admissions and vital signs from a hospital legacy SOAP system and scores every round against the NEWS2 early-warning standard, so deterioration is not left waiting for a shift change. 368 automated tests, deployed to AWS with Terraform, and clinical summaries from a language model verified figure by figure against the record.',
    url: 'https://matii1942.github.io/VitaLink/',
    sourceUrl: 'https://github.com/matii1942/VitaLink',
    category: 'full',
    status: 'Live demo',
    tags: ['TypeScript', 'NestJS', 'PostgreSQL', 'React', 'AWS'],
    cta: 'Open the ward board',
  },
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
      'Storefront with a 37-product catalogue across three categories, served by an Express API and rendered with vanilla JavaScript and Bootstrap. Cart state persists in the browser between pages, with add, remove, empty and checkout, and client-side filtering by category.',
    url: 'https://e-commerce-1-wcxq.onrender.com',
    sourceUrl: 'https://github.com/matii1942/E-commerce',
    category: 'full',
    status: 'Live',
    tags: ['JavaScript', 'Express.js', 'Bootstrap', 'Render'],
    cta: 'View project',
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
