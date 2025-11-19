import { Languages, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import aboutAvatar from '@/assets/about-avatar.jpg';
import { CircularTimeline } from './CircularTimeline';

const EnhancedAboutSection = () => {
  const infoCards = [
    {
      icon: Languages,
      title: 'Languages',
      content: '🇫🇷 French • 🇬🇧 English • 🇹🇳 Arabic',
    },
    {
      icon: Heart,
      title: 'Interests',
      content: 'Camping • Travel • Photography',
    },
  ];

  const evolutionSteps = [
    { stage: 'Software Developement', progress: 100, color: 'from-primary to-primary/70' },
    { stage: 'Web Technologies', progress: 80, color: 'from-secondary to-secondary/70' },
    { stage: 'Shell Scripting and System Automation', progress: 85, color: 'from-accent to-accent/70' },
    { stage: 'Cyber Security', progress: 60, color: 'from-accent to-accent/70' },

  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-mono">
            The Engineer's <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image and Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative mx-auto lg:mx-0 w-64 h-64 sm:w-80 sm:h-80">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img
                src={aboutAvatar}
                alt="Rahma Fakhfakh"
                className="relative w-full h-full object-cover rounded-full border-4 border-primary/30 glow-border"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {infoCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-all group h-full">
                    <card.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold mb-2 font-mono">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{card.content}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-mono gradient-text mb-6">
                My Journey as an Engineer
              </h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-lg text-foreground/90 leading-relaxed"
              >
                Talented software engineer passionate about web development and cybersecurity, with strong command-line expertise and a curious mindset. I believe technology should be intelligent and human-centered. Leveraging full-stack development and software engineering skills, I turn complex challenges into secure, innovative, and elegant solutions.              </motion.p>
            </div>

            {/* Evolution Chart */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-6 font-mono">My Evolution</h3>
              <div className="space-y-4">
                {evolutionSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium font-mono">
                        {step.stage}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {step.progress}%
                      </span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${step.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${step.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 font-mono">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Autonomy',
                  'Team Spirit',
                  'Curiosity',
                  'Problem Solving',
                  'Adaptability',
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-all cursor-default font-mono"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Milestone Timeline */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 font-mono"
          >
            Journey <span className="gradient-text">Milestones</span>
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                year: '2022–2025',
                title: 'Bachelor in Computer Science',
                subtitle: 'ESPIN "Ecole Supérieure Polytechnique Internationale Privée"',
                description: 'Developed first full-stack apps and learned solid programming fundamentals.',
                icon: '🎓',
                gradient: 'from-primary/20 to-primary/5',
              },
              {
                year: '2025–2028',
                title: 'Engineering in Data & AI',
                subtitle: 'Polytechnique sfax Ipsas',
                description: 'Focused on intelligent systems, automotive AI, and distributed architectures.',
                icon: '🚀',
                gradient: 'from-accent/20 to-accent/5',
              },
              {
                year: 'Future',
                title: 'Research & Innovation',
                subtitle: 'DevOps & Cybersecurity for Modern Systems',
                description: 'Bridging automation and security to build scalable, resilient, and protected infrastructures using CI/CD, containers, and best security practices.',
                icon: '✨',
                gradient: 'from-secondary/20 to-secondary/5',
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0, 173, 181, 0.3)'
                }}
                className="perspective-1000"
              >
                <Card className={`p-8 bg-gradient-to-br ${milestone.gradient} border-border hover:border-primary transition-all hover-lift preserve-3d relative overflow-hidden group h-full`}>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="text-5xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring' }}
                    >
                      {milestone.icon}
                    </motion.div>

                    <div className="inline-block px-3 py-1 bg-primary/20 rounded-full mb-4">
                      <span className="text-sm font-bold text-primary font-mono">
                        {milestone.year}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold mb-2 font-mono group-hover:text-primary transition-colors">
                      {milestone.title}
                    </h4>

                    <p className="text-sm text-primary/80 mb-3 font-semibold">
                      {milestone.subtitle}
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutSection;
