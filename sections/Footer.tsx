
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-neutral-950 border-t border-white/5">
      <div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <img src="/assets/flame-transp.png" alt="Firehouse Labs" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-black tracking-tighter translate-y-[3px]">FIREHOUSE LABS</span>
          </div>
          
          <div className="flex space-x-12 text-sm text-neutral-500 font-medium">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="https://www.linkedin.com/company/firehouselabs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>

          <div className="text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} Firehouse Labs Pty Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
