import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Lightbulb, Code, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { ImageLightbox } from './ImageLightbox';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  category: string;
  problem: string;
  architecture: string;
  result: string;
}

interface ProjectCaseStudyProps {
  project: Project;
  onClose: () => void;
}

export const ProjectCaseStudy = ({ project, onClose }: ProjectCaseStudyProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {lightboxOpen && project.images && (
          <ImageLightbox
            images={project.images}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
            onNavigate={setLightboxIndex}
            projectTitle={project.title}
          />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 overflow-y-auto"
        onClick={onClose}
      >
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-card/90 backdrop-blur border border-border rounded-2xl overflow-hidden"
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 glow-border"
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Hero Image */}
            <div className="relative h-96 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2 font-mono">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-white/30 text-white bg-white/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Problem */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-mono">The Challenge</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </motion.div>

              {/* Architecture */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-secondary/20">
                    <Code className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold font-mono">
                    Technical Architecture
                  </h3>
                </div>
                <div className="p-6 bg-muted/30 rounded-lg border border-border">
                  <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-mono">
                    {project.architecture}
                  </pre>
                </div>
              </motion.div>

              {/* Result */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <Rocket className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold font-mono">The Result</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.result}
                </p>
              </motion.div>

              {/* Project Gallery */}
              {project.images && project.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold font-mono">Project Gallery</h3>
                  <div className="relative px-12">
                    <Carousel className="w-full">
                      <CarouselContent className="-ml-2 md:-ml-4">
                        {project.images.map((img, index) => (
                          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                            <div
                              className="relative aspect-video rounded-lg overflow-hidden border border-border bg-muted cursor-pointer group"
                              onClick={() => openLightbox(index)}
                            >
                              <img
                                src={img}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                                  Click to enlarge
                                </span>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-0 bg-background/80 backdrop-blur hover:bg-background" />
                      <CarouselNext className="right-0 bg-background/80 backdrop-blur hover:bg-background" />
                    </Carousel>
                  </div>
                </motion.div>
              )}

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                {project.github && (
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Source Code
                  </Button>
                )}
                {project.demo && (
                  <Button
                    className="bg-primary hover:bg-primary/90 glow-border"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </Button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
