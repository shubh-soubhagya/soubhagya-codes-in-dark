import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border/40 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-2">Soubhagya Srivastava</h3>
            <p className="text-muted-foreground">AI/ML Developer & Data Scientist</p>
            <p className="text-sm text-muted-foreground mt-1">
              Building intelligent solutions for tomorrow
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/soubhagya-srivastava-611408267/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/shubh-soubhagya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:soubhagyasrivastava240@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {currentYear} Soubhagya Srivastava. Built with 
            <Heart className="h-4 w-4 text-red-500" />
            using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};