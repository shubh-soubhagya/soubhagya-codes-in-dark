import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, FileText, Search, Video, Scan, Eye, Filter, Star, Code, Zap, Database } from 'lucide-react';

const projectCategories = [
  { id: 'all', label: 'All Projects', icon: Code },
  { id: 'ai-agents', label: 'AI Agents', icon: Brain },
  { id: 'nlp', label: 'NLP & LLMs', icon: Search },
  { id: 'cv', label: 'Computer Vision', icon: Eye },
  { id: 'chatbots', label: 'Chatbots', icon: Video }
];

const projects = [
  {
    title: "MAS-HIRE (Multi-Agent System for Hiring)",
    description: "Revolutionary AI-driven job screening system featuring three specialized agents built using Gemma-2 model. Implements Zero-Shot Learning for job analysis, Few-Shot Learning for CV parsing, and intelligent scoring algorithms.",
    longDescription: "This sophisticated multi-agent system transforms recruitment by automating candidate evaluation. The first agent extracts role-specific requirements, the second parses CVs with advanced entity recognition, and the third provides precise match scoring with detailed analytics.",
    icon: Brain,
    category: 'ai-agents',
    technologies: ["Gemma-2", "Ollama", "Zero-Shot Learning", "Few-Shot Learning", "Multi-Agent Systems", "Python"],
    features: ["Automated CV Parsing", "Role Matching", "Candidate Scoring", "Multi-Agent Architecture"],
    status: "Beta",
    complexity: "Advanced",
    githubUrl: "https://github.com/shubh-soubhagya/MAS-HIRE",
    liveUrl: "https://github.com/shubh-soubhagya/MAS-HIRE",
    featured: true,
    stats: { accuracy: "95%", agents: "4", models: "Gemma-2" }
  },
  {
    title: "SHODH-AI: Unified AI Platform",
    description: "Comprehensive AI platform transforming digital content interaction across multiple formats. Features real-time analysis, intelligent QnA, and high-precision content processing.",
    longDescription: "A revolutionary platform that makes any digital content interactive. From YouTube videos to PDFs, websites to images, ShodhAI enables intelligent conversations and deep content analysis using state-of-the-art AI models.",
    icon: Search,
    category: 'nlp',
    technologies: ["HuggingFace", "Ollama", "PaddleOCR", "LangChain", "Transformers", "FAISS"],
    features: ["Multi-format Support", "Real-time QnA", "Content Analysis", "OCR Integration"],
    status: "Production Ready",
    complexity: "Advanced",
    githubUrl: "https://github.com/shubh-soubhagya/ShodhAI-2.0",
    liveUrl: "https://github.com/shubh-soubhagya/ShodhAI-2.0",
    featured: true,
    stats: { formats: "10+", accuracy: "92%", models: "5+" }
  },
  {
    title: "AI Powered Document Analysis System",
    description: "Advanced research platform with comprehensive plagiarism detection and intelligent document classification using multiple AI techniques and similarity algorithms.",
    longDescription: "Designed specifically for researchers, this system combines TF-IDF, cosine similarity, n-gram analysis, and LSH techniques for precise plagiarism detection. Includes domain-specific classification and RAG-based intelligent query answering.",
    icon: FileText,
    category: 'nlp',
    technologies: ["TF-IDF", "SpaCy", "LLaMA-3", "FAISS", "RAG", "Cosine Similarity", "LSH"],
    features: ["Plagiarism Detection", "Domain Classification", "RAG QnA", "Similarity Analysis"],
    status: "Beta",
    complexity: "Advanced",
    githubUrl: "https://github.com/shubh-soubhagya/AI-Powered-Document-Analysis-System",
    liveUrl: "https://github.com/shubh-soubhagya/AI-Powered-Document-Analysis-System",
    stats: { accuracy: "89%", domains: "3", techniques: "4+" }
  },
  {
    title: "YouTube Video Transcript Chatbot",
    description: "Intelligent YouTube content analyzer with context-aware conversation capabilities using LLAMA3-70B model for enhanced learning experiences.",
    longDescription: "Transform any YouTube video into an interactive learning session. Extract transcripts automatically and engage in meaningful conversations about the content with advanced AI that understands context and provides insightful responses.",
    icon: Video,
    category: 'chatbots',
    technologies: ["LLAMA3-70B", "Groq API", "Flask", "YouTube API", "NLP", "Transcript Processing"],
    features: ["Auto Transcript", "Context-Aware Chat", "History Navigation", "Download Support"],
    status: "Production Ready",
    complexity: "Intermediate",
    githubUrl: "https://github.com/shubh-soubhagya/YouTube-transcript-chatbot",
    liveUrl: "https://github.com/shubh-soubhagya/YouTube-transcript-chatbot",
    stats: { model: "70B", api: "Groq", features: "4+" }
  },
  {
    title: "DOCCUPY: AI-Driven PDF Chatbot",
    description: "Smart PDF interaction platform enabling conversational document analysis with context-aware responses and real-time query processing.",
    longDescription: "Upload any PDF and start an intelligent conversation. DOCCUPY uses advanced vector databases and LangChain framework to provide precise, contextual answers from your documents in real-time.",
    icon: FileText,
    category: 'chatbots',
    technologies: ["Ollama", "FAISS", "LangChain", "Vector Database", "PDF Processing", "RAG"],
    features: ["PDF Upload", "Real-time Chat", "Context Awareness", "Vector Search"],
    status: "Production Ready",
    complexity: "Intermediate",
    githubUrl: "https://github.com/shubh-soubhagya/Doccupy",
    stats: { database: "FAISS", framework: "LangChain", response: "Real-time" }
  },
  {
    title: "TEXTIFY OCR Tools",
    description: "Dual-implementation OCR solution: GPU-powered transformer models and CPU-optimized processing for versatile text extraction needs.",
    longDescription: "Complete OCR solution with two powerful implementations. The GPU version uses cutting-edge transformer models for maximum accuracy, while the CPU version offers optimized performance for broader accessibility.",
    icon: Scan,
    category: 'cv',
    technologies: ["GOT-OCR2_0", "PaddleOCR", "Transformers", "LLaMA-3.3", "Computer Vision"],
    features: ["Dual Implementation", "Multi-format Export", "High Accuracy", "Optimized Performance"],
    status: "Production Ready",
    complexity: "Intermediate",
    githubUrl: "https://github.com/shubh-soubhagya/textify-cpu",
    stats: { versions: "2", formats: "5+", accuracy: "95%+" }
  },
  {
    title: "AI Face Detection System",
    description: "Real-time face detection system with multi-face recognition capabilities and computer vision optimization for live applications.",
    longDescription: "Efficient computer vision system for real-time face detection using optimized algorithms. Features webcam integration, multi-face detection, and precise bounding box visualization for various applications.",
    icon: Eye,
    category: 'cv',
    technologies: ["OpenCV", "Haar Cascade", "Computer Vision", "Real-time Processing", "Python"],
    features: ["Real-time Detection", "Multi-face Support", "Webcam Integration", "Bounding Boxes"],
    status: "Completed",
    complexity: "Beginner",
    githubUrl: "https://github.com/shubh-soubhagya/AI-Face-Detection",
    stats: { realtime: "Yes", faces: "Multiple", accuracy: "High" }
  }
];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/40';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40';
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/40';
      default: return 'bg-primary/20 text-primary border-primary/40';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production Ready': return 'bg-green-500/20 text-green-400 border-green-500/40';
      case 'Beta': return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case 'Completed': return 'bg-purple-500/20 text-purple-400 border-purple-500/40';
      default: return 'bg-primary/20 text-primary border-primary/40';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-gradient">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative AI/ML solutions showcasing expertise across natural language processing, 
            computer vision, and intelligent system development.
          </p>
        </div>

        {/* Project Categories Filter */}
        <div className="flex items-center justify-center mb-12">
          <div className="portfolio-card p-2 flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground mr-2" />
            {projectCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-primary/10'
                } transition-all duration-200`}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`portfolio-card p-0 group relative overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              } animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Header */}
              <div className="relative p-6 bg-gradient-to-r from-card to-card/80">
                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/40">
                      Featured
                    </Badge>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                      <Badge className={getComplexityColor(project.complexity)}>
                        {project.complexity}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {hoveredProject === index ? project.longDescription : project.description}
                </p>

                {/* Project Stats */}
                {project.stats && (
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center bg-background/50 rounded-lg p-2">
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Body */}
              <div className="p-6">
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="skill-tag text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/40 text-primary hover:bg-primary/10 flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                  
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Projects Summary */}
        <div className="mt-20 text-center">
          <div className="portfolio-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-6">Project Portfolio Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Total Projects", value: "20+", icon: Code },
                { label: "AI/ML Models", value: "30+", icon: Brain },
                { label: "Technologies", value: "50+", icon: Zap },
                { label: "Production Ready", value: projects.filter(p => p.status === 'Production Ready').length.toString(), icon: Star }
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
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View More of My Projects
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};