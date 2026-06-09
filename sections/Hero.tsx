
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div
        className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse"
        style={{
          background: 'rgba(255, 66, 44, 0.25)',
          zIndex: 0
        }}
      ></div>
      <div
        className="absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse"
        style={{
          background: 'rgba(255, 156, 44, 0.25)',
          zIndex: 0,
          animationDelay: '1s'
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
        style={{
          background: 'rgba(255, 100, 44, 0.2)',
          zIndex: 0
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards]">

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter mb-8 max-w-4xl">
              Transforming <br />
              <span className="gradient-text">Concepts</span> into <br />
              Digital Reality.
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed font-medium">
              Firehouse Labs is an niche software development agency. We build mission-critical products for emergency services, government, private enterprise and health.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#work"
                onClick={(e) => handleScrollTo(e, 'work')}
                className="bg-brand-gradient text-white px-10 py-4 rounded-full font-black text-base hover:shadow-2xl hover:shadow-brand/40 transition-all text-center cursor-pointer"
              >
                Explore Work Showcase
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="glass border border-white/20 text-white px-10 py-4 rounded-full font-black text-base hover:bg-white/10 transition-all text-center cursor-pointer"
              >
                Hire FireHouse
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Grid Background Overlay */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 0)', backgroundSize: '40px 40px', zIndex: 1 }}></div>

      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(255,255,255,0.06) 80px, rgba(255,255,255,0.06) 81px)',
        zIndex: 1
      }}></div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        background: 'radial-gradient(at 20% 30%, rgba(255, 66, 44, 0.15) 0px, transparent 50%), radial-gradient(at 80% 70%, rgba(255, 156, 44, 0.12) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(255, 66, 44, 0.08) 0px, transparent 50%)',
        zIndex: 1
      }}></div>
    </section>
  );
};

export default Hero;
