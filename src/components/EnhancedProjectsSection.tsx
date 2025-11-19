import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectCaseStudy } from './ProjectCaseStudy';
// Import all project1 images
import analyticsImage from '@/assets/projects/project1/analytics.png';
import capture1 from '@/assets/projects/project1/Capture d\'écran 2025-05-15 120847.png';
import capture2 from '@/assets/projects/project1/Capture d\'écran 2025-05-15 120954.png';
import capture3 from '@/assets/projects/project1/Capture d\'écran 2025-05-15 121019.png';
import capture4 from '@/assets/projects/project1/Capture d\'écran 2025-05-15 121258.png';
import darkMode from '@/assets/projects/project1/Dark_mode.png';
import schedule from '@/assets/projects/project1/schedule.png';

// Group project1 images into one constant for easy reference
const project1Images = [
  analyticsImage,
  capture1,
  capture2,
  capture3,
  capture4,
  darkMode,
  schedule,
];

// Import all project2 images
import captureP2_1 from '@/assets/projects/project2/Capture.jpg';
import captureP2_2 from '@/assets/projects/project2/Capture1.jpg';
import captureP2_3 from '@/assets/projects/project2/Capture3.jpg';
import captureP2_4 from '@/assets/projects/project2/Capture4.jpg';
import captureP2_5 from '@/assets/projects/project2/Capture5.jpg';
import captureP2_6 from '@/assets/projects/project2/Capture6.jpg';
import captureP2_7 from '@/assets/projects/project2/Capture7.jpg';
import captureP2_8 from '@/assets/projects/project2/Capture8.jpg';

// Group project2 images into one constant for easy reference
const project2Images = [
  captureP2_1,
  captureP2_2,
  captureP2_3,
  captureP2_4,
  captureP2_5,
  captureP2_6,
  captureP2_7,
  captureP2_8,
];

// Import all project3 images
import imgP3_1 from '@/assets/projects/project3/img01.jpg';
import imgP3_2 from '@/assets/projects/project3/img02.jpg';
import imgP3_3 from '@/assets/projects/project3/img03.jpg';
import imgP3_4 from '@/assets/projects/project3/img04.jpg';
import imgP3_5 from '@/assets/projects/project3/img05.jpg';
import imgP3_6 from '@/assets/projects/project3/img06.jpg';
import imgP3_7 from '@/assets/projects/project3/img07.jpg';
import imgP3_8 from '@/assets/projects/project3/img08.jpg';
import { Link } from 'react-router-dom';

// Group project3 images into one constant for easy reference
const project3Images = [
  imgP3_1,
  imgP3_2,
  imgP3_3,
  imgP3_4,
  imgP3_5,
  imgP3_6,
  imgP3_7,
  imgP3_8,
];

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

const EnhancedProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Salaweti App',
      description:
        'Mobile application for Islamic prayers and invocations with beautiful UI and offline support.',
      image: project3Images[0],
      images: project3Images,
      technologies: ['Flutter', 'Dart', 'SQLite'],
      github: 'https://github.com',
      category: 'Mobile',
      problem:
        'Muslims need a convenient way to access prayers and invocations on-the-go, even without internet connection. Existing solutions were either too complex or lacked proper Arabic typography.',
      architecture: `
├── lib/
│   ├── models/          # Data models for prayers
│   ├── services/        # SQLite database service
│   ├── screens/         # UI screens
│   ├── widgets/         # Reusable components
│   └── utils/           # Helper functions
└── assets/
    ├── prayers/         # JSON prayer data
    └── fonts/           # Arabic typography
      `,
      result:
        'Delivered a beautiful, performant app with 10,000+ downloads. Users praised the elegant Arabic typography and smooth offline experience. 4.8★ rating on stores.',
    },
    {
      title: 'Social Media Manager',
      description:
        'Full-stack web application for managing Facebook and Instagram publications with analytics.',
      image: analyticsImage,
      images: project1Images,
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com/RahmaFkh24/SocialMediaManagementApplication',
      demo: 'https://example.com',
      category: 'Web',
      problem:
        'Small businesses struggle to manage multiple social media accounts efficiently. They need a unified dashboard for scheduling posts, tracking engagement, and analyzing performance.',
      architecture: `
Frontend (React):
- Dashboard with real-time analytics
- Post scheduler with calendar view
- Media library management

Backend (Node.js + Express):
- RESTful API with JWT auth
- Facebook/Instagram OAuth integration
- Job queue for scheduled posts
- WebSocket for real-time updates

Database (MongoDB):
- Users & authentication
- Posts & media assets
- Analytics & metrics
      `,
      result:
        'Created a production-ready platform that reduced social media management time by 60%. Implemented OAuth 2.0 for secure account linking and built a job queue for reliable post scheduling.',
    },
    {
      title: 'Distributed Car Manager',
      description:
        'Java RMI application for distributed car fleet management with real-time status updates.',
      image:
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      ],
      technologies: ['Java', 'RMI', 'JavaFX'],
      github: 'https://github.com',
      category: 'Desktop',
      problem:
        'Car rental companies need to track vehicle availability across multiple locations in real-time. Traditional centralized systems create bottlenecks and single points of failure.',
      architecture: `
Architecture (Java RMI):
- Server: Registry & remote objects
- Client: JavaFX GUI application
- Communication via RMI protocol

Components:
├── Server
│   ├── CarRegistry (RMI)
│   ├── BookingService
│   └── StatusMonitor
└── Client
    ├── Dashboard
    ├── BookingPanel
    └── ReportGenerator
      `,
      result:
        'Built a distributed system handling 1000+ concurrent connections. Achieved 99.9% uptime with automatic failover and real-time synchronization across all locations.',
    },
    {
      title: 'WordPress Business Site',
      description:
        'Professional business website with custom theme and e-commerce integration.',
      image: project2Images[0],
      images: project2Images,
      technologies: ['WordPress', 'PHP', 'WooCommerce'],
      demo: 'https://example.com',
      category: 'Web',
      problem:
        'VISS needed a professional online presence with e-commerce capabilities to expand their business. The site had to be easy to maintain without technical knowledge.',
      architecture: `
WordPress Stack:
- Custom child theme (PHP)
- WooCommerce for e-commerce
- Custom post types for services
- ACF for flexible content
- Yoast SEO optimization
- CloudFlare CDN integration
      `,
      result:
        'Delivered a fast, SEO-optimized website that increased online sales by 150%. Achieved Google PageSpeed score of 95+ and trained the team on content management.',
    },
  ];

  const categories = ['All', 'Web', 'Mobile', 'Desktop'];

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <>
      <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-mono">
              The <span className="gradient-text">Lab</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my projects — Click for detailed case studies
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={selectedFilter === category ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter(category)}
                  className={
                    selectedFilter === category
                      ? 'bg-primary hover:bg-primary/90 glow-border font-mono'
                      : 'border-primary/30 hover:border-primary font-mono'
                  }
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden bg-card/50 backdrop-blur border-border hover:border-primary transition-all h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Code rain effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="flex gap-3"
                      >
                        {project.github && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github, '_blank');
                            }}
                          >
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </Button>
                        )}
                        {project.demo && (
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.demo, '_blank');
                            }}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
                        )}
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-grow flex flex-col">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-mono">
                        {project.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="border-primary/30 text-primary"
                      >
                        {project.category}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Case Study
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 glow-border font-mono group"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectCaseStudy
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedProjectsSection;
