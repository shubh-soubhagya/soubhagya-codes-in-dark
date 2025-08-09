import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "soubhagyasrivastava240@gmail.com",
      href: "mailto:soubhagyasrivastava240@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8967010103",
      href: "tel:+918967010103"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Patna, Bihar, India",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/soubhagya-srivastava-611408267"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my creations",
      href: "https://github.com/shubh-soubhagya"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-gradient">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting AI/ML projects or discuss innovative solutions? 
            I'm always open to new opportunities and interesting conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="portfolio-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for an AI/ML developer, want to discuss a project, 
                or just want to connect, I'd love to hear from you. Let's build something amazing together!
              </p>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <contact.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      {contact.href !== "#" ? (
                        <a
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-foreground font-medium">{contact.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="portfolio-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h3>
              
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground justify-start"
                  asChild
                >
                  <a href="mailto:soubhagyasrivastava240@gmail.com?subject=Project%20Collaboration&body=Hi%20Soubhagya,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20potential%20collaboration...">
                    <Mail className="h-5 w-5 mr-3" />
                    Send Email
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary/40 text-primary hover:bg-primary/10 justify-start"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/soubhagya-srivastava-611408267/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 mr-3" />
                    Connect on LinkedIn
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary/40 text-primary hover:bg-primary/10 justify-start"
                  asChild
                >
                  <a href="https://github.com/shubh-soubhagya" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-3" />
                    View GitHub Profile
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary/40 text-primary hover:bg-primary/10 justify-start"
                  asChild
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Send className="h-5 w-5 mr-3" />
                    Download Resume
                  </a>
                </Button>
              </div>

              <div className="mt-8 p-6 bg-gradient-primary rounded-lg text-center">
                <h4 className="text-lg font-semibold text-primary-foreground mb-2">
                  Open to Opportunities
                </h4>
                <p className="text-primary-foreground/90 text-sm">
                  Currently seeking full-time AI/ML Developer positions and exciting project collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="portfolio-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">Ready to Start Something Great?</h3>
            <p className="text-muted-foreground mb-6">
              From AI-powered solutions to machine learning innovations, let's turn your ideas into reality.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              asChild
            >
              <a href="mailto:soubhagyasrivastava240@gmail.com?subject=Let's%20Collaborate!">
                Start the Conversation
                <Send className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};