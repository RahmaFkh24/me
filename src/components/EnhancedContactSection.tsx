import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import QRCode from 'react-qr-code';

const EnhancedContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Terminal animation
    const lines = [
      '$ initiating_connection...',
      '> validating_credentials...',
      '> encrypting_message...',
      '> transmitting_data...',
      '✓ message_sent_successfully',
    ];

    for (let i = 0; i < lines.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setTerminalLines((prev) => [...prev, lines[i]]);
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    setTerminalLines([]);
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/RahmaFkh24',
      color: 'hover:text-primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/fakhfekh-rahma-73652018a/',
      color: 'hover:text-secondary',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:rahmafakhfekh58@gmail.com',
      color: 'hover:text-accent',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-mono">
            Let's <span className="gradient-text">Connect</span> 👋
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Centered QR Code with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto mb-16"
        >
          <Card className="p-12 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/40 text-center relative overflow-hidden glow-pulse">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 font-mono gradient-text">
                Quick Access
              </h3>
              <p className="text-muted-foreground mb-8 text-base">
                Scan to download my CV or visit my portfolio
              </p>

              <motion.div
                className="inline-block p-6 bg-white rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 3 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 173, 181, 0.3)',
                    '0 0 40px rgba(0, 173, 181, 0.5)',
                    '0 0 20px rgba(0, 173, 181, 0.3)',
                  ],
                }}
                transition={{
                  // Keep spring behaviour for transforms (default), but use a tween for boxShadow
                  default: { type: 'spring', stiffness: 300 },
                  boxShadow: { duration: 2, ease: 'easeInOut', repeat: Infinity },
                }}
              >
                <QRCode
                  value="https://rahma-portfolio.com/cv.pdf"
                  size={200}
                  fgColor="#00ADB5"
                />
              </motion.div>

              <p className="text-xs text-muted-foreground mt-6 font-mono">
                Scan for instant access
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: 'spring' }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-all hover-lift">
                  <div className="flex flex-col items-center gap-3">
                    <div className={`p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all ${link.color}`}>
                      <link.icon className="h-8 w-8" />
                    </div>
                    <span className="text-sm font-medium font-mono">
                      {link.label}
                    </span>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mt-16"
        >
          <Card className="p-8 bg-card/50 backdrop-blur border-border">
            <h3 className="text-2xl font-bold mb-6 font-mono text-center">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 font-mono"
                >
                  {'> name'}
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="Your name"
                  className="bg-background/50 border-border focus:border-primary font-mono"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 font-mono"
                >
                  {'> email'}
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-border focus:border-primary font-mono"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 font-mono"
                >
                  {'> message'}
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-background/50 border-border focus:border-primary resize-none font-mono"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 glow-border font-mono"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <Terminal className="mr-2 h-5 w-5 animate-pulse" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>

              {/* Terminal Output */}
              <AnimatePresence>
                {terminalLines.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-background/80 rounded-lg border border-primary/30 font-mono text-sm overflow-hidden"
                  >
                    {terminalLines.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={
                          line.startsWith('✓')
                            ? 'text-green-500'
                            : line.startsWith('>')
                              ? 'text-secondary'
                              : 'text-primary'
                        }
                      >
                        {line}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedContactSection;
