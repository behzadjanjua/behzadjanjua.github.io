
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TechStack = () => {
  const techRef = useScrollReveal();

  const techCategories = [
    {
      title: "Languages",
      items: [
        { name: "Python", icon: "🐍", level: 90 },
        { name: "Java", icon: "☕", level: 85 },
        { name: "JavaScript", icon: "📜", level: 80 },
        { name: "TypeScript", icon: "🔷", level: 75 },
        { name: "C++", icon: "⚡", level: 70 },
        { name: "HTML/CSS", icon: "🎨", level: 85 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { name: "React", icon: "⚛️", level: 80 },
        { name: "Node.js", icon: "🟢", level: 75 },
        { name: "TensorFlow", icon: "🧠", level: 70 },
        { name: "Tailwind CSS", icon: "💨", level: 85 },
        { name: "JUnit", icon: "🧪", level: 75 }
      ]
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git", icon: "📝", level: 85 },
        { name: "AWS", icon: "☁️", level: 65 },
        { name: "Docker", icon: "🐳", level: 60 },
        { name: "VS Code", icon: "💻", level: 90 },
        { name: "Figma", icon: "🎨", level: 70 }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-accent/5">
      <div ref={techRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="space-y-6"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-semibold text-center mb-8 text-portfolio-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={item.name}
                    className="bg-card border border-border rounded-lg p-4 hover-lift tech-icon group"
                    style={{ animationDelay: `${(categoryIndex * 200) + (itemIndex * 100)}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </span>
                        <span className="font-medium text-foreground group-hover:text-portfolio-primary transition-colors duration-300">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">
                        {item.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${item.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (itemIndex * 100) + 500}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
