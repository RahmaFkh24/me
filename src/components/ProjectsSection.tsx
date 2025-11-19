import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
// Import local images
import analyticsImage from '@/assets/analytics.png';

interface Project {
  title: string;
  description: string;
  // image is a string URL — this works for remote URLs and for Vite-imported assets
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: string;
}

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    // Debug: log the resolved URL for the imported image so you can
    // verify the import resolves to the expected file in the browser console.
    // If this logs an unexpected URL, check the file name/casing in src/assets.
    // Restart the dev server if you replaced/added the asset while it was running.
    // Example console output: 
    // analyticsImage: /assets/analytics.abcdef.png
    // (open DevTools -> Console to inspect)
    //
    // Remove this in production or when debugging is finished.
    // eslint-disable-next-line no-console
    console.log('analyticsImage ->', analyticsImage);
  }, []);

  const projects: Project[] = [
    {
      title: 'Salaweti App',
      description: 'Mobile application for Islamic prayers and invocations with beautiful UI and offline support.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      technologies: ['Flutter', 'Dart', 'SQLite'],
      github: 'https://github.com',
      category: 'Mobile',
    },
    {
      title: 'Social Media Manager',
      description: 'Full-stack web application for managing Facebook and Instagram publications with analytics.',
      image: analyticsImage,
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
      category: 'Web',
    },
    {
      title: 'Distributed Car Manager',
      description: 'Java RMI application for distributed car fleet management with real-time status updates.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
      technologies: ['Java', 'RMI', 'JavaFX'],
      github: 'https://github.com',
      category: 'Desktop',
    },
    {
      title: 'WordPress Business Site',
      description: 'Professional business website with custom theme and e-commerce integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['WordPress', 'PHP', 'WooCommerce'],
      demo: 'https://example.com',
      category: 'Web',
    },
  ];

  const categories = ['All', 'Web', 'Mobile', 'Desktop'];

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedFilter === category ? 'default' : 'outline'}
              onClick={() => setSelectedFilter(category)}
              className={
                selectedFilter === category
                  ? 'bg-primary hover:bg-primary/90 glow-border'
                  : 'border-primary/30 hover:border-primary'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card/50 backdrop-blur border-border hover:border-primary transition-all animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {project.category}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
