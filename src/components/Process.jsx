import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    id: '01',
    title: 'Discovery & Strategy',
    description: 'Deep-dive into your business goals, audience, and competitive landscape to define the winning product strategy.',
    color: '#dc2626',
    glow: 'rgba(220,38,38,0.2)',
    emoji: '🔍',
  },
  {
    id: '02',
    title: 'UI/UX Design',
    description: 'Crafting pixel-perfect wireframes and interactive prototypes that users love, backed by design thinking.',
    color: '#ef4444',
    glow: 'rgba(239,68,68,0.2)',
    emoji: '🎨',
  },
  {
    id: '03',
    title: 'Development',
    description: 'Writing clean, tested, scalable code using modern frameworks — with daily progress updates for you.',
    color: '#f97316',
    glow: 'rgba(249,115,22,0.2)',
    emoji: '💻',
  },
  {
    id: '04',
    title: 'QA & Testing',
    description: 'Automated + manual testing, security audits, and performance benchmarking before any release.',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.2)',
    emoji: '✅',
  },
  {
    id: '05',
    title: 'Deployment',
    description: 'CI/CD pipelines, zero-downtime launches to cloud, app stores, or your own servers.',
    color: '#eab308',
    glow: 'rgba(234,179,8,0.2)',
    emoji: '🚀',
  },
  {
    id: '06',
    title: 'Growth & Support',
    description: 'Post-launch monitoring, SLA-backed support, feature iterations, and growth-driven improvements.',
    color: '#d97706',
    glow: 'rgba(217,119,6,0.2)',
    emoji: '📈',
  },
];

const StepCard = ({ step, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    className="relative group"
  >
    <div
      className="relative overflow-hidden rounded-2xl p-6 border border-slate-200 bg-white
        hover:bg-slate-50 cursor-default h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
      style={{ transition: 'box-shadow 0.4s ease, background 0.4s ease, border-color 0.4s ease' }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 10px 40px ${step.glow}, 0 2px 0 ${step.color} inset`;
        e.currentTarget.style.borderColor = `${step.color}55`; // light semi-transparent border
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
        e.currentTarget.style.borderColor = '#e2e8f0'; // slate-200
      }}
    >
      {/* Top row: number + emoji */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white text-lg flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${step.color}, ${step.color}CC)`,
            boxShadow: `0 4px 15px ${step.glow}`,
          }}
        >
          {step.id}
        </div>
        <span className="text-3xl opacity-80 group-hover:opacity-100 group-hover:scale-110 drop-shadow-sm transition-all duration-300 select-none">
          {step.emoji}
        </span>
      </div>

      <h3 className="text-xl font-extrabold text-slate-900 mb-2 leading-snug">{step.title}</h3>
      <p className="text-sm font-medium text-slate-600 leading-relaxed">{step.description}</p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-b-2xl"
        style={{ background: `linear-gradient(to right, transparent, ${step.color}, transparent)` }}
      />
    </div>
  </motion.div>
);

const Process = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const yOrb = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="process" ref={sectionRef} className="py-28 relative overflow-hidden bg-white">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <motion.div
        style={{ y: yOrb }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
      >
        <div className="orb orb-3 w-full h-full opacity-10" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-purple-200 bg-purple-50 text-purple-600 font-bold text-sm shadow-sm"
          >
            How We Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-5 leading-tight"
          >
            Our{' '}
            <span className="grad-text">
              Process
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-lg text-slate-600 font-medium max-w-xl mx-auto"
          >
            A transparent, agile development lifecycle designed to minimize risk and maximize results.
          </motion.p>
        </div>

        {/* Step flow indicator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="hidden lg:block relative mb-12 mt-4"
          style={{ originX: 0 }}
        >
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <React.Fragment key={step.id}>
                <div
                  className="w-5 h-5 rounded-full flex-shrink-0 relative border-2 border-white shadow-md z-10"
                  style={{ background: step.color }}
                >
                  <span
                    className="absolute inset-0 rounded-full animate-ripple"
                    style={{ border: `3px solid ${step.color}`, opacity: 0.4, transform: 'scale(1.5)' }}
                  />
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="flex-1 h-[3px] mx-1 z-0 shadow-sm"
                    style={{
                      background: `linear-gradient(to right, ${step.color}66, ${steps[i + 1].color}66)`, // transparent lines
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* 3-column grid of cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.id} step={step} index={i} />
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Process;
