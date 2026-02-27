import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const serviceDropdown = [
  { name: 'Web Development', icon: '🌐', desc: 'React, Next.js, Node.js' },
  { name: 'Mobile App Development', icon: '📱', desc: 'iOS, Android, React Native' },
  { name: 'ERP & CRM Systems', icon: '🏢', desc: 'Enterprise solutions' },
  { name: 'E-Commerce Solutions', icon: '🛒', desc: 'Shopify, WooCommerce' },
  { name: 'Custom Software', icon: '⚙️', desc: 'Tailored solutions' },
  { name: 'Cloud & DevOps', icon: '☁️', desc: 'AWS, Azure, CI/CD' },
];

const navLinks = [
  { name: 'Home',     href: '#home'     },
  { name: 'About',    href: '#about'    },
  { name: 'Services', href: '#services', hasDropdown: true },
  { name: 'Portfolio',href: '#portfolio'},
  { name: 'Process',  href: '#process'  },
  { name: 'Contact',  href: '#contact'  },
];

const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeSection, setActive]    = useState('home');
  const [dropdownOpen, setDropdown]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
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
    <div className="fixed w-full top-0 z-[900]">
      {/* ── Top Contact Bar ── */}
      <div className="hidden md:block bg-gradient-to-r from-red-600/95 to-amber-500/95 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs font-medium text-white/95">
            <div className="flex items-center gap-6">
              <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-white transition-colors drop-shadow-sm">
                <Phone className="w-3 h-3" />
                +91 98765 43210
              </a>
              <a href="mailto:info@pondyitsolutions.com" className="flex items-center gap-1.5 hover:text-white transition-colors drop-shadow-sm">
                <Mail className="w-3 h-3" />
                info@pondyitsolutions.com
              </a>
            </div>
            <div className="flex items-center gap-1.5 drop-shadow-sm">
              <MapPin className="w-3 h-3" />
              <span>Pondicherry, India</span>
              <span className="ml-4 opacity-80">Mon–Sat: 9 AM – 6 PM IST</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
            : 'bg-white/80 backdrop-blur-lg border-b border-slate-100/50'
        }`}
      >
        {scrolled && (
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[68px]">
            {/* Logo */}
            <a href="#home" className="flex items-center select-none group flex-shrink-0">
              <img
                src="/logo.png"
                alt="Pondy IT Solutions"
                className="h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                // No white blend mode needed for light background unless the logo is white text
                // Assuming logo works on light BG, removed screen mixBlendMode
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map(link => {
                const isActive = activeSection === link.href.slice(1);
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setDropdown(true)}
                      onMouseLeave={() => setDropdown(false)}
                    >
                      <button
                        className={`nav-link-anim relative flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                          isActive ? 'text-red-600' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-lg bg-red-50 border border-red-100"
                            transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                          />
                        )}
                        <span className="relative z-10">{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 relative z-10 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-0 mt-2 w-72 bg-white backdrop-blur-xl rounded-2xl border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-2 z-50"
                          >
                            {serviceDropdown.map(svc => (
                              <a
                                key={svc.name}
                                href="#services"
                                onClick={() => setDropdown(false)}
                                className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 group/item transition-colors"
                              >
                                <span className="text-lg mt-0.5 drop-shadow-sm">{svc.icon}</span>
                                <div>
                                  <div className="text-sm font-bold text-slate-800 group-hover/item:text-red-500 transition-colors">{svc.name}</div>
                                  <div className="text-xs font-medium text-slate-500">{svc.desc}</div>
                                </div>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`nav-link-anim relative px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                      isActive ? 'text-red-600' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-red-50 border border-red-100"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-slate-600 border border-slate-200 hover:border-red-300 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Us
              </a>
              <a
                href="#contact"
                className="btn-shimmer relative px-5 py-2.5 rounded-full text-sm font-bold text-white
                  bg-gradient-to-r from-red-600 via-rose-600 to-amber-500
                  hover:from-red-500 hover:via-rose-500 hover:to-amber-400
                  shadow-[0_4px_15px_rgba(220,38,38,0.25)] hover:shadow-[0_6px_25px_rgba(220,38,38,0.4)]
                  transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Free Quote
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all"
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
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-t border-slate-200 shadow-xl"
            >
              <div className="px-4 py-5 space-y-1 flex flex-col">
                {/* Mobile contact bar */}
                <div className="flex flex-col gap-2 mb-4 pb-4 border-b border-slate-100">
                  <a href="tel:+919876543210" className="flex items-center gap-2 text-sm font-semibold text-red-600">
                    <Phone className="w-4 h-4" /> +91 98765 43210
                  </a>
                  <a href="mailto:info@pondyitsolutions.com" className="flex items-center gap-2 text-sm font-medium text-slate-600">
                    <Mail className="w-4 h-4" /> info@pondyitsolutions.com
                  </a>
                </div>

                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-bold text-sm transition-all"
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
                  className="mt-2 px-4 py-3 rounded-xl text-center font-bold text-white text-sm
                    bg-gradient-to-r from-red-600 to-amber-500 shadow-md"
                >
                   Get Free Quote
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
