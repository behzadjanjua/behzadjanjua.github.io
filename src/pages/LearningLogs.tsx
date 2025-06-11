
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useScrollReveal } from '../hooks/useScrollReveal';

const LearningLogs = () => {
  const logsRef = useScrollReveal();

  const learningEntries = [
    {
      title: "HarvardX Data Science & Machine Learning (CS109x/CS109xa)",
      date: "2024",
      summary: "Reflections on HarvardX course track covering data wrangling, ML pipelines, and Python workflows. Applying knowledge to portfolio projects and real-world data science challenges.",
      tags: ["Data Science", "Machine Learning", "Python", "HarvardX"]
    }
  ];

  return (
    <div className="min-h-screen py-20 warm-bg">
      <div ref={logsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Learning Logs</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Small experiments and explorations that fuel my continuous learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {learningEntries.map((entry, index) => (
            <Card 
              key={entry.title}
              className="hover-lift cozy-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {entry.title}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {entry.date}
                  </span>
                </div>
                <CardDescription className="text-muted-foreground">
                  {entry.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
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

export default LearningLogs;
