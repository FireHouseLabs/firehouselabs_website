
import React, { useState } from 'react';
import { consultProject } from '../services/geminiService';
import { ConsultationResponse } from '../types';

const AIConsultant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ConsultationResponse | null>(null);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const data = await consultProject(prompt);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Consultation failed. Our AI is currently in a fire drill. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultant" className="py-24 bg-neutral-900 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-brand font-bold tracking-widest text-sm uppercase">Innovation Engine</span>
          <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">AI Project Strategist</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Get an instant architectural preview. Our Gemini-powered strategist maps out your project's technology stack and timeline based on your vision.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass p-8 md:p-12 rounded-[3rem] border border-white/10 fire-glow relative overflow-hidden">
             {/* Decorative background for the card */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10"></div>
            
            {!result ? (
              <form onSubmit={handleConsult} className="space-y-6">
                <div>
                  <label className="block text-sm font-black uppercase tracking-widest text-neutral-500 mb-4">Project Vision</label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., A secure real-time dispatch platform for rural fire services incorporating satellite telemetry..."
                    className="w-full bg-black/40 border border-white/10 rounded-3xl p-6 text-white focus:outline-none focus:ring-2 focus:ring-brand min-h-[180px] transition-all text-lg placeholder:text-neutral-700"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-gradient hover:opacity-90 text-white font-black py-5 rounded-2xl transition-all flex items-center justify-center space-x-2 disabled:opacity-50 shadow-xl shadow-brand/20 text-lg"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin h-6 w-6 border-3 border-white border-t-transparent rounded-full mr-3"></div>
                      <span>Synthesizing Strategy...</span>
                    </>
                  ) : (
                    <span>Generate Technical Roadmap</span>
                  )}
                </button>
              </form>
            ) : (
              <div className="space-y-10 animate-fade-in-up">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-black uppercase tracking-widest mb-4">Analysis Complete</div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4">Consultant Summary</h3>
                  <p className="text-neutral-300 leading-relaxed text-lg">{result.summary}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-neutral-500">Phased Roadmap</h4>
                    <div className="space-y-6">
                      {result.roadmap.map((phase, idx) => (
                        <div key={idx} className="relative pl-6">
                          <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-brand"></div>
                          <p className="font-black text-white text-sm mb-2">{phase.phase}</p>
                          <ul className="space-y-1">
                            {phase.tasks.map((task, tidx) => (
                              <li key={tidx} className="text-xs text-neutral-400">{task}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-neutral-500">Proposed Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {result.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm text-brand font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 p-6 glass rounded-2xl border border-brand/20">
                      <p className="text-xs text-neutral-400 leading-relaxed italic">
                        "This roadmap represents a Firehouse Labs approach—focused on safety, reliability, and extreme performance."
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => { setResult(null); setPrompt(''); }}
                  className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black py-5 rounded-2xl transition-all uppercase tracking-widest text-xs"
                >
                  Start New Analysis
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
