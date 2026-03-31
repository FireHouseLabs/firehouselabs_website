
import React from 'react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  // Helper function to parse bold markdown (**text**) and convert to JSX
  const parseBoldText = (text: string): React.ReactNode => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className="font-bold text-white">{part.slice(2, -2)}</strong>;
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative glass w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-white/10 shadow-2xl animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-brand flex items-center justify-center transition-colors group"
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>

        <div className="p-8 md:p-16">
          <div className="flex flex-wrap gap-3 mb-6">
             <span className="px-4 py-1 rounded-full bg-brand/20 border border-brand/40 text-brand text-xs font-bold uppercase tracking-widest">{project.industry}</span>
             <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest">{project.category}</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight">
            {project.title}
          </h2>

          <img src={project.image} alt={project.title} className="w-full h-[300px] md:h-[500px] object-cover rounded-3xl mb-12 border border-white/5" />

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-invert prose-orange max-w-none">
              {project.fullCaseStudy ? (
                <div className="space-y-8 text-neutral-300">
                  {project.fullCaseStudy.split('\n\n').map((para, i) => {
                    if (para.startsWith('## ')) {
                      return <h3 key={i} className="text-2xl font-bold text-white mt-8">{parseBoldText(para.replace('## ', ''))}</h3>;
                    }
                    if (para.startsWith('### ')) {
                      return <h4 key={i} className="text-xl font-bold text-orange-500 mt-6">{parseBoldText(para.replace('### ', ''))}</h4>;
                    }
                    if (para.startsWith('- ')) {
                      return (
                        <ul key={i} className="list-disc pl-5 space-y-3">
                          {para.split('\n').map((item, j) => {
                            if (item.startsWith('- ')) {
                              return <li key={j} className="text-neutral-300">{parseBoldText(item.replace('- ', ''))}</li>;
                            }
                            return null;
                          })}
                        </ul>
                      );
                    }
                    return <p key={i} className="leading-relaxed text-lg">{parseBoldText(para)}</p>;
                  })}
                </div>
              ) : (
                <p className="text-lg text-neutral-400">{project.description}</p>
              )}
            </div>

            <div className="space-y-8">
              <div className="glass p-8 rounded-3xl border border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Client</h4>
                <p className="text-xl font-bold">{project.client}</p>
              </div>
              <div className="glass p-8 rounded-3xl border border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Challenge</h4>
                <p className="text-sm leading-relaxed text-neutral-400">Manual review of incident reports could take weeks, delaying critical learning opportunities.</p>
              </div>
              <a href="#contact" onClick={onClose} className="block w-full text-center py-5 bg-brand-gradient rounded-2xl font-black hover:opacity-90 transition-all shadow-lg shadow-brand/20">
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
