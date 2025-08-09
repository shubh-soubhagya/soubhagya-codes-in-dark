import { Calendar, MapPin, Building, TrendingUp, Users, Code, Shield, Database, Zap, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: "AI/ML Developer",
    company: "GarudaX",
    location: "Patna, Bihar",
    period: "Oct 2024 - Present",
    type: "Current Role",
    description: "Leading cybersecurity AI initiatives and developing advanced threat detection systems.",
    keyMetrics: [
      { label: "Security Modules", value: "10+", icon: Shield },
      { label: "Accuracy Rate", value: "92%", icon: TrendingUp },
      { label: "File Types", value: "15+", icon: Database }
    ],
    technologies: ["Python", "Neural Networks", "SQL Injection Detection", "Malware Detection", "IDS"],
    achievements: [
      {
        text: "Assisted in developing and deploying DigiAstra, a Python-based vulnerability identification tool using 10+ security modules, achieving high accuracy in detecting SQL injection, security headers, tech stack, and subdomain enumeration.",
        highlight: "DigiAstra Tool Development"
      },
      {
        text: "Contributed to building an AI-powered Data Loss Prevention (DLP) system with 87%+ accuracy across 15+ file types, including malware detection and multi-format data classification.",
        highlight: "87%+ DLP Accuracy"
      },
      {
        text: "Contributed to developing an Intrusion Detection System (IDS) and network anomaly detection models, achieving 92% accuracy on large-scale datasets using neural networks.",
        highlight: "92% IDS Accuracy"
      },
      {
        text: "Participated in internal presentations and product demos, contributing to product improvements and cross-functional discussions on AI-driven cybersecurity solutions.",
        highlight: "Product Leadership"
      }
    ],
    companyColor: "from-red-500/20 to-orange-500/20"
  },
  {
    title: "Data Science Team Lead",
    company: "Purezza Technologies",
    location: "Gujarat, India",
    period: "Jan 2024 - Present",
    type: "Leadership Role",
    description: "Spearheading AI/ML model development and leading cross-functional data science initiatives.",
    keyMetrics: [
      { label: "Models Deployed", value: "50+", icon: Code },
      { label: "Team Members", value: "25+", icon: Users },
      { label: "API Integrations", value: "10+", icon: Zap }
    ],
    technologies: ["NLP", "LLMs", "Cohere API", "Stable Diffusion", "Hugging Face", "ML Pipelines"],
    achievements: [
      {
        text: "Assisted in developing an AI-powered invoice generation chatbot using NLP techniques with automatic spelling correction and dynamic product price retrieval from databases.",
        highlight: "Invoice AI Chatbot"
      },
      {
        text: "Contributed to building LLM-based content generation models using Cohere API for personalized, multi-slide presentation creation.",
        highlight: "LLM Content Generation"
      },
      {
        text: "Supported image generation models with Stable Diffusion and Hugging Face Transformers for high-quality AI-driven visual content.",
        highlight: "AI Image Generation"
      },
      {
        text: "Devised and deployed 50+ predictive models using optimized ML algorithms, ensuring high accuracy, scalability, and real-world applicability across diverse domains.",
        highlight: "50+ ML Models"
      },
      {
        text: "Contributed to developing and deploying 50+ predictive models with optimized data pipelines, ensuring high accuracy, scalable deployment, and production-level performance optimization.",
        highlight: "Production Optimization"
      }
    ],
    companyColor: "from-blue-500/20 to-purple-500/20"
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-gradient">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building cutting-edge AI solutions and leading innovative projects in cybersecurity and data science.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative animate-slide-up`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Enhanced Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full transform md:-translate-x-1/2 ring-4 ring-background shadow-glow z-10"></div>

                <div className={`portfolio-card p-0 ml-16 md:ml-0 overflow-hidden ${
                  index % 2 === 0 ? 'md:mr-1/2 md:pr-8' : 'md:ml-1/2 md:pl-8'
                }`}>
                  {/* Company header with gradient */}
                  <div className={`bg-gradient-to-r ${exp.companyColor} p-6 border-b border-border/40`}>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/40">
                            {exp.type}
                          </Badge>
                          <Badge variant="outline" className="border-foreground/20">
                            {exp.period}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <Building className="h-5 w-5" />
                          <span className="font-semibold text-lg">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      {/* Key metrics */}
                      <div className="grid grid-cols-3 gap-4 lg:gap-6">
                        {exp.keyMetrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center bg-background/80 rounded-lg p-3 backdrop-blur-sm">
                            <metric.icon className="h-5 w-5 text-primary mx-auto mb-1" />
                            <div className="text-xl font-bold text-primary">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="skill-tag text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Trophy className="h-4 w-4" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="group">
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                              <div>
                                <div className="text-primary font-medium text-sm mb-1">
                                  {achievement.highlight}
                                </div>
                                <span className="text-muted-foreground leading-relaxed">
                                  {achievement.text}
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience summary */}
        <div className="mt-20 text-center">
          <div className="portfolio-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-6">Experience Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Years of Experience", value: "2+", icon: Calendar },
                { label: "AI Models Deployed", value: "50+", icon: Code },
                { label: "Security Modules", value: "10+", icon: Shield },
                { label: "Accuracy Achieved", value: "92%", icon: TrendingUp }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};