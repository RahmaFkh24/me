import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code } from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface TimelineItem {
  icon: any;
  title: string;
  subtitle: string;
  period: string;
  type: 'education' | 'work' | 'project';
  anecdote: string;
  color: string;
}

export const CircularTimeline = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const timeline: TimelineItem[] = [
    {
      icon: GraduationCap,
      title: 'Polytech Nantes',
      subtitle: 'Data & AI Engineering',
      period: '2024 - Present',
      type: 'education',
      anecdote:
        'Currently mastering advanced machine learning techniques and big data processing. Building real-world projects with TensorFlow and cloud infrastructure.',
      color: 'from-primary to-primary/70',
    },
    {
      icon: GraduationCap,
      title: 'IUT de Bayonne',
      subtitle: 'Bachelor in Computer Science',
      period: '2021 - 2024',
      type: 'education',
      anecdote:
        'Graduated with honors. Focused on software architecture and full-stack development. Led multiple team projects using agile methodologies.',
      color: 'from-secondary to-secondary/70',
    },
    {
      icon: Briefcase,
      title: 'VISS',
      subtitle: 'WordPress Development Internship',
      period: '2023',
      type: 'work',
      anecdote:
        'Built a professional e-commerce website from scratch. Learned to optimize for SEO and performance. Integrated custom payment gateways and inventory management.',
      color: 'from-accent to-accent/70',
    },
    {
      icon: Code,
      title: 'Final Year Project',
      subtitle: 'Social Media Management App',
      period: '2024',
      type: 'project',
      anecdote:
        'Created a MERN stack application with OAuth integration for Facebook and Instagram APIs. Implemented analytics dashboard and post scheduling with Deno backend.',
      color: 'from-primary to-secondary',
    },
  ];

  const centerX = 200;
  const centerY = 200;
  const radius = 120;

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 0 20px rgba(123, 97, 255, 0.3))' }}
      >
        {/* Center circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r="30"
          fill="url(#centerGradient)"
          className="animate-pulse"
        />
        <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white text-xs font-bold font-mono"
        >
          Journey
        </text>

        {/* Orbital path */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="url(#orbitGradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.3"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${centerX} ${centerY}`}
            to={`360 ${centerX} ${centerY}`}
            dur="60s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Timeline items */}
        {timeline.map((item, index) => {
          const angle = (index * 360) / timeline.length - 90;
          const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((angle * Math.PI) / 180);

          return (
            <g key={index}>
              {/* Connection line */}
              <motion.line
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              />

              {/* Item circle */}
              <motion.circle
                cx={x}
                cy={y}
                r="25"
                fill={`url(#itemGradient${index})`}
                className="cursor-pointer"
                onClick={() =>
                  setSelectedItem(selectedItem === index ? null : index)
                }
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2, type: 'spring' }}
                whileHover={{ scale: 1.2 }}
                style={{ filter: 'drop-shadow(0 0 10px rgba(123, 97, 255, 0.5))' }}
              />

              <defs>
                <linearGradient
                  id={`itemGradient${index}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor={
                      item.type === 'education'
                        ? '#7B61FF'
                        : item.type === 'work'
                        ? '#00FFFF'
                        : '#FF00FF'
                    }
                  />
                  <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </g>
          );
        })}

        <defs>
          <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B61FF" />
            <stop offset="100%" stopColor="#00FFFF" />
          </linearGradient>
          <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B61FF" />
            <stop offset="50%" stopColor="#00FFFF" />
            <stop offset="100%" stopColor="#7B61FF" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B61FF" />
            <stop offset="100%" stopColor="#00FFFF" />
          </linearGradient>
        </defs>
      </svg>

      {/* Timeline details */}
      <div className="mt-8 grid gap-4">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-all">
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${item.color} flex-shrink-0`}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      <p className="text-xs text-muted-foreground/60 mt-1">
                        {item.period}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setSelectedItem(selectedItem === index ? null : index)
                      }
                      className="text-primary hover:text-primary/80"
                    >
                      {selectedItem === index ? 'Hide' : 'View More'}
                    </Button>
                  </div>

                  {selectedItem === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 p-4 bg-muted/30 rounded-lg border border-primary/20"
                    >
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {item.anecdote}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
