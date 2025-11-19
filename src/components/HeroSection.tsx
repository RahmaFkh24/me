import { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'I build intelligent, efficient and creative software experiences.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block text-foreground">Rahma</span>
              <span className="block gradient-text glow-text">Fakhfakh</span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground">
              Software Engineer | Data & AI Enthusiast
            </h2>

            <div className="min-h-[80px] sm:min-h-[60px]">
              <p className="text-lg sm:text-xl text-foreground/80 font-light">
                {displayText}
                <span className="animate-blink ml-1">|</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-border group"
                size="lg"
              >
                Discover My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                onClick={() => window.open('/cv.pdf', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden glow-border animate-glow-pulse">
              <img
                src={heroImage}
                alt="Software Engineer Illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
