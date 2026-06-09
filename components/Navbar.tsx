
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Standard header height
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

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-brand/20 group-hover:scale-110 transition-transform">
            <img src="/assets/flame-transp.png" alt="Firehouse Labs" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-black tracking-tighter translate-y-[3px]">FIREHOUSE LABS</span>
        </Link>

        <div className="hidden md:flex space-x-10 text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400">
          {isHomePage ? (
            <>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className="hover:text-brand transition-colors cursor-pointer"
              >
                Services
              </a>
              <a
                href="#work"
                onClick={(e) => handleNavClick(e, 'work')}
                className="hover:text-brand transition-colors cursor-pointer"
              >
                Work Showcase
              </a>
            </>
          ) : (
            <>
              <Link
                to="/#services"
                className="hover:text-brand transition-colors cursor-pointer"
              >
                Services
              </Link>
              <Link
                to="/#work"
                className="hover:text-brand transition-colors cursor-pointer"
              >
                Work Showcase
              </Link>
            </>
          )}
          <Link
            to="/government"
            className="hover:text-brand transition-colors cursor-pointer"
          >
            Government
          </Link>
          <Link
            to="/business"
            className="hover:text-brand transition-colors cursor-pointer"
          >
            Business
          </Link>
          <Link
            to="/health"
            className="hover:text-brand transition-colors cursor-pointer"
          >
            Health
          </Link>
        </div>

        {isHomePage ? (
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="px-6 py-2.5 bg-white text-black text-[11px] font-black uppercase tracking-wider rounded-full hover:bg-brand hover:text-white transition-all shadow-xl hover:shadow-brand/20 cursor-pointer"
          >
            Hire Us
          </a>
        ) : (
          <Link
            to="/#contact"
            className="px-6 py-2.5 bg-white text-black text-[11px] font-black uppercase tracking-wider rounded-full hover:bg-brand hover:text-white transition-all shadow-xl hover:shadow-brand/20 cursor-pointer"
          >
            Hire Us
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
