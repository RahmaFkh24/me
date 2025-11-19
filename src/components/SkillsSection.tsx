import { useEffect, useState, useRef } from 'react';
import { Code2, Globe, Wrench, Cloud, Database, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  icon: any;
  title: string;
  skills: Skill[];
  color: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      icon: Code2,
      title: 'Languages',
      color: 'from-primary to-primary/70',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'C/C++', level: 70 },
      ],
    },
    {
      icon: Globe,
      title: 'Web & Mobile',
      color: 'from-secondary to-secondary/70',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Flutter', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 80 },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools',
      color: 'from-accent to-accent/70',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Postman', level: 85 },
      ],
    },
    {
      icon: Cloud,
      title: 'Web Services',
      color: 'from-primary to-secondary',
      skills: [
        { name: 'REST API', level: 90 },
        { name: 'SOAP', level: 75 },
        { name: 'JSON/XML', level: 85 },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'from-secondary to-primary',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQLite', level: 80 },
      ],
    },
    {
      icon: Brain,
      title: 'AI & Data',
      color: 'from-accent to-primary',
      skills: [
        { name: 'Machine Learning', level: 80 },
        { name: 'Pandas', level: 85 },
        { name: 'TensorFlow', level: 75 },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, intelligent applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-all group animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.1 + skillIndex * 0.05)}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
