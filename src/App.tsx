import React from 'react';
import { Github, Linkedin, Mail, Download, Phone, ExternalLink, Code, TestTube, Bug, Server, Database, PenTool as Tool,MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-[#0a192f] to-[#0a192f] animate-pulse"></div>
        <div className="stars"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm z-50 border-b border-blue-900/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text hover:scale-105 transition">
              Venkatesh
            </a>
            <div className="space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition">About</a>
              <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
              <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
              <a href="#education" className="hover:text-cyan-400 transition">Education</a>
              <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold mb-4">
                <span className="block text-cyan-400">Hi, I'm Venkatesh Prasad Gowd G R</span>
                <span className="block mt-2">QA Engineer</span>
              </h1>
              <p className="text-xl text-gray-400">
                Experienced QA Engineer specializing in Playwright automation testing with expertise in BDD Framework,
                API testing, and continuous integration. Passionate about ensuring software quality and delivering
                exceptional user experiences.
              </p>
              <div className="flex space-x-4">
                <a href="#contact" className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition transform hover:scale-105">
                  Contact Me
                </a>
                <a
                  href="/path-to-your-resume.pdf"
                  download="public\Venkatesh_prasad__QA.pdf"
                  className="border border-cyan-500 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition transform hover:scale-105 flex items-center gap-2"
                >
                  <Download size={20} />
                  Resume
                </a>

              </div>
            </div>
            <div className="relative">
              <img
                src="public\profile.JPG"
                alt="Profile"
                className="rounded-full w-80 h-80 object-cover mx-auto border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/30 animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-navy-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-400 leading-relaxed">
              As a dedicated QA Engineer with extensive experience in Manual End-to-End activities like test plan preparation,
              Test case designing,Bug reporting and Bug tracking,and Expertise in automated testing, I specialize in creating
              robust test frameworks using Playwright and JavaScript using Mocha. My expertise includes BDD Framework implementation,
              API testing with Postman and Playwright, and CI/CD integration using Jenkins. I'm passionate about maintaining high
              quality standards and implementing efficient testing processes.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Experience</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="hidden md:block">
              <img
                src="public\asd.png"
                alt="Quality Assurance"
                className="rounded-lg"
              />
            </div>
            <div className="space-y-8">
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-cyan-500 before:to-blue-500">
                <div className="bg-navy-800 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                  <h3 className="text-xl font-bold text-cyan-400">QA Automation Engineer</h3>
                  <p className="text-gray-400">September <b>2023</b> - Present</p>
                  <p className="mt-4">Collaborated with development and customer teams, worked on
                 handled bugs, groomed backlog, understood requirements, performed manual and automated testing using JavaScript, 
                 Playwright, and Cucumber. Experienced in BDD, data-driven testing, cross-browser testing, parallel execution, and API testing.
                developed and debugged test scripts, and contributed to issue resolution.</p>
                <div className="flex gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/20  rounded-full text-sm">Playwright</span>
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/20 rounded-full text-sm">Javascript</span>
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/20 rounded-full text-sm">Mocha</span>
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/20 rounded-full text-sm">Node.js</span>
              </div>
                </div>
              </div>
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-purple-500">
                <div className="bg-navy-800 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                  <h3 className="text-xl font-bold text-blue-400">Manual Test Engineer</h3>
                  <p className="text-gray-400">May <b>2023</b> - Present</p>
                  <p className="mt-4">Involved in all SDLC phases, participated in agile ceremonies,
                 designed test plans and cases, prepared bug reports, monitored front-end and back-end, 
                 reviewed peer test cases, assessed functional requirements, followed up on defects,
                  attended project meetings, and triaged test failures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-navy-800/30 overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Skills</h2>
          <div className="relative">
            <div className="flex space-x-6 animate-marquee">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex space-x-6">
                  {[
                    { name: 'Manual Testing', icon: <TestTube className="w-6 h-6" /> },
                    { name: 'Automation Testing', icon: <Code className="w-6 h-6" /> },
                    { name: 'Cypress', icon: <Bug className="w-6 h-6" /> },
                    { name: 'Mocha', icon: <TestTube className="w-6 h-6" /> },
                    { name: 'BDD Framework', icon: <Tool className="w-6 h-6" /> },
                    { name: 'JavaScript', icon: <Code className="w-6 h-6" /> },
                    { name: 'Postman', icon: <Server className="w-6 h-6" /> },
                    { name: 'Playwright', icon: <Bug className="w-6 h-6" /> },
                    { name: 'API Testing', icon: <Database className="w-6 h-6" /> },
                    { name: 'Node.js', icon: <Server className="w-6 h-6" /> },
                    { name: 'Jenkins', icon: <Tool className="w-6 h-6" /> },
                    { name: 'HTML', icon: <Code className="w-6 h-6" /> },
                    { name: 'CSS', icon: <Code className="w-6 h-6" /> },
                    { name: 'GitHub', icon: <Server className="w-6 h-6" /> },
                    { name: 'MySQL', icon: <Database className="w-6 h-6" /> },
                    { name: 'C Language', icon: <Code className="w-6 h-6" /> }
                  ].map((skill, index) => (
                    <div key={index} className="flex-none bg-navy-800 p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 group w-44">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="text-cyan-400 group-hover:text-cyan-300 transition">
                          {skill.icon}
                        </div>
                        <h3 className="text-sm font-semibold text-center">{skill.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  
     {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-800 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">E-commerce Testing Suite</h3>
              <p className="text-gray-300 mb-4">Conducted end-to-end manual testing for an online marketplace buying and selling 
                construction tools,Safety kits. Verified functionality, usability, and security, reported bugs,
                 and ensured smooth user experience. Collaborated with developers and stakeholders to improve application quality.
              </p>
              <div className="flex  gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 rounded-full border border-cyan-500/20 text-sm">Functional Testing</span>
                <span className="px-3 py-1 bg-cyan-500/20 rounded-full border border-cyan-500/20 text-sm">Smoke testing</span>
                <span className="px-3 py-1 bg-cyan-500/20 rounded-full border border-cyan-500/20 text-sm">integration Testing</span>
              </div>
            </div>
            <div className="bg-navy-800 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">API Testing Framework</h3>
              <p className="text-gray-300 mb-4">Experienced in API testing using Postman and Playwright for both manual 
                and automated testing. Skilled in validating request-response, status codes, headers, and payloads.
                 Proficient in automating API tests, data-driven testing.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/20 rounded-full text-sm">Postman</span>
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/20 rounded-full text-sm">Playwright</span>
              </div>
            </div>
            <div className="bg-navy-800 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Social Media Webiste</h3>
              <p className="text-gray-300 mb-4">Worked on a community-driven platform for pet adoption and discussions. Conducted manual and 
                automated testing, validating UI/UX, API responses, and user interactions. Ensured seamless user experience through
                 rigorous functional and regression testing.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/20  rounded-full text-sm">Playwright</span>
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/20 rounded-full text-sm">Javascript</span>
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/20 rounded-full text-sm">Mocha</span>
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/20 rounded-full text-sm">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>
 {/* Test Metrics Section */}
 <section className="py-20 bg-navy-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Test Metrics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-800 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">150+</h3>
                <p className="text-gray-300">Test Cases Automated</p>
              </div>
              <div className="mt-4 text-gray-400 text-sm">
                <ul className="list-disc list-inside space-y-2">
                  <li>End-to-end test scenarios</li>
                  <li>Integration test cases</li>
                  <li>API test automation</li>
                </ul>
              </div>
            </div>
            <div className="bg-navy-800 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">300+</h3>
                <p className="text-gray-300">Bugs Reported</p>
              </div>
              <div className="mt-4 text-gray-400 text-sm">
                <ul className="list-disc list-inside space-y-2">
                  <li>Critical issues identified</li>
                  <li>UI/UX improvements</li>
                  <li>Performance bottlenecks</li>
                </ul>
              </div>
            </div>
            <div className="bg-navy-800 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">95%</h3>
                <p className="text-gray-300">Test Coverage</p>
              </div>
              <div className="mt-4 text-gray-400 text-sm">
                <ul className="list-disc list-inside space-y-2">
                  <li>Functional coverage</li>
                  <li>Code coverage</li>
                  <li>Risk-based testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Education</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-cyan-500 before:to-blue-500">
                <div className="bg-navy-800 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                  <h3 className="text-xl font-bold text-cyan-400">B.Tech in Electronics and Communication</h3>
                  <p className="text-lg">Annamacharya Institute Of Technologies And Sciences</p>
                  <p className="text-gray-400">GPA: 6.96</p>
                </div>
              </div>
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:to-purple-500">
                <div className="bg-navy-800 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                  <h3 className="text-xl font-bold text-blue-400">Intermediate</h3>
                  <p className="text-lg">Narayana Jr College</p>
                  <p className="text-gray-400">GPA: 8.6</p>
                </div>
              </div>
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-purple-500 before:to-pink-500">
                <div className="bg-navy-800 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                  <h3 className="text-xl font-bold text-purple-400">School</h3>
                  <p className="text-lg">Matha English Medium High School</p>
                  <p className="text-gray-400">GPA: 7.5</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="public\qwe.png"
                alt="Education Journey"
                className="rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-navy-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Get In Touch</h2>
          <div className="max-w-xl mx-auto text-center">
            <div className="space-y-4 mb-8">
              <p className="flex items-center justify-center gap-2 text-lg">
                <Phone className="text-cyan-400" />
                <a href="tel:9390531191" className="hover:text-cyan-400 transition">+91 8431102445</a>
              </p>
              <p className="flex items-center justify-center gap-2 text-lg">
                <Mail className="text-cyan-400" />
                <a href="mailto:venkateshprasad.qa@gmail.com" className="hover:text-cyan-400 transition">venkateshgowda.qa@gmail.com</a>
              </p>
            </div>
            <div className="flex justify-center space-x-8">
              <a href="https://github.com/VenkateshPrasad18" className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110">
                <Github size={28} />
              </a>
              <a href="www.linkedin.com/in/venkatesh-prasad-gowd" className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110">
                <Linkedin size={28} />
              </a>
            </div>
            <br></br>
            <div className="flex items-center justify-center gap-2 mb-4">
        <MapPin className="text-cyan-400" size={20} />
        <span className="text-gray-400">Bangalore, India</span>
      </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Venkatesh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;