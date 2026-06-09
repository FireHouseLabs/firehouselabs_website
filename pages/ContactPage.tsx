
import React from 'react';
import Contact from '../sections/Contact';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Contact Us"
        description="Get in touch with Firehouse Labs. Whether you have a specific project in mind or want to explore what's possible, we'd love to hear from you."
      />
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand font-bold tracking-widest text-sm uppercase mb-6 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-8">
              Let's Build <br />
              <span className="gradient-text">Something Great</span>
            </h1>
            <p className="text-neutral-400 text-xl leading-relaxed">
              Whether you have a specific project in mind or just want to explore what's possible, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default ContactPage;
