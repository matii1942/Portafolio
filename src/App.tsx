import React from 'react';
import { Hero } from './components/Hero.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import './App.css'; 

const App: React.FC = () => {
  return (
    <div className="portfolio-container">
      <main>
        <Hero />      
        <Skills />    
        <Projects />  
      </main>
    </div>
  );
};

export default App;