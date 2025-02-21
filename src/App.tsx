import React from 'react';
import { Download, Eye, Github, Mail, Phone, MapPin, ExternalLink, Briefcase, GraduationCap, Code, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/username/project1'
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    tech: ['Python', 'Django', 'PostgreSQL'],
    github: 'https://github.com/username/project2'
  }
];

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 
  'Python', 'Java', 'SQL', 'MongoDB',
  'Git', 'Docker', 'AWS', 'Salesforce'
];

const workExperience = [
  {
    title: "Salesforce Administrator/Developer",
    company: "Capital One",
    period: "July 2024 - Present",
    location: "Boston, MA",
    technologies: ["Apex", "LWC", "SOQL", "Einstein Analytics", "Salesforce Flow"],
    achievements: [
      "Developed Personalized Financial Advisory System improving engagement by 25%",
      "Automated loan workflows, reducing manual interventions by 40%",
      "Integrated external APIs, enhancing decision-making accuracy by 20%",
      "Led legacy CRM migration, ensuring 100% data integrity"
    ]
  },
  {
    title: "Salesforce Developer",
    company: "Accenture",
    period: "March 2022 - August 2023",
    location: "Hyderabad, India",
    technologies: ["LWC", "SOQL", "Apex", "Salesforce Lightning", "Copado"],
    achievements: [
      "Developed Customer Dashboard, boosting operational efficiency by 25%",
      "Implemented automated testing framework reducing QA time by 40%",
      "Optimized data synchronization processes improving performance by 30%"
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Network Background */}
      <div className="network-background">
        <div className="network-grid"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="logo">PK</a>
            <div className="flex items-center space-x-1">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#education" className="nav-link">Education</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#certifications" className="nav-link">Certifications</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center space-y-8 z-10">
          <h1 className="text-6xl sm:text-7xl font-bold text-white">
            Pavan Kumar Kuruva
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-300">
            Salesforce Developer | Full Stack Developer
          </h2>
          <div className="pt-8 flex justify-center gap-4">
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="view-button"
            >
              <Eye className="w-5 h-5" />
              View Resume
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="download-button"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container relative z-10">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-lg text-gray-300">
              I am a passionate Software Developer with expertise in Salesforce and Full Stack Development.
              With a strong foundation in both front-end and back-end technologies, I create scalable
              and efficient solutions that drive business value.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
              alt="Profile"
              className="rounded-lg w-64 h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-container relative z-10">
        <h2 className="section-title flex items-center justify-center gap-3">
          <GraduationCap className="w-8 h-8 text-purple-500" />
          Education
        </h2>
        <div className="space-y-8">
          <div className="card">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
                  <p className="text-gray-400">University of Technology • Boston, MA</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">2016 - 2020</p>
                  <p className="text-blue-400">GPA: 3.8/4.0</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-300">Related Coursework</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="tech-badge">Data Structures</span>
                  <span className="tech-badge">Algorithms</span>
                  <span className="tech-badge">Database Systems</span>
                  <span className="tech-badge">Web Development</span>
                  <span className="tech-badge">Cloud Computing</span>
                  <span className="tech-badge">Software Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-container relative z-10">
        <h2 className="section-title flex items-center justify-center gap-3">
          <Briefcase className="w-8 h-8 text-purple-500" />
          Work Experience
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-purple-500/30"></div>
          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <div key={index} className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className={`card ml-[50%] relative ${index % 2 === 0 ? 'mr-8' : 'mr-0'}`}>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-400">{job.company} | {job.period} | {job.location}</p>
                  <div className="mt-3">
                    <div className="flex items-center gap-2 text-blue-400">
                      <Code className="w-4 h-4" />
                      {job.technologies.join(', ')}
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container relative z-10">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container relative z-10">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="card">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 my-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container relative z-10">
        <h2 className="section-title">Contact</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white">
                your.email@example.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-400" />
              <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">
                Your Location
              </span>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="input-field"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="input-field"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Message"
                className="input-field"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;