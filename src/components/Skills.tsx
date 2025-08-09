import { Brain, Code, Database, Cloud, GitBranch, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "AI & Model Development",
    icon: Brain,
    skills: [
      "Machine Learning", "Deep Learning", "LLMs", "Generative AI", 
      "Agentic AI", "NLP", "Transformers", "Data Preprocessing", 
      "Feature Engineering", "Model Deployment"
    ]
  },
  {
    title: "Tech Stack & Tools",
    icon: Code,
    skills: [
      "TensorFlow", "PyTorch", "Scikit-learn", "SpaCy", "Hugging Face",
      "LangChain", "OpenCV", "FastAPI", "Flask", "Git", "GitHub", "Ollama", "DialogFlow"
    ]
  },
  {
    title: "Development & Systems",
    icon: Terminal,
    skills: [
      "Unix/Linux", "Distributed Systems", "Information Retrieval",
      "TCP/IP Networking", "DBMS", "Computer Networks", "Google Colab",
      "Jupyter", "VS Code", "PyCharm"
    ]
  },
  {
    title: "Programming Languages",
    icon: GitBranch,
    skills: [
      "Python (Proficient)", "Java (Proficient)", "C++", "C"
    ]
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    skills: [
      "SQL", "AWS", "Database Management", "Cloud Computing"
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-gradient">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across the full spectrum of AI/ML development, from research to production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="portfolio-card p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag animate-fade-in"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Skills Highlight */}
        {/* <div className="mt-16 text-center">
          <div className="portfolio-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-6">Core Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Python", level: "Expert" },
                { name: "Machine Learning", level: "Advanced" },
                { name: "Deep Learning", level: "Advanced" },
                { name: "NLP", level: "Advanced" }
              ].map((skill, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{skill.level}</div>
                  <div className="text-muted-foreground">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};