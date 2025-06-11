
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TechStack = () => {
  const techRef = useScrollReveal();

  const techCategories = [
    {
      title: "Languages",
      technologies: [
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "C/C++", icon: "⚡" },
        { name: "JavaScript", icon: "🟨" }
      ]
    },
    {
      title: "Frameworks",
      technologies: [
        { name: "Scikit-learn", icon: "🤖" },
        { name: "React", icon: "⚛️" },
        { name: "GTK", icon: "🖼️" }
      ]
    },
    {
      title: "Tools",
      technologies: [
        { name: "GitHub", icon: "🐙" },
        { name: "AWS", icon: "☁️" },
        { name: "JUnit", icon: "🧪" },
        { name: "Docker", icon: "🐳" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 warm-bg">
      <div ref={techRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Tech Stack</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className="cozy-card"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={tech.name}
                      className="tech-icon p-4 bg-portfolio-warm/30 rounded-lg text-center hover:bg-portfolio-primary/10 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${(categoryIndex * 100) + (techIndex * 50)}ms` }}
                    >
                      <div className="text-2xl mb-2">{tech.icon}</div>
                      <div className="text-sm font-medium text-foreground">{tech.name}</div>
                    </div>
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

export default TechStack;
