
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import CaseStudyModal from '../components/CaseStudyModal';
import SEO from '../components/SEO';
import { Project } from '../types';

const BusinessPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const caseStudyProjects = PROJECTS.filter(p => p.id === 'terraform' || p.id === 'kaishan-hub');

  const offerings = [
    "Internal CRMs, dashboards, or admin portals",
    "No-API integrations between legacy systems",
    "Workflow automation to reduce manual work",
    "Custom reporting or data pipelines"
  ];

  const whyUs = [
    "Custom-built to your exact workflows",
    "Experience working with legacy and clunky systems",
    "Based in Australia — responsive and accountable",
    "Ideal for trade, professional services, compliance, logistics, etc."
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Business Automation & Internal Tools"
        description="We help growing businesses eliminate double-handling, automate admin, and connect tools — even when there's no API. Custom software built for your workflows."
      />
      {/* Hero */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mb-24">
            <div className="animate-fade-in-up">
              <span className="text-brand font-bold tracking-widest text-sm uppercase mb-6 block">Internal Automation Tools</span>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-8">
                Custom Automation Tools for <br />
                <span className="gradient-text">Growing Businesses</span>
              </h1>
              <p className="text-neutral-400 text-xl leading-relaxed max-w-3xl">
                We help you eliminate double-handling, automate admin, and connect tools — even when there's no API.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Teams */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              For Teams Who've <span className="text-brand">Outgrown Spreadsheets</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              You're running a business, but your systems don't talk to each other. We build tools that bridge the gaps between your people, processes, and platforms.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-12">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-brand/40 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <p className="text-white font-medium text-base leading-relaxed">
                  {offering}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">Proven Results</span>
            <h2 className="text-3xl md:text-5xl font-black">
              Case <span className="gradient-text">Studies</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudyProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="glass p-10 md:p-12 rounded-[3rem] border border-white/5 hover:border-brand/40 transition-all duration-500 group cursor-pointer"
              >
                <h3 className="text-2xl md:text-3xl font-black mb-6 group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="pt-6 border-t border-white/5 flex items-center text-xs font-black uppercase tracking-widest text-brand group-hover:translate-x-2 transition-transform">
                  Learn More <span className="ml-2">&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-12">
            Why Work <span className="gradient-text">With Us?</span>
          </h2>
          <div className="glass p-10 md:p-12 rounded-[3rem] border border-white/5">
            <div className="grid md:grid-cols-2 gap-8">
              {whyUs.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-brand/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand text-sm">✓</span>
                  </div>
                  <p className="text-neutral-300 text-lg leading-relaxed">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass p-10 md:p-16 rounded-[3rem] border border-brand/20 text-center bg-gradient-to-br from-brand/5 to-transparent">
              <h3 className="text-3xl md:text-4xl font-black mb-6">
                Ready to Streamline Your Operations?
              </h3>
              <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
                Let's talk about your workflow and how we can help you work smarter, not harder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-brand-gradient text-white px-10 py-4 rounded-full font-black text-base hover:shadow-2xl hover:shadow-brand/40 transition-all text-center"
                >
                  Let's Talk About Your Workflow
                </Link>
                <Link
                  to="/contact"
                  className="glass border border-white/20 text-white px-10 py-4 rounded-full font-black text-base hover:bg-white/10 transition-all text-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default BusinessPage;
