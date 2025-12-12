import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Download,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Server,
  Database,
  Cloud,
  Layers,
  User,
} from "lucide-react";
import { SiReact, SiNodedotjs, SiTypescript, SiPython, SiJavascript, SiAmazon, SiDocker, SiKubernetes, SiSpringboot, SiGraphql, SiGit } from "react-icons/si";
import heroBackground from "@assets/stock_images/modern_developer_wor_bb16dde8.jpg";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Miller Construction Services",
    location: "Rosedale, Maryland, USA (Remote)",
    period: "September 2023 – Present",
    achievements: [
      "Engineered a full-stack web application using React, Redux and Node.js, enabling employees to manage data and oversee the entire project lifecycle",
      "Increased backend efficiency by 25% using optimized RESTful APIs, lazy loading, and server-side rendering",
      "Boosted application performance by up to 35% using AWS, Docker, and Kubernetes for seamless container orchestration",
      "Built a secure authentication system using Node.js, JWT, and OAuth2.0 for efficient session management",
    ],
  },
  {
    title: "Senior Software Developer",
    company: "Larsen And Toubro Infotech | Client - Scania AB",
    location: "Pune, Maharashtra, India",
    period: "Nov 2021 – Aug 2022",
    achievements: [
      "Developed software solutions for a commercial vehicle manufacturer with React, Next.js, leveraging SSR and routing optimizations",
      "Accelerated UI development by 20%, leading a team of 4 and creating reusable components with Material UI, Redux",
      "Integrated Jenkins for CI/CD, cutting deployment time by 30% on AWS - EC2 and RDS",
    ],
  },
  {
    title: "Software Developer",
    company: "Infosys Private Limited | Client - British Petroleum (BP)",
    location: "Indore, Madhya Pradesh, India",
    period: "June 2020 – Nov 2021",
    achievements: [
      "Optimized REST API calls and SQL queries for a multinational oil and gas company, reducing latency and page load times",
      "Led the transition to a microservices architecture, improving scalability and deployment processes",
      "Boosted application performance by 30% through bug fixes and created test cases using React Testing Library and Jest",
    ],
  },
  {
    title: "Software Developer",
    company: "ILabz Technologies LLP | Client - Syngenta",
    location: "Pune, Maharashtra, India",
    period: "Nov 2019 – Mar 2020",
    achievements: [
      "Enhanced website operations using React and Next.js, improving user experience and engagement",
      "Integrated APIs, reduced load times, and implemented OAuth authentication and advanced routing",
    ],
  },
  {
    title: "Software Developer",
    company: "Yash Technologies Private Limited | Client - Caterpillar, Evertz",
    location: "Indore, Madhya Pradesh, India",
    period: "Sep 2016 - Nov 2018",
    achievements: [
      "Created a Spring Boot application to access graphical data from Neo4j Server using Spring-data-neo4j API",
      "Managed and maintained 50+ RPA bots, improving reliability and error handling",
      "Engineered RPA solutions processing 100,000+ transactions monthly with 99% accuracy",
    ],
  },
];

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: null },
      { name: "HTML5/CSS", icon: null },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Next.js", icon: null },
      { name: "Redux", icon: null },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Angular", icon: null },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Server,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Jenkins", icon: null },
      { name: "RPA - Automation Anywhere", icon: null },
      { name: "RPA - UiPath", icon: null },
    ],
  },
  {
    title: "Cloud & Databases",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: SiAmazon },
      { name: "SQL", icon: Database },
      { name: "EC2", icon: null },
      { name: "RDS", icon: null },
    ],
  },
];

const education = [
  {
    degree: "Masters in Computer Science",
    institution: "University of Maryland, Baltimore County",
    location: "Baltimore, MD, United States",
    period: "Aug 2022 – May 2024",
    coursework: ["Machine Learning and AI", "Advanced Algorithms", "Advanced Operating Systems", "Wireless Sensor Networks"],
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Rajiv Gandhi Technical University",
    location: "Indore, Madhya Pradesh, India",
    period: "June 2012 – May 2016",
    coursework: [],
  },
];

const certifications = [
  {
    name: "Automation Anywhere Master RPA Professional",
    issuer: "Automation Anywhere",
    version: "Version 11.x",
  },
  {
    name: "Advanced RPA Professional",
    issuer: "Automation Anywhere",
    version: "A2019",
  },
  {
    name: "Advanced React & Redux",
    issuer: "Udemy",
    version: "",
  },
];

