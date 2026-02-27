import React from 'react';
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = {
  'Quick Links': [
    { name: 'Home',        href: '#home'     },
    { name: 'About',       href: '#about'    },
    { name: 'Services',    href: '#services' },
    { name: 'Our Process', href: '#process'  },
    { name: 'Contact',     href: '#contact'  },
  ],
  Services: [
    { name: 'Mobile App Dev',   href: '#services' },
    { name: 'Web App Dev',      href: '#services' },
    { name: 'ERP / CRM',        href: '#services' },
    { name: 'E-Commerce',       href: '#services' },
    { name: 'Custom Software',  href: '#services' },
  ],
  Legal: [
    { name: 'Privacy Policy',   href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy',    href: '#' },
  ],
};

const socials = [
  { icon: <Twitter  className="w-4 h-4" />, href: '#', label: 'Twitter'   },
  { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn'  },
  { icon: <Github   className="w-4 h-4" />, href: '#', label: 'GitHub'    },
  { icon: <Instagram className="w-4 h-4"/>, href: '#', label: 'Instagram' },
];

const Footer = () => (
  <footer className="relative overflow-hidden bg-[#0a0a0c] border-t border-white/[0.06]">
    {/* Top gradient line — red → gold */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

    {/* Dual background orbs */}
    <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse, rgba(220,38,38,0.05) 0%, transparent 70%)' }}
    />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.04) 0%, transparent 70%)' }}
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Main grid */}
      <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12">

        {/* Brand */}
        <div className="xl:col-span-2">
          {/* Logo */}
          <a href="#home" className="inline-flex mb-5 group">
            <img
              src="/mainlogo.png"
              alt="Pondy IT Solutions"
              className="h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              style={{ mixBlendMode: 'screen', filter: 'drop-shadow(0 0 8px rgba(220,38,38,0.4)) brightness(1.1)' }}
            />
          </a>

          <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
            Transforming ambitious ideas into powerful, intelligent digital products for startups and enterprises worldwide.
          </p>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-xl border border-white/[0.07] bg-white/[0.03] flex items-center justify-center text-slate-500
                  hover:text-white hover:border-red-500/40 hover:bg-red-500/10 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-5">{group}</h5>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-amber-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-8 border-t border-b border-white/[0.05] mb-8 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div>
          <div className="text-white font-semibold mb-1">Ready to start your project?</div>
          <div className="text-slate-500 text-sm">Book a free 30-minute discovery call with our team.</div>
        </div>
        <a
          href="#contact"
          className="btn-shimmer flex-shrink-0 px-6 py-3 rounded-xl font-semibold text-white text-sm
            bg-gradient-to-r from-red-600 to-amber-500
            shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_35px_rgba(220,38,38,0.55)]
            transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
        >
          Get Free Consultation
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Bottom bar */}
      <div className="pb-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600">
        <span>© {new Date().getFullYear()} Pondy IT Solutions. All rights reserved.</span>
        <span>
          Crafted with{' '}
          <span className="grad-text" style={{ fontWeight: 700 }}>♥</span>
          {' '}in Pondicherry, India
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
