
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import CaseStudyModal from '../components/CaseStudyModal';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="work" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">Work Showcase</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6">Proven <br /><span className="gradient-text">Excellence.</span></h2>
            <p className="text-neutral-500 text-lg leading-relaxed">
              Real solutions delivering measurable impact. From saving lives in emergency services to transforming healthcare communication and streamlining complex operations.
            </p>
          </div>
        </div>

        {/* Robust Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PROJECTS.filter(p => p.id !== 'terraform').map((project, idx) => {
            const isFeatured = idx === 0;
            return (
              <div
                key={project.id}
                className={`${isFeatured ? 'md:col-span-2' : 'col-span-1'} flex flex-col group cursor-pointer h-full`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-[2.5rem] mb-6 glass border border-white/5 aspect-video w-full flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                    <span className="bg-white text-black px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider">
                      Read Case Study
                    </span>
                  </div>

                  {isFeatured && (
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1 rounded-full bg-brand text-white text-[10px] font-black uppercase tracking-widest shadow-lg">Featured Project</span>
                    </div>
                  )}
                </div>

                <div className="px-2">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-brand text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                    <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
                    <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">{project.industry}</span>
                  </div>
                  <h3 className={`${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold mb-3 group-hover:text-brand transition-colors`}>
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="glass p-8 md:p-12 rounded-[3rem] border border-white/5 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h4 className="text-2xl font-bold mb-2">Ready to start your project?</h4>
              <p className="text-neutral-500">Let's discuss how we can help transform your vision into reality.</p>
            </div>
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="whitespace-nowrap px-8 py-4 bg-white text-black font-black rounded-full hover:bg-brand hover:text-white transition-all text-xs uppercase tracking-widest cursor-pointer"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;
