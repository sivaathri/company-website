import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from 'lucide-react';

const footerLinks = {
  Services: [
    'Web Development',
    'Mobile App Development',
    'ERP & CRM Solutions',
    'E-Commerce Development',
    'Custom Software',
    'Cloud & DevOps',
    'UI/UX Design',
    'Digital Marketing',
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Our Process', href: '#process' },
    { label: 'Why Choose Us', href: '#why' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Careers', href: '#contact' },
    { label: 'Blog', href: '#' },
    { label: 'Contact Us', href: '#contact' },
  ],
  Technologies: [
    'React & Next.js',
    'Node.js & Laravel',
    'React Native',
    'Flutter',
    'Python & Django',
    'AWS & Azure',
    'MongoDB & PostgreSQL',
    'Firebase',
  ],
};

const social = [
  { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
  { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
  { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
  { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn' },
  { icon: <Youtube className="w-4 h-4" />, href: '#', label: 'YouTube' },
  { icon: <Github className="w-4 h-4" />, href: '#', label: 'GitHub' },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#080810] border-t border-white/[0.06]">
      {/* ── CTA Bar ── */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600/90 via-rose-600/80 to-amber-600/90">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Ready to Build Something Amazing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-white/80 text-lg mb-8 max-w-xl mx-auto"
          >
            Get a free consultation and project estimate within 24 hours. No commitment needed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="group px-8 py-3.5 rounded-full font-semibold text-red-600 bg-white hover:bg-amber-50 shadow-lg hover:shadow-xl flex items-center gap-2 transition-all duration-300 hover:-translate-y-1"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+919876543210"
              className="group px-8 py-3.5 rounded-full font-semibold text-white border-2 border-white/40 hover:border-white hover:bg-white/10 flex items-center gap-2 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <img
                src="/logo.png"
                alt="Pondy IT Solutions"
                className="h-14 w-auto object-contain"
                style={{
                  mixBlendMode: 'screen',
                  filter: 'drop-shadow(0 0 6px rgba(220,38,38,0.4)) brightness(1.1)',
                }}
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Pondy IT Solutions is a premier technology company based in Pondicherry, India, delivering world-class web, mobile, and enterprise software solutions since 2019.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-slate-400 hover:text-red-400 transition-colors group">
                <span className="w-7 h-7 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <Phone className="w-3 h-3 text-red-400" />
                </span>
                +91 98765 43210
              </a>
              <a href="mailto:info@pondyitsolutions.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-amber-400 transition-colors group">
                <span className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-3 h-3 text-amber-400" />
                </span>
                info@pondyitsolutions.com
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-500">
                <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3 h-3 text-slate-500" />
                </span>
                <span>No. 12, IT Park Road,<br />Mudaliarpet, Pondicherry – 605004</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {social.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600/20 hover:border-red-500/40 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link, i) => (
                  <li key={i}>
                    {typeof link === 'string' ? (
                      <span className="text-sm text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
                        {link}
                      </span>
                    ) : (
                      <a href={link.href} className="text-sm text-slate-500 hover:text-slate-300 hover:translate-x-1 inline-block transition-all duration-200">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-xs text-center sm:text-left">
              © 2025 Pondy IT Solutions. All rights reserved. |{' '}
              <span className="text-slate-500">Made with ❤️ in Pondicherry, India</span>
            </p>
            <div className="flex gap-6 text-xs text-slate-600">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
