import React from 'react';
import { Hero } from './components/Hero.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import './App.css'; 

const App: React.FC = () => {
  return (
    <div className="portfolio-container">
      <main>
        <Hero />      {/* Tu introducción y foto */}
        <Skills />    {/* Sección de habilidades */}
        <Projects />  {/* Los enlaces a las 3 ventanas */}
      </main>
    </div>
  );
};

export default App;