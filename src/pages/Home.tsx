
import React from 'react';
import { Button } from '../components/ui/button';
import { Github, Linkedin, Download } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home = () => {
  const heroRef = useScrollReveal();

  return (
    <div className="min-h-screen flex items-center justify-center warm-bg">
      <div ref={heroRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-reveal">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hello, I'm{' '}
            <span className="gradient-text">Behzad Janjua</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Software Engineering Student crafting thoughtful solutions and 
            sharing my journey through code and learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => {
                window.open('/BehzadJanjua_Resume.pdf', '_blank');
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full p-3 hover:bg-accent transition-all duration-300 hover:scale-110"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full p-3 hover:bg-accent transition-all duration-300 hover:scale-110"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="cozy-card p-8 max-w-2xl mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently exploring the intersection of technology and creativity, 
                building projects that solve real problems while documenting my growth as a developer.
                I believe in clean code, thoughtful design, and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
