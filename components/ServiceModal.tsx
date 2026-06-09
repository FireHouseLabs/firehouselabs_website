
import React from 'react';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative glass w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-white/10 shadow-2xl animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-brand flex items-center justify-center transition-colors group z-10"
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>

        <div className="p-8 md:p-16">
          <div className="flex items-center space-x-6 mb-10">
            <div className="w-20 h-20 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center text-5xl">
              {service.icon}
            </div>
            <div>
              <span className="text-brand font-black uppercase tracking-widest text-xs mb-2 block">Service Detail</span>
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                {service.title}
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Overview</h3>
                <p className="text-neutral-300 text-lg leading-relaxed">
                  {service.fullDescription || service.description}
                </p>
              </div>

              {service.features && (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">Core Capabilities</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3 text-neutral-400">
                        <span className="text-brand mt-1">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              {service.benefits && (
                <div className="glass p-8 rounded-3xl border border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Business Benefits</h4>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center space-x-3 text-sm font-medium">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="bg-brand-gradient p-8 rounded-3xl shadow-xl shadow-brand/20">
                <h4 className="text-white font-black mb-4">Ready to accelerate?</h4>
                <p className="text-white/80 text-sm mb-6">Let's discuss how our expertise in {service.title.toLowerCase()} can transform your vision.</p>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    onClose();
                    const element = document.getElementById('contact');
                    if(element) element.scrollIntoView({behavior: 'smooth'});
                  }} 
                  className="block w-full text-center py-4 bg-white text-black rounded-2xl font-black hover:opacity-90 transition-all text-sm uppercase tracking-wider"
                >
                  Get a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
