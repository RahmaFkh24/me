import { GraduationCap, Briefcase, Languages, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import aboutAvatar from '@/assets/about-avatar.jpg';

const AboutSection = () => {
  const timeline = [
    {
      icon: GraduationCap,
      title: 'Polytech Nantes',
      subtitle: 'Data & AI Engineering',
      period: '2024 - Present',
      type: 'education',
    },
    {
      icon: GraduationCap,
      title: 'IUT de Bayonne',
      subtitle: 'Bachelor in Computer Science',
      period: '2021 - 2024',
      type: 'education',
    },
    {
      icon: Briefcase,
      title: 'VISS',
      subtitle: 'WordPress Development Internship',
      period: '2023',
      type: 'work',
    },
    {
      icon: Briefcase,
      title: 'Final Year Project',
      subtitle: 'Social Media Management App (MERN Stack)',
      period: '2024',
      type: 'project',
    },
  ];

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

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image and Info Cards */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="relative mx-auto lg:mx-0 w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
              <img
                src={aboutAvatar}
                alt="Rahma Fakhfakh"
                className="relative w-full h-full object-cover rounded-full border-4 border-primary/30 glow-border"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {infoCards.map((card, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-all hover:glow-border group"
                >
                  <card.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.content}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Text Content and Timeline */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
                I'm a passionate software engineer driven by curiosity and creativity.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                "Talented software engineer passionate about web development and cybersecurity, with strong command-line expertise and a curious mindset. I believe technology should be intelligent and human-centered. Leveraging full-stack development and software engineering skills, I turn complex challenges into secure, innovative, and elegant solutions
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-6 pt-8">
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.type === 'education'
                      ? 'bg-primary/20 text-primary'
                      : item.type === 'work'
                        ? 'bg-secondary/20 text-secondary'
                        : 'bg-accent/20 text-accent'
                      } group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-grow pb-6 border-l-2 border-border pl-6 group-hover:border-primary transition-colors">
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-muted-foreground/60">
                        {item.period}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Autonomy', 'Team Spirit', 'Curiosity', 'Problem Solving', 'Adaptability'].map(
                  (skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