export default function Home() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with background image */}
      <section className="min-h-screen flex flex-col justify-center relative px-6 pt-16 overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        {/* Dark wash overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70 dark:from-background dark:via-background/95 dark:to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-muted-foreground font-mono text-sm tracking-wide uppercase" data-testid="text-greeting">
                  Hello, I'm
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight" data-testid="text-name">
                  Shashwat Jain
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground font-medium" data-testid="text-title">
                  Senior Software Developer
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl" data-testid="text-intro">
                Building scalable web solutions with React, Node.js & Cloud Technologies.
                8+ years of experience crafting high-performance applications and leading engineering teams.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a href="mailto:shashwatj007@gmail.com" className="flex items-center gap-2 text-muted-foreground transition-colors hover-elevate px-3 py-2 rounded-md" data-testid="link-email">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">shashwatj007@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/shashwat-jain" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground transition-colors hover-elevate px-3 py-2 rounded-md" data-testid="link-linkedin">
                  <Linkedin className="h-4 w-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <span className="flex items-center gap-2 text-muted-foreground px-3 py-2" data-testid="text-phone">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">Available on request</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button size="lg" onClick={() => scrollToSection("#experience")} data-testid="button-view-work">
                  View My Work
                </Button>
                <a href="/api/resume" download="Shashwat_Jain_Resume.pdf">
                  <Button size="lg" variant="outline" data-testid="button-hero-download-resume">
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-2xl">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-card border border-border flex items-center justify-center shadow-inner">
                      <span className="text-6xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">SJ</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center shadow-lg">
                  <SiReact className="h-8 w-8 text-[#61DAFB]" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center shadow-lg">
                  <SiNodedotjs className="h-7 w-7 text-[#339933]" />
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shadow-lg">
                  <SiAmazon className="h-6 w-6 text-[#FF9900]" />
                </div>
                <div className="absolute top-8 -left-6 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-lg">
                  <SiTypescript className="h-5 w-5 text-[#3178C6]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
          aria-label="Scroll down"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <User className="h-8 w-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold" data-testid="heading-about">About Me</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p data-testid="text-about-1">
                I'm a Senior Software Developer with over 8 years of experience building scalable web applications 
                and leading development teams. My expertise spans the full stack, from crafting intuitive user 
                interfaces with React and Next.js to designing robust backend systems with Node.js and Spring Boot.
              </p>
              <p data-testid="text-about-2">
                Currently based in the United States, I hold a Master's degree in Computer Science from the 
                University of Maryland, Baltimore County. I'm passionate about creating efficient, maintainable 
                code and leveraging cloud technologies to build applications that scale.
              </p>
              <p data-testid="text-about-3">
                Throughout my career, I've worked with industry leaders including British Petroleum, Scania AB, 
                and Caterpillar, delivering solutions that improve operational efficiency and drive business value.
              </p>
              <div className="flex items-center gap-2 pt-4 text-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium" data-testid="text-location">United States</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="text-years-exp">8+</div>
                  <div className="text-muted-foreground">Years of Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="text-projects">20+</div>
                  <div className="text-muted-foreground">Projects Delivered</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="text-clients">5+</div>
                  <div className="text-muted-foreground">Enterprise Clients</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with proper timeline */}
      <section id="experience" className="py-20 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold" data-testid="heading-experience">Experience</h2>
          </div>

          {/* Timeline container */}
          <div className="relative">
            {/* Vertical timeline line - centered on desktop */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background z-10 mt-2" />
                  
                  {/* Content card */}
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="overflow-visible" data-testid={`card-experience-${index}`}>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-2 mb-4">
                          <span className="font-mono text-sm text-primary font-medium" data-testid={`text-exp-period-${index}`}>
                            {exp.period}
                          </span>
                          <h3 className="text-xl font-semibold" data-testid={`text-exp-title-${index}`}>{exp.title}</h3>
                          <p className="text-muted-foreground font-medium" data-testid={`text-exp-company-${index}`}>{exp.company}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1" data-testid={`text-exp-location-${index}`}>
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </p>
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex gap-2">
                              <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                              <span data-testid={`text-exp-achievement-${index}-${i}`}>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 lg:py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold" data-testid="heading-skills">Technical Skills</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} data-testid={`card-skills-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold" data-testid={`text-skills-category-${index}`}>{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="px-2.5 py-1 gap-1.5" data-testid={`badge-skill-${index}-${i}`}>
                        {skill.icon && <skill.icon className="h-3 w-3" />}
                        <span className="text-xs">{skill.name}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8" data-testid="card-skills-domain">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold">Industry Knowledge & Domain</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Agile", "Distributed Systems", "Operating Systems", "REST APIs", "Design Patterns", "Finance & Services", "Logistics", "Supply Chain"].map((skill, i) => (
                  <Badge key={i} variant="outline" className="px-3 py-1.5" data-testid={`badge-domain-${i}`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold" data-testid="heading-education">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} data-testid={`card-education-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-7 w-7 text-primary" />
                    </div>
                    <span className="font-mono text-sm text-primary font-medium whitespace-nowrap" data-testid={`text-edu-period-${index}`}>
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1" data-testid={`text-edu-degree-${index}`}>{edu.degree}</h3>
                  <p className="text-muted-foreground font-medium" data-testid={`text-edu-institution-${index}`}>{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1" data-testid={`text-edu-location-${index}`}>
                    <MapPin className="h-3 w-3" />
                    {edu.location}
                  </p>
                  {edu.coursework.length > 0 && (
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Relevant Coursework</p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course, i) => (
                          <Badge key={i} variant="secondary" className="text-xs" data-testid={`badge-course-${index}-${i}`}>
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 lg:py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold" data-testid="heading-certifications">Certifications</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} data-testid={`card-certification-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2" data-testid={`text-cert-name-${index}`}>{cert.name}</h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-cert-issuer-${index}`}>{cert.issuer}</p>
                  {cert.version && (
                    <Badge variant="outline" className="mt-3" data-testid={`text-cert-version-${index}`}>{cert.version}</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2" data-testid="text-footer-title">Let's Connect</h3>
              <p className="text-muted-foreground" data-testid="text-footer-description">
                Open to opportunities and collaborations
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="mailto:shashwatj007@gmail.com"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover-elevate"
                aria-label="Email"
                data-testid="link-footer-email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/shashwat-jain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover-elevate"
                aria-label="LinkedIn"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="/api/resume" download="Shashwat_Jain_Resume.pdf">
                <Button data-testid="button-footer-download-resume">
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </Button>
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p data-testid="text-copyright">{new Date().getFullYear()} Shashwat Jain. All rights reserved.</p>
            <p className="font-mono text-xs">Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
