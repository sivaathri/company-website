import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Zap, ArrowUpRight } from 'lucide-react';
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
    { name: 'Privacy Policy',  href: '#' },
    { name: 'Terms of Service',href: '#' },
    { name: 'Cookie Policy',   href: '#' },
  ],
};

const socials = [
  { icon: <Twitter  className="w-4 h-4" />, href: '#', label: 'Twitter'   },
  { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn'  },
  { icon: <Github   className="w-4 h-4" />, href: '#', label: 'GitHub'    },
  { icon: <Instagram className="w-4 h-4"/>, href: '#', label: 'Instagram' },
];

const Footer = () => (
  <footer className="relative overflow-hidden bg-[#030308] border-t border-white/[0.06]">
    {/* Top gradient line */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

    {/* Background orb */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.04) 0%, transparent 70%)' }}
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Main grid */}
      <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12">

        {/* Brand */}
        <div className="xl:col-span-2">
          <a href="#home" className="flex items-center gap-2.5 mb-5 group w-fit">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 opacity-80" />
              <Zap className="relative w-4.5 h-4.5 text-white z-10" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              Pondy IT{' '}
              <span style={{
                background: 'linear-gradient(to right,#6366f1,#ec4899)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Solutions</span>
            </span>
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
                  hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-300"
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
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
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
            bg-gradient-to-r from-indigo-600 to-pink-600
            shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]
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
          <span style={{
            background: 'linear-gradient(to right,#6366f1,#ec4899)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            fontWeight: 700,
          }}>♥</span>
          {' '}in Pondicherry, India
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
