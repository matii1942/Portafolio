import React from 'react';
import { ThemeToggle } from './components/ThemeToggle.tsx';
import { Hero } from './components/Hero.tsx';
import { Profile } from './components/Profile.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Experience } from './components/Experience.tsx';
import { Education } from './components/Education.tsx';
import { Contact } from './components/Contact.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="portfolio-container">
      <ThemeToggle />
      <div className="shell">
        <Hero />
        <main className="content">
          <Profile />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
