import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    title: "AI/ML Developer Intern",
    company: "GarudaX",
    location: "Patna, Bihar",
    period: "Oct 2024 - Present",
    achievements: [
      "Assisted in developing and deploying DigiAstra, a Python-based vulnerability identification tool using 10+ security modules, achieving high accuracy in detecting SQL injection, security headers, tech stack, and subdomain enumeration.",
      "Contributed to building an AI-powered Data Loss Prevention (DLP) system with 87%+ accuracy across 15+ file types, including malware detection and multi-format data classification.",
      "Contributed to developing an Intrusion Detection System (IDS) and network anomaly detection models, achieving 92% accuracy on large-scale datasets using neural networks.",
      "Participated in internal presentations and product demos, contributing to product improvements and cross-functional discussions on AI-driven cybersecurity solutions."
    ]
  },
  {
    title: "Data Science Team Lead",
    company: "Purezza Technologies",
    location: "Gujarat, India",
    period: "Jan 2024 - Present",
    achievements: [
      "Assisted in developing an AI-powered invoice generation chatbot using NLP techniques with automatic spelling correction and dynamic product price retrieval from databases.",
      "Contributed to building LLM-based content generation models using Cohere API for personalized, multi-slide presentation creation.",
      "Supported image generation models with Stable Diffusion and Hugging Face Transformers for high-quality AI-driven visual content.",
      "Devised and deployed 50+ predictive models using optimized ML algorithms, ensuring high accuracy, scalability, and real-world applicability across diverse domains.",
      "Contributed to developing and deploying 50+ predictive models with optimized data pipelines, ensuring high accuracy, scalable deployment, and production-level performance optimization."
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-gradient">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building cutting-edge AI solutions and contributing to innovative projects in cybersecurity and data science.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 ring-4 ring-background"></div>

                <div className={`portfolio-card p-8 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Building className="h-4 w-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};