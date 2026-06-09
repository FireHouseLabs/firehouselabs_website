
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import ServiceModal from '../components/ServiceModal';
import { Service } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
             <span className="text-brand font-bold tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-5xl md:text-7xl font-black mb-6">Built for <br /><span className="text-brand">Impact.</span></h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              We specialise in deep-domain software that solves high-stakes problems. We don't just build apps; we build engines for growth and safety.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className={`glass p-12 rounded-[3rem] border border-white/5 hover:border-brand/40 transition-all duration-500 group animate-fade-in-up delay-${(idx + 1) * 100}`}
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-4xl mb-10 group-hover:scale-110 group-hover:bg-brand/10 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
              <p className="text-neutral-500 leading-relaxed text-base">
                {service.description}
              </p>

              <div
                onClick={() => setSelectedService(service)}
                className="mt-10 pt-8 border-t border-white/5 flex items-center text-xs font-black uppercase tracking-widest text-brand group-hover:translate-x-2 transition-transform cursor-pointer"
              >
                Learn More <span className="ml-2">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services;
