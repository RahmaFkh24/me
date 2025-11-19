import { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface QuoteData {
  content: string;
  author: string;
}

const PlaygroundSection = () => {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote({ content: data.content, author: data.author });
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote({
        content: 'The best way to predict the future is to invent it.',
        author: 'Alan Kay',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="playground" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-mono">
            The <span className="gradient-text">Playground</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring APIs and creative integrations
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur border-border hover:border-primary transition-all hover-lift">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Quote className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-mono">
                  Inspirational Quote Generator
                </h3>
              </div>

              <div className="mb-8 min-h-[200px] flex items-center justify-center">
                {quote ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-6"
                  >
                    <div className="relative">
                      <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary/20" />
                      <p className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed px-8">
                        {quote.content}
                      </p>
                      <Quote className="absolute -bottom-4 -right-4 h-8 w-8 text-primary/20 rotate-180" />
                    </div>
                    <p className="text-lg text-muted-foreground font-mono">
                      — {quote.author}
                    </p>
                  </motion.div>
                ) : (
                  <div className="text-center text-muted-foreground">
                    <Sparkles className="h-16 w-16 mx-auto mb-4 text-primary/30" />
                    <p className="text-lg">Click the button to generate a quote</p>
                  </div>
                )}
              </div>

              <Button
                onClick={fetchQuote}
                disabled={isLoading}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 glow-border font-mono text-lg"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                    </motion.div>
                    Loading...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate a Quote
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-6">
                Powered by{' '}
                <a
                  href="https://quotable.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Quotable API
                </a>
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundSection;