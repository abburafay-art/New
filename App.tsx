
import React, { useState, useEffect } from 'react';
import { PERSONAL_DETAILS, SOFT_SKILLS, TOOLS, PROJECTS } from './constants';
import { SectionHeader } from './components/SectionHeader';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <span className="font-poppins font-bold text-xl tracking-tight text-zinc-900 uppercase">
            AR<span className="text-zinc-400">.</span>
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="#skills" className="hover:text-zinc-900 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#workflow" className="hover:text-zinc-900 transition-colors">Workflow</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-32">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col md:flex-row items-center gap-12 py-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 bg-zinc-100 rounded-full text-xs font-semibold text-zinc-500 tracking-wider uppercase">
              Available for Internships
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 leading-[1.1]">
              {PERSONAL_DETAILS.name}
            </h1>
            <p className="text-xl text-zinc-500 font-medium font-poppins">
              {PERSONAL_DETAILS.degree} · {PERSONAL_DETAILS.college}
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#contact" className="px-6 py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-all">
                Get in Touch
              </a>
              <a href="#projects" className="px-6 py-3 border border-zinc-200 text-zinc-600 rounded-lg font-medium hover:bg-zinc-50 transition-all">
                View Projects
              </a>
            </div>
          </div>
          <div className="w-64 h-64 md:w-80 md:h-80 bg-zinc-200 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-xl">
            <img 
              src={`https://picsum.photos/seed/${PERSONAL_DETAILS.name}/400/400`} 
              alt={PERSONAL_DETAILS.name}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="scroll-mt-32">
          <SectionHeader title="About Me" />
          <div className="bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 shadow-sm">
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed italic">
              "{PERSONAL_DETAILS.about}"
            </p>
            <div className="mt-8 flex flex-wrap gap-8 text-sm">
              <div>
                <span className="block text-zinc-400 font-medium uppercase tracking-widest text-[10px] mb-1">Education</span>
                <span className="text-zinc-900 font-semibold">{PERSONAL_DETAILS.degree}</span>
              </div>
              <div>
                <span className="block text-zinc-400 font-medium uppercase tracking-widest text-[10px] mb-1">Institution</span>
                <span className="text-zinc-900 font-semibold">{PERSONAL_DETAILS.college}</span>
              </div>
              <div>
                <span className="block text-zinc-400 font-medium uppercase tracking-widest text-[10px] mb-1">Location</span>
                <span className="text-zinc-900 font-semibold">Hyderabad, India</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Tools Section */}
        <section id="skills" className="scroll-mt-32 grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeader title="Professional Attributes" subtitle="Foundational soft skills that drive my growth." />
            <div className="grid gap-4">
              {SOFT_SKILLS.map((skill, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-zinc-100 hover:border-zinc-300 transition-all shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-zinc-900 mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">{skill.name}</h4>
                    <p className="text-sm text-zinc-500">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader title="Tools & Technologies" subtitle="A modern stack for efficient workflows." />
            <div className="grid grid-cols-2 gap-4">
              {TOOLS.map((tool, i) => (
                <div key={i} className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/50 flex flex-col justify-between hover:bg-white transition-colors">
                  <span className="text-sm font-bold text-zinc-900 mb-1">{tool.name}</span>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-tighter">{tool.category}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${tool.proficiency === 'Proficient' ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-zinc-600'}`}>
                      {tool.proficiency}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-32">
          <SectionHeader title="Learning Projects" subtitle="Practical demonstrations of my technical agility." />
          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <div key={i} className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-zinc-100 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${project.title}/400/200`} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-zinc-500 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, ti) => (
                      <span key={ti} className="px-2 py-1 bg-zinc-50 text-zinc-400 text-[10px] font-bold rounded border border-zinc-100 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Assisted Workflow Section */}
        <section id="workflow" className="scroll-mt-32">
          <div className="bg-zinc-900 text-white rounded-[2rem] p-10 md:p-20 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">AI-Assisted Workflow</h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-10">
                I leverage modern AI tools to amplify my productivity and learning. By treating AI as a collaborative partner, I can structure complex information, troubleshoot technical hurdles, and rapidly prototype ideas. 
              </p>
              
              <div className="grid gap-6">
                {[
                  { title: "Strategic Prompting", desc: "Using advanced prompting techniques to generate structured project outlines and learning roadmaps." },
                  { title: "Modern Productivity", desc: "Utilizing AI-native platforms like Lovable and Replit to bridge the gap between concept and code." },
                  { title: "Continuous Learning", desc: "Using AI to break down complex commerce or IT concepts into digestible learning modules." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-zinc-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-800/50 to-transparent pointer-events-none hidden md:block"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-zinc-800 rounded-full blur-3xl opacity-50"></div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32 pb-20">
          <SectionHeader title="Connect with Me" subtitle="Let's discuss how I can contribute to your team." />
          <div className="grid md:grid-cols-3 gap-8">
            <a href={`mailto:${PERSONAL_DETAILS.email}`} className="group p-8 border border-zinc-200 rounded-2xl bg-white hover:border-zinc-900 transition-all text-center">
              <div className="mb-4 text-zinc-400 group-hover:text-zinc-900 transition-colors uppercase text-[10px] font-bold tracking-widest">Email</div>
              <div className="text-lg font-bold text-zinc-900">{PERSONAL_DETAILS.email}</div>
            </a>
            <div className="group p-8 border border-zinc-200 rounded-2xl bg-white hover:border-zinc-900 transition-all text-center">
              <div className="mb-4 text-zinc-400 group-hover:text-zinc-900 transition-colors uppercase text-[10px] font-bold tracking-widest">Phone</div>
              <div className="text-lg font-bold text-zinc-900">{PERSONAL_DETAILS.phone}</div>
            </div>
            <a href={`https://${PERSONAL_DETAILS.github}`} target="_blank" rel="noopener noreferrer" className="group p-8 border border-zinc-200 rounded-2xl bg-white hover:border-zinc-900 transition-all text-center">
              <div className="mb-4 text-zinc-400 group-hover:text-zinc-900 transition-colors uppercase text-[10px] font-bold tracking-widest">GitHub</div>
              <div className="text-lg font-bold text-zinc-900">{PERSONAL_DETAILS.github}</div>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-10 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} {PERSONAL_DETAILS.name}. Built with Modern AI Workflows.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>Clean</span>
             <span>Minimal</span>
             <span>Honest</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
