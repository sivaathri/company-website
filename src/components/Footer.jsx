import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
               <img src="/logo.png" alt="Pondy IT Solutions Logo" className="h-12 w-auto" style={{ mixBlendMode: 'screen' }} />
               <div className="font-bold text-2xl tracking-tighter ml-3 text-white">
                 Pondy IT <span className="text-red-500">Solutions</span>
               </div>
            </div>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Transforming ideas into powerful, intelligent digital solutions for startups and enterprises worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-red-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-red-400 transition-colors">Services</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-red-400 transition-colors">Our Process</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:text-left text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Pondy IT Solutions. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed with <span className="text-red-500">♥</span> in Pondicherry
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
