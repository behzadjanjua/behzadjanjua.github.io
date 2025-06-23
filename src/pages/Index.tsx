
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import LearningLogs from '../components/LearningLogs';
import Blog from '../components/Blog';
import Certifications from '../components/Certifications';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <Projects />
          <LearningLogs />
          <Blog />
          <Certifications />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
