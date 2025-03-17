import React from 'react';
import { Download, Eye, Github, Mail, Phone, MapPin, ExternalLink, Briefcase, GraduationCap, Code, CheckCircle2 } from 'lucide-react';

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

const projects = [
  {
    title: 'AI-Powered Inventory Management System',
    description: 'Developed an intelligent inventory system using TensorFlow, reducing holding costs by 20%. Built real-time dashboards with React and deployed on Google Cloud Platform with CI/CD pipelines.',
    tech: ['React', 'Python', 'TensorFlow', 'Google Cloud'],
    github: 'https://github.com/username/inventory-management'
  },
  {
    title: 'Vowel Onset Point Detection Using Spectral Evidence',
    description: 'Developed a vowel onset point (VOP) detection system crucial for speech processing applications such as automatic speech recognition and speaker identification. Implemented signal processing techniques using MATLAB and Python, leveraging spectral analysis and Librosa for feature extraction.',
    tech: ['MATLAB', 'Python', 'Librosa', 'NumPy', 'SciPy'],
    github: 'https://github.com/username/vop-detection'
  }
];

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 
  'Python', 'Java', 'SQL', 'MongoDB',
  'Git', 'Docker', 'AWS', 'Matlab'
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
            <a href="/" className="logo">SR</a>
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
            Saneeth Reddy Etikala
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-300">
            Electrical And Computer Engineering
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
            Motivated Electrical and Computer Engineering graduate with expertise in embedded systems, data analytics, ML, and software development. Experienced in teaching, research, and industry projects, with skills in MATLAB, Python, C, and Verilog. Seeking a full-time role to apply technical, problem-solving, and research skills in engineering, software development, or data science.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://raw.githubusercontent.com/Saneeth93/Saneeth_Portfolio/refs/heads/main/public/images/profile.png"
              alt="Profile"
              className="rounded-lg w-84 h-64 object-cover"
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
            <h3 className="text-xl font-semibold">Master of Science in Electrical and Computer Engineering</h3>
            <p className="text-gray-400">University of New Mexico • Albuquerque, NM</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400">Feb 2023 - Dec 2023</p>
            <p className="text-blue-400">CGPA: 3.9/4.0</p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-medium text-gray-300">Related Coursework</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="tech-badge">Microprocessor System Design</span>
            <span className="tech-badge">Computer Architecture</span>
            <span className="tech-badge">Reinforcement Learning</span>
            <span className="tech-badge">IoT</span>
            <span className="tech-badge">Machine Learning</span>
            <span className="tech-badge">Cybersecurity</span>
            <span className="tech-badge">Computer Networks</span>
            <span className="tech-badge">Advanced Computer Architecture</span>
            <span className="tech-badge">Digital Signal Processing</span>
            <span className="tech-badge">Signals and Systems</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Work Experience Section */}
<section id="experience" className="section-container relative z-10">
  <h2 className="section-title flex items-center justify-center gap-3">
    <Briefcase className="w-8 h-8 text-purple-500" />
    Work Experience
  </h2>
  <div className="relative">
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-purple-500/30"></div>
    <div className="space-y-32">
      {/* Graduate Apprenticeship - University of New Mexico */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-4">
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="card w-[calc(50%-2rem)] mr-[50%]">
          <h3 className="text-xl font-semibold">Graduate Apprenticeship</h3>
          <p className="text-gray-400">University of New Mexico | Jan 2024 – Present | Albuquerque, NM</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Planned and presented lectures and activities on MATLAB and Python, utilizing speed grader for efficient assessment.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Graded assignments and tests, ensuring timely feedback for students.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Designed and maintained course web resources using HTML, CSS, and JavaScript, enhancing accessibility and student engagement.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Developed Python scripts to automate grading and student progress tracking, improving efficiency by 30%.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Teaching Assistant - University of New Mexico */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-4">
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="card w-[calc(50%-2rem)] ml-[50%]">
          <h3 className="text-xl font-semibold">Teaching Assistant</h3>
          <p className="text-gray-400">University of New Mexico | Feb 2023 – Dec 2023 | Albuquerque, NM</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Led lectures and lab sessions for ECE 314L (Signals and Systems) and ECE 130L (Engineering Computing).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Graded assignments and assisted students in MATLAB and speed grading.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Quality Specialist - Amazon Development Centre */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-4">
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="card w-[calc(50%-2rem)] mr-[50%]">
          <h3 className="text-xl font-semibold">Quality Specialist</h3>
          <p className="text-gray-400">Amazon Development Centre | Oct 2021 – Oct 2022 | Hyderabad, India</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Developed and optimized SQL queries in PostgreSQL, reducing query execution time by 45%.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Designed and implemented Python scripts to automate data processing tasks, reducing manual effort by 60%.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Extracted and analyzed large datasets using SQL and Python (Pandas, NumPy), improving decision-making for Amazon Go stores.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* QA Expert - Chegg India */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-4">
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="card w-[calc(50%-2rem)] ml-[50%]">
          <h3 className="text-xl font-semibold">QA Expert (Freelance)</h3>
          <p className="text-gray-400">Chegg India | Mar 2021 – Oct 2021 | Hyderabad, India</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Helped students solve computer science textbook problems using Python and web development.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Worked closely with cross-functional teams, improving deployment efficiency by 15% through Agile methodologies.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <span className="text-gray-300">Optimized problem-solving techniques, reducing solution time by 25% while maintaining accuracy.</span>
            </li>
          </ul>
        </div>
      </div>
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
              <a href="mailto:your.Saneeth9393@gmail.com" className="text-gray-300 hover:text-white">
                Saneeth9393@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-400" />
              <a href="tel:+1 5058104308" className="text-gray-300 hover:text-white">
                +1 (505) 810-4308
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">
                Overland park , Kansas 
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