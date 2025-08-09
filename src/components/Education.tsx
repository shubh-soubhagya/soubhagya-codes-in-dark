import { GraduationCap, Award, Calendar, MapPin, Users, Presentation } from 'lucide-react';

const education = [
  {
    institution: "AMITY UNIVERSITY",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    location: "Patna, Bihar, India",
    period: "2022 - 2026",
    achievements: [
      "Appointed as Club Representative of AmiKoders under AIKYAM for contributions.",
      "Led an AI/ML Bootcamp, mentoring 100+ juniors in machine learning."
    ],
    type: "university"
  },
  {
    institution: "DAV SCHOOL",
    degree: "Higher Secondary Education",
    location: "Siliguri, West Bengal, India",
    period: "2012 - 2022",
    achievements: [
      "Completed higher secondary education in PCM-CS, developing foundations in Physics, Chemistry, Mathematics, and Computer Science with practical applications."
    ],
    type: "school"
  }
];

const certifications = [
  {
    title: "Intern of the Month Certificate",
    issuer: "Purezza Technologies",
    date: "July 2024",
    icon: Award
  },
  {
    title: "Deep Learning Course Certificate",
    issuer: "Scaler Academy",
    date: "Jan 2024",
    icon: Award
  },
  {
    title: "Machine Learning Summer Training Certificate",
    issuer: "Analytics Vidhya",
    date: "Oct 2023",
    icon: Award
  },
  {
    title: "Data Science Internship Certificate",
    issuer: "CodersCave",
    date: "Sept 2023",
    icon: Award
  },
  {
    title: "Data Analytics Certificate",
    issuer: "CISCO",
    date: "July 2023",
    icon: Award
  },
  {
    title: "Artificial Intelligence of Things Apprenticeship Certificate",
    issuer: "CodroidHub Ltd.",
    date: "Jun 2023",
    icon: Award
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-gradient">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning journey in computer science and artificial intelligence.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="portfolio-card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-2">{edu.institution}</h4>
                    <p className="text-lg text-primary font-semibold mb-3">{edu.degree}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {edu.type === 'university' && (
                    <div className="lg:w-48 grid grid-cols-2 gap-4 text-center">
                      <div className="bg-primary/10 rounded-lg p-4">
                        <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary">100+</div>
                        <div className="text-sm text-muted-foreground">Mentored</div>
                      </div>
                      <div className="bg-accent/10 rounded-lg p-4">
                        <Presentation className="h-6 w-6 text-accent mx-auto mb-2" />
                        <div className="text-2xl font-bold text-accent">AI/ML</div>
                        <div className="text-sm text-muted-foreground">Bootcamp</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Certifications & Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="portfolio-card p-6 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                  <cert.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h4 className="font-semibold text-foreground mb-2 leading-tight">
                  {cert.title}
                </h4>
                
                <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                
                <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-3 w-3" />
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};