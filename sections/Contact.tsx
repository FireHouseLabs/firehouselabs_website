
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="glass max-w-6xl mx-auto rounded-[3rem] overflow-hidden flex flex-col lg:flex-row border border-white/10">
          <div className="lg:w-1/2 p-12 lg:p-20 bg-brand-gradient text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to start <br />something great?</h2>
              <p className="text-white/80 text-lg mb-12">
                Whether you have a specific project in mind or just want to explore what's possible, we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest opacity-60">Email Us</p>
                <p className="text-2xl font-bold">hello@firehouselabs.com.au</p>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest opacity-60">Location</p>
                <p className="text-2xl font-bold">Melbourne, Australia</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 lg:p-20 bg-neutral-900">
            <form className="space-y-8" action="https://submit-form.com/g2loVdYi9" method="POST" data-botpoison-public-key="pk_23c283b4-3034-48f0-bc86-1206b236df71">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-400">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:outline-none focus:border-brand transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-400">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:outline-none focus:border-brand transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-400">Project Type</label>
                <select className="w-full bg-transparent border-b border-neutral-700 py-3 focus:outline-none focus:border-brand transition-colors text-neutral-300">
                  <option className="bg-neutral-900">Software Development</option>
                  <option className="bg-neutral-900">UX/UI Design</option>
                  <option className="bg-neutral-900">Consulting</option>
                  <option className="bg-neutral-900">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-400">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-neutral-700 py-3 focus:outline-none focus:border-brand transition-colors" placeholder="Tell us about your project..." />
              </div>
              <button className="w-full py-5 bg-brand-gradient text-white font-black text-lg rounded-2xl hover:opacity-90 transition-all shadow-xl shadow-brand/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
