import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, TrendingUp, HeadphonesIcon, Award } from 'lucide-react';
import { useTilt } from '../hooks/useParallax';

/* ── Highlight cards with tilt effect ── */
const HighlightCard = ({ icon, title, description, gradient, delay }) => {
  const tileRef = useTilt(8);

  return (
    <motion.div
      ref={tileRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="tilt-card glass-card rounded-3xl p-8 border border-white/[0.07] relative overflow-hidden group cursor-default"
    >
      {/* Gradient orb inside card */}
      <div
        className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: gradient }}
      />

      <div className="relative z-10">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
          style={{ background: gradient, boxShadow: `0 8px 24px ${gradient.includes('indigo') ? 'rgba(99,102,241,0.25)' : 'rgba(236,72,153,0.25)'}` }}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(to right, transparent, rgba(99,102,241,0.5), transparent)' }}
      />
    </motion.div>
  );
};

/* ── Marquee tech stack ── */
const techs = ['React', 'Next.js', 'Node.js', 'React Native', 'PostgreSQL', 'MongoDB', 'AWS', 'Firebase', 'TypeScript', 'Docker', 'Tailwind CSS', 'Express.js'];

const TechMarquee = () => (
  <div className="overflow-hidden py-4 select-none mt-12">
    <div className="marquee-track">
      {[...techs, ...techs].map((t, i) => (
        <span key={i} className="mx-6 text-slate-600 text-sm font-medium whitespace-nowrap hover:text-indigo-400 transition-colors cursor-default">
          {t}
        </span>
      ))}
    </div>
  </div>
);

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const yOrb = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const highlights = [
    {
      title: 'Innovation-First',
      description: 'We leverage cutting-edge AI, cloud, and modern frameworks to build future-proof solutions.',
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      gradient: 'radial-gradient(circle, rgba(99,102,241,0.5), rgba(139,92,246,0.3))',
      delay: 0.1,
    },
    {
      title: 'Built to Scale',
      description: 'Microservice and serverless architectures that grow effortlessly with your user base.',
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      gradient: 'radial-gradient(circle, rgba(236,72,153,0.5), rgba(244,63,94,0.3))',
      delay: 0.2,
    },
    {
      title: '24 / 7 Support',
      description: 'Dedicated engineers on call. Continuous monitoring, patching, and feature delivery.',
      icon: <HeadphonesIcon className="w-6 h-6 text-white" />,
      gradient: 'radial-gradient(circle, rgba(34,211,238,0.5), rgba(99,102,241,0.3))',
      delay: 0.3,
    },
    {
      title: 'Quality Assured',
      description: 'Rigorous QA, automated testing and code-review pipelines ensure zero-defect releases.',
      icon: <Award className="w-6 h-6 text-white" />,
      gradient: 'radial-gradient(circle, rgba(251,191,36,0.4), rgba(236,72,153,0.3))',
      delay: 0.4,
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-28 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Parallax background orb */}
      <motion.div style={{ y: yOrb }} className="absolute -top-40 right-0 w-[600px] h-[600px] pointer-events-none">
        <div className="orb orb-1 w-full h-full opacity-30" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-pink-500/30 bg-pink-500/10 text-pink-300 text-sm font-medium"
          >
            Who We Are
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            About{' '}
            <span style={{
              background: 'linear-gradient(to right,#6366f1,#ec4899)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>
              Pondy IT Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            We are a dynamic technology studio based in <strong className="text-white">Pondicherry, India</strong>, specializing in
            crafting high-performance web, mobile, and enterprise software solutions. Our mission is
            to transform complex business challenges into beautiful, scalable digital products.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((h) => (
            <HighlightCard key={h.title} {...h} />
          ))}
        </div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center text-xs text-slate-600 uppercase tracking-widest font-medium mt-14 mb-2">
            Technologies We Master
          </div>
          <TechMarquee />
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default About;
