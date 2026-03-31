
import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Software & Design Consultancy"
        description="Firehouse Labs is an Australian software and design consultancy building custom platforms for emergency services, government, healthcare, and business."
      />
      <Hero />
      <Services />
      <Portfolio />
      <section className="py-16 bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 glass rounded-[2.5rem] border border-white/5 px-10 py-10 md:px-16 md:py-12">
            <div>
              <span className="text-brand font-bold tracking-widest text-xs uppercase mb-3 block">Community</span>
              <h3 className="text-2xl md:text-3xl font-black mb-3">Proud Sponsor of the Peninsula Dolphins</h3>
              <p className="text-neutral-400 text-base leading-relaxed max-w-xl">
                We're honoured to support the Peninsula Dolphins Rugby League Club as part of our commitment to the local community. Great footy, great people.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/assets/dolphins.jpg" alt="Peninsula Dolphins Rugby League Club" className="w-24 h-24 rounded-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Home;
