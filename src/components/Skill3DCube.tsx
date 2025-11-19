import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Skill3DCubeProps {
  skill: {
    name: string;
    level: number;
    description: string;
    projectLink?: string;
  };
  color: string;
  delay: number;
}

export const Skill3DCube = ({ skill, color, delay }: Skill3DCubeProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-48 cursor-pointer preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front face */}
        <div
          className={`absolute inset-0 backface-hidden rounded-xl p-6 bg-gradient-to-br ${color} border border-primary/30 shadow-lg flex flex-col items-center justify-center text-center`}
        >
          <motion.div
            animate={{
              scale: isFlipped ? 0.8 : 1,
              opacity: isFlipped ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3 font-mono">
              {skill.name}
            </h3>
            <div className="w-full bg-white/20 rounded-full h-2 mb-2">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ delay: delay + 0.3, duration: 1 }}
              />
            </div>
            <p className="text-white/80 text-sm font-mono">{skill.level}%</p>
          </motion.div>
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 backface-hidden rotateY-180 rounded-xl p-6 bg-card/95 backdrop-blur border border-primary shadow-lg flex flex-col justify-between"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isFlipped ? 1 : 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-primary mb-3 font-mono">
              {skill.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {skill.description}
            </p>
            {skill.projectLink && (
              <a
                href={skill.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                View Project
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
