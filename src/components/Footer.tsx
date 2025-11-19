import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Rahma Fakhfekh. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
