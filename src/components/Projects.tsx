import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Brain, FileText, Search, Video, Scan, Eye } from 'lucide-react';

const projects = [
  {
    title: "MAS-HIRE (Multi-Agent System for Hiring)",
    description: "AI-driven job screening system with three specialized agents built using Gemma-2 model via Ollama. Features Zero-Shot Learning for job description analysis, Few-Shot Learning for CV parsing, and intelligent matching algorithms for automated candidate shortlisting.",
    icon: Brain,
    technologies: ["Gemma-2", "Ollama", "Zero-Shot Learning", "Few-Shot Learning", "AI Agents"],
    githubUrl: "#",
    featured: true
  },
  {
    title: "AI Powered Document Analysis System",
    description: "Comprehensive document analysis platform for researchers featuring advanced plagiarism detection using TF-IDF, cosine similarity, n-gram, and LSH techniques. Includes domain classification and RAG-based QnA chatbot powered by LLaMA-3.",
    icon: FileText,
    technologies: ["TF-IDF", "SpaCy", "LLaMA-3", "FAISS", "RAG", "Cosine Similarity"],
    githubUrl: "#"
  },
  {
    title: "SHODH-AI: Unified AI Platform",
    description: "Revolutionary AI platform transforming digital content interaction. Features YouTube transcript analysis, real-time website QnA, PDF chatbots, document similarity checks, and high-precision OCR using cutting-edge AI models.",
    icon: Search,
    technologies: ["HuggingFace", "Ollama", "PaddleOCR", "LangChain", "Transformers"],
    githubUrl: "#",
    featured: true
  },
  {
    title: "YouTube Video Transcript Chatbot",
    description: "AI-powered tool for extracting YouTube transcripts and enabling context-aware conversations using LLAMA3-70B model via Groq Inference API. Features chat history navigation and intelligent responses for enhanced learning.",
    icon: Video,
    technologies: ["LLAMA3-70B", "Groq API", "Flask", "YouTube API", "NLP"],
    githubUrl: "#"
  },
  {
    title: "DOCCUPY: AI-Driven PDF Chatbot",
    description: "Intelligent PDF interaction platform allowing users to upload documents and engage through context-aware chatbot. Built with Ollama models, FAISS vector database, and LangChain framework for precise real-time answers.",
    icon: FileText,
    technologies: ["Ollama", "FAISS", "LangChain", "Vector Database", "PDF Processing"],
    githubUrl: "#"
  },
  {
    title: "TEXTIFY OCR Tools",
    description: "High-performance OCR solution with dual implementations: GPU-powered version using transformer-based GOT-OCR2_0 model with llama-3.3-70b refinement, and CPU-optimized version using PaddleOCR for handwritten text extraction.",
    icon: Scan,
    technologies: ["GOT-OCR2_0", "PaddleOCR", "Transformers", "LLaMA-3.3", "OCR"],
    githubUrl: "#"
  },
  {
    title: "AI Face Detection System",
    description: "Efficient real-time face detection system using OpenCV and Haar Cascade Classifier. Features webcam integration with accurate multi-face detection and bounding box visualization for computer vision applications.",
    icon: Eye,
    technologies: ["OpenCV", "Haar Cascade", "Computer Vision", "Real-time Processing"],
    githubUrl: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-gradient">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative AI/ML solutions showcasing expertise in natural language processing, 
            computer vision, and intelligent system development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`portfolio-card p-6 group relative overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              } animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="skill-tag text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/40 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="portfolio-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">Interested in Collaboration?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on innovative AI/ML projects and contribute to cutting-edge research.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};