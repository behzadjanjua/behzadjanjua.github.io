
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  const projectsRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState('general');

  const generalProjects = [
    {
      title: "McMaster Parking Services Website Revamp",
      description: "Modernized McMaster’s Parking Services website, improving accessibility for over 30,000 users and achieving full AODA compliance. Enhanced workflow efficiency for staff by 60% through redesigned user flows and targeted UI improvements.",
      tags: ["React", "TypeScript", "Accessibility", "Team Leadership"],
      // github: "https://github.com",
      demo: "https://parking.mcmaster.ca"}
  ];

  const schoolProjects = [
    {
      title: "Java Drone Rescue System",
      description: "Modular Java app for drone-based search and rescue. Applied SOLID & GRASP principles with JUnit-tested logic, GitHub Actions CI, and JSON-based command interface.",
      tags: ["Java", "SOLID Principles", "JUnit", "GitHub Actions"],
      github: "https://github.com"
    },
    {
      title: "Python ML Student Grade Predictor",
      description: "Used UCI dataset to predict pass/fail outcomes. Trained Decision Trees and Logistic Regression, achieved ~89% test accuracy with confusion matrix visualization.",
      tags: ["Python", "Machine Learning", "Scikit-learn", "Data Visualization"],
      github: "https://github.com"
    },
    {
      title: "C & GTK Scientific Calculator",
      description: "Modular scientific calculator with GTK GUI. Used BEDMAS parsing rules and built collaboratively with Git-based team workflow.",
      tags: ["C", "GTK", "GUI Development", "Git Collaboration"],
      github: "https://github.com"
    },
    {
      title: "Java Maze Runner (SOLID + GoF)",
      description: "Maze navigation using clean abstractions (Maze, Player, Pathfinder). Applied SOLID and GoF principles with Apache CLI and Log4J. Built iteratively via MVP.",
      tags: ["Java", "Design Patterns", "Apache CLI", "Log4J"],
      github: "https://github.com"
    }
  ];

  const currentProjects = activeTab === 'general' ? generalProjects : schoolProjects;

  return (
    <div className="min-h-screen py-20 warm-bg">
      <div ref={projectsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of work spanning team projects and academic explorations.
          </p>
        </div>

        {/* Project Categories */}
        <div className="flex justify-center mb-12">
          <div className="cozy-card p-1">
            <Button
              variant={activeTab === 'general' ? 'default' : 'ghost'}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeTab === 'general' 
                  ? 'bg-portfolio-primary text-primary-foreground shadow-lg' 
                  : 'hover:bg-accent'
              }`}
              onClick={() => setActiveTab('general')}
            >
              General Projects
            </Button>
            <Button
              variant={activeTab === 'school' ? 'default' : 'ghost'}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeTab === 'school' 
                  ? 'bg-portfolio-primary text-primary-foreground shadow-lg' 
                  : 'hover:bg-accent'
              }`}
              onClick={() => setActiveTab('school')}
            >
              School Projects
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="hover-lift cozy-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {project.title}
                  </CardTitle>
                  <div className="flex space-x-2">
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-2 hover:bg-accent transition-colors duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-2 hover:bg-accent transition-colors duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demo, '_blank');
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs bg-portfolio-primary/10 text-portfolio-primary border-portfolio-primary/20 hover:bg-portfolio-primary/20 transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
