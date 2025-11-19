import Navbar from '@/components/Navbar';
import EnhancedHeroSection from '@/components/EnhancedHeroSection';
import EnhancedAboutSection from '@/components/EnhancedAboutSection';
import EnhancedSkillsSection from '@/components/EnhancedSkillsSection';
import EnhancedProjectsSection from '@/components/EnhancedProjectsSection';
import PlaygroundSection from '@/components/PlaygroundSection';
import EnhancedContactSection from '@/components/EnhancedContactSection';
import Footer from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Navbar />
      <main>
        <EnhancedHeroSection />
        <EnhancedAboutSection />
        <EnhancedSkillsSection />
        <EnhancedProjectsSection />
        <PlaygroundSection />
        <EnhancedContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
