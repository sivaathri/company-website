import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    id: '01',
    title: 'Discovery & Strategy',
    description: 'Deep-dive into your business goals, audience, and competitive landscape to define the winning product strategy.',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.35)',
    emoji: '🔍',
  },
  {
    id: '02',
    title: 'UI/UX Design',
    description: 'Crafting pixel-perfect wireframes and interactive prototypes that users love, backed by design thinking.',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.35)',
    emoji: '🎨',
  },
  {
    id: '03',
    title: 'Development',
    description: 'Writing clean, tested, scalable code using modern frameworks — with daily progress updates for you.',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.35)',
    emoji: '💻',
  },
  {
    id: '04',
    title: 'QA & Testing',
    description: 'Automated + manual testing, security audits, and performance benchmarking before any release.',
    color: '#f43f5e',
    glow: 'rgba(244,63,94,0.35)',
    emoji: '✅',
  },
  {
    id: '05',
    title: 'Deployment',
    description: 'CI/CD pipelines, zero-downtime launches to cloud, app stores, or your own servers.',
    color: '#f97316',
    glow: 'rgba(249,115,22,0.35)',
    emoji: '🚀',
  },
  {
    id: '06',
    title: 'Growth & Support',
    description: 'Post-launch monitoring, SLA-backed support, feature iterations, and growth-driven improvements.',
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.35)',
    emoji: '📈',
  },
];

/* Single step card */
const StepCard = ({ step, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    className="relative group"
  >
    {/* Card */}
    <div
      className="relative overflow-hidden rounded-2xl p-6 border border-white/[0.07] bg-white/[0.03]
        hover:bg-white/[0.06] transition-all duration-400 cursor-default h-full"
      style={{
        boxShadow: 'none',
        transition: 'box-shadow 0.4s ease, background 0.4s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 8px 40px ${step.glow}, 0 1px 0 ${step.color}55 inset`;
        e.currentTarget.style.borderColor = `${step.color}44`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
      }}
    >
      {/* Top row: number + emoji */}
      <div className="flex items-start justify-between mb-5">
        {/* Step number badge */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-lg flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${step.color}, ${step.color}88)`,
            boxShadow: `0 4px 18px ${step.glow}`,
          }}
        >
          {step.id}
        </div>

        {/* Emoji */}
        <span className="text-3xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 select-none">
          {step.emoji}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-2 leading-snug">{step.title}</h3>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-b-2xl"
        style={{ background: `linear-gradient(to right, transparent, ${step.color}, transparent)` }}
      />
    </div>

    {/* Connector arrow (right side, hidden on last in row) */}
  </motion.div>
);

const Process = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const yOrb = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="process" ref={sectionRef} className="py-28 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Parallax orb */}
      <motion.div
        style={{ y: yOrb }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
      >
        <div className="orb orb-3 w-full h-full opacity-20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium"
          >
            How We Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
          >
            Our{' '}
            <span
              style={{
                background: 'linear-gradient(to right,#8b5cf6,#ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Process
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-lg text-slate-400 max-w-xl mx-auto"
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
          className="hidden lg:block relative mb-10"
          style={{ originX: 0 }}
        >
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <React.Fragment key={step.id}>
                {/* Dot */}
                <div
                  className="w-5 h-5 rounded-full flex-shrink-0 relative"
                  style={{ background: step.color, boxShadow: `0 0 14px ${step.glow}` }}
                >
                  <span
                    className="absolute inset-0 rounded-full animate-ripple"
                    style={{ border: `2px solid ${step.color}`, opacity: 0.5 }}
                  />
                </div>
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div
                    className="flex-1 h-[2px] mx-1"
                    style={{
                      background: `linear-gradient(to right, ${step.color}, ${steps[i + 1].color})`,
                      opacity: 0.4,
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* 3-column grid of cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
