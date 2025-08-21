import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span>Patna, Bihar, India</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Soubhagya</span>
              <br />
              <span className="text-foreground">Srivastava</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
              AI/ML Developer & Data Scientist
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about building intelligent systems and solving complex problems with 
              machine learning, deep learning, and cutting-edge AI technologies. Currently working 
              on Agentic AI solutions and MLOps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
                <Mail className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary/40 text-primary hover:bg-primary/10 px-8 py-3 text-lg"
                asChild
              >
                <a href="/SoubhagyaResume1507.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a
                href="https://www.linkedin.com/in/soubhagya-srivastava-611408267/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/shubh-soubhagya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:soubhagyasrivastava240@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full glow-border bg-gradient-card backdrop-blur-sm flex items-center justify-center">
                <div className="text-6xl lg:text-8xl font-bold text-gradient">
                  SS
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-glow-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-glow-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('experience')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};