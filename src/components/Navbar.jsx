import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home',     href: '#home'     },
  { name: 'About',    href: '#about'    },
  { name: 'Services', href: '#services' },
  { name: 'Process',  href: '#process'  },
  { name: 'Contact',  href: '#contact'  },
];

const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeSection, setActive]    = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Highlight active section
      const sections = navLinks.map(l => l.href.slice(1));
      let current = sections[0];
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full top-0 z-[900] transition-all duration-500 ${
        scrolled
          ? 'bg-[#050510]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      {/* Gradient line on top when scrolled */}
      {scrolled && (
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group select-none">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity animate-glow-pulse" />
              <Zap className="relative w-4.5 h-4.5 text-white z-10" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-lg tracking-tight">
              Pondy IT{' '}
              <span
                style={{
                  background: 'linear-gradient(to right,#6366f1,#ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Solutions
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link-anim relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/[0.07]"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-shimmer relative px-5 py-2.5 rounded-full text-sm font-semibold text-white
                bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]
                transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Free Consultation
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={18} /></motion.span>
                : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={18} /></motion.span>
              }
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#050510]/95 backdrop-blur-2xl border-t border-white/[0.06]"
          >
            <div className="px-4 py-5 space-y-1 flex flex-col">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 font-medium text-sm transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl text-center font-semibold text-white text-sm
                  bg-gradient-to-r from-indigo-600 to-pink-600 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
              >
                Get Free Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
