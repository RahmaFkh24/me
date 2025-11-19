import { motion } from 'framer-motion';
import { Skill3DCube } from './Skill3DCube';

const EnhancedSkillsSection = () => {
  const skills = [
    {
      name: 'Python',
      level: 90,
      description: 'Used in project leverages AI to analyze movie reviews, using natural language processing (NLP) for classification and sentiment analysis. ',
      projectLink: 'https://github.com/RahmaFkh24/movie_Reviews',
      color: 'from-primary to-primary/70',
    },
    {
      name: 'React',
      level: 90,
      description: 'Built multiple full-stack applications including this portfolio with advanced animations',
      projectLink: 'https://github.com/RahmaFkh24/SocialMediaManagementApplication',
      color: 'from-secondary to-secondary/70',
    },
    {
      name: 'Flutter',
      level: 85,
      description: 'Developed Salaweti App with beautiful UI and offline-first architecture',
      projectLink: 'https://github.com',
      color: 'from-accent to-accent/70',
    },
    {
      name: 'Node.js',
      level: 80,
      description: 'Created RESTful APIs and real-time applications with Express and WebSockets',
      projectLink: 'https://github.com/RahmaFkh24/pub-management',
      color: 'from-primary to-secondary',
    },
    {
      name: 'MongoDB',
      level: 80,
      description: 'Designed scalable database schemas for social media management platform',
      projectLink: 'https://github.com/RahmaFkh24/pub-management',
      color: 'from-secondary to-primary',
    },
    {
      name: 'Machine Learning',
      level: 80,
      description: 'Implemented ML models using TensorFlow and Pandas for data analysis projects',
      projectLink: 'https://github.com/RahmaFkh24/ChatBot',
      color: 'from-accent to-primary',
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      {/* Neural network background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="neural-grid"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="2" fill="#7B61FF" />
              <line
                x1="50"
                y1="50"
                x2="150"
                y2="50"
                stroke="#7B61FF"
                strokeWidth="0.5"
              />
              <line
                x1="50"
                y1="50"
                x2="50"
                y2="150"
                stroke="#7B61FF"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-mono">
            The Tech <span className="gradient-text">Matrix</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive skill showcase — Hover over each cube to explore
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Skill3DCube
              key={skill.name}
              skill={skill}
              color={skill.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Code compilation animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 p-6 bg-card/50 backdrop-blur border border-border rounded-lg font-mono text-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-muted-foreground">terminal</span>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 2 }}
          >
            <p className="text-primary">
              $ <span className="text-secondary">compiling</span> skills...
            </p>
            <p className="text-muted-foreground mt-2">
              ✓ Frontend expertise loaded
            </p>
            <p className="text-muted-foreground">✓ Backend systems initialized</p>
            <p className="text-muted-foreground">✓ AI/ML modules active</p>
            <p className="text-green-500 mt-2">
              → Ready to build amazing things
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedSkillsSection;
