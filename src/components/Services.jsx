import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, MonitorPlay, Layers, Database, ShoppingCart, ArrowRight, Sparkles } from 'lucide-react';
import { useTilt } from '../hooks/useParallax';

const services = [
  {
    title: 'Mobile App Development',
    description: 'Native iOS & Android and cross-platform apps with React Native. Exceptional UX, offline support, and app store publishing.',
    icon: <Smartphone className="w-7 h-7" />,
    gradient: 'from-red-500 to-rose-600',
    glow: 'rgba(239,68,68,0.3)',
    tag: 'iOS / Android',
    featured: true,
  },
  {
    title: 'Web Application Development',
    description: 'Scalable, secure, and blazing-fast web apps using React, Next.js, Node.js, and modern cloud infrastructure.',
    icon: <MonitorPlay className="w-7 h-7" />,
    gradient: 'from-amber-500 to-orange-500',
    glow: 'rgba(245,158,11,0.3)',
    tag: 'React / Next.js',
    featured: false,
  },
  {
    title: 'Custom Software',
    description: 'Tailor-made solutions crafted for your unique workflows — automation, integrations, and internal tooling.',
    icon: <Layers className="w-7 h-7" />,
    gradient: 'from-rose-500 to-red-600',
    glow: 'rgba(244,63,94,0.3)',
    tag: 'Full-Stack',
    featured: false,
  },
  {
    title: 'ERP & CRM Systems',
    description: 'Complete enterprise resource and customer-relationship management platforms for operational excellence.',
    icon: <Database className="w-7 h-7" />,
    gradient: 'from-red-600 to-amber-500',
    glow: 'rgba(220,38,38,0.3)',
    tag: 'Enterprise',
    featured: false,
  },
  {
    title: 'E-Commerce Development',
    description: 'High-converting storefronts with secure payment gateways, smart inventory, and seamless checkout.',
    icon: <ShoppingCart className="w-7 h-7" />,
    gradient: 'from-amber-600 to-yellow-500',
    glow: 'rgba(217,119,6,0.3)',
    tag: 'Commerce',
    featured: false,
  },
];

const ServiceCard = ({ service, index }) => {
  const tileRef = useTilt(6);

  return (
    <motion.div
      ref={tileRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`tilt-card service-card relative group rounded-3xl p-8 overflow-hidden cursor-default
        bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        ${service.featured ? 'sm:col-span-2 lg:col-span-1' : ''}`}
    >
      {/* Hover gradient fill (light mode) */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 30% 30%, ${service.glow.replace('0.3', '1')}, transparent 70%)` }}
      />

      {/* Icon */}
      <div className="relative z-10">
        <div className="relative mb-6">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md`}
            style={{ boxShadow: `0 8px 15px ${service.glow}` }}
          >
            {service.icon}
          </div>
          <span
            className="absolute left-0 top-0 -translate-x-1 -translate-y-1 text-[9px] font-bold px-2 py-0.5 rounded-full bg-white border shadow-sm"
            style={{
              borderColor: `${service.glow.replace('0.3', '0.4')}`,
              color: `${service.glow.replace('0.3', '1').replace('rgba', 'rgb').split(',').slice(0,3).join(',')})`,
            }}
          >
            {service.tag}
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 group-hover:text-red-500 transition-colors duration-300">
          <span>Learn more</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Bottom gradient border */}
      <div
        className="absolute bottom-0 left-4 right-4 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
        style={{ background: `linear-gradient(to right, transparent, ${service.glow.replace('0.3', '0.8')}, transparent)` }}
      />
    </motion.div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const yOrb = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section id="services" ref={sectionRef} className="py-28 relative overflow-hidden bg-slate-50">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Parallax orb */}
      <motion.div style={{ y: yOrb }} className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
        <div className="orb orb-2 w-full h-full opacity-15" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-emerald-200 bg-emerald-50 text-emerald-600 text-sm font-bold shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              What We Build
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-5 leading-tight"
            >
              Our{' '}
              <span className="grad-text">
                Services
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 font-medium leading-relaxed"
            >
              End-to-end digital products — from idea to deployment. Strategy, design, and engineering in one team.
            </motion.p>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="flex-shrink-0 btn-shimmer flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-white text-sm
              bg-gradient-to-r from-red-600 to-amber-500
              shadow-[0_4px_15px_rgba(220,38,38,0.25)] hover:shadow-[0_8px_25px_rgba(220,38,38,0.4)]
              transition-all duration-300 hover:-translate-y-0.5"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Service grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Services;
