import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { id: '01', title: 'Discovery & Strategy', description: 'Deep-dive into your business goals, audience, and competitive landscape to define the winning product strategy.', color: '#6366f1' },
  { id: '02', title: 'UI/UX Design',         description: 'Crafting pixel-perfect wireframes and interactive prototypes that users love, backed by design thinking.', color: '#8b5cf6' },
  { id: '03', title: 'Development',           description: 'Writing clean, tested, scalable code using modern frameworks — with daily progress updates for you.', color: '#ec4899' },
  { id: '04', title: 'QA & Testing',          description: 'Automated + manual testing, security audits, and performance benchmarking before any release.', color: '#f43f5e' },
  { id: '05', title: 'Deployment',            description: 'CI/CD pipelines, zero-downtime launches to cloud, app stores, or your own servers.', color: '#f97316' },
  { id: '06', title: 'Growth & Support',      description: 'Post-launch monitoring, SLA-backed support, feature iterations, and growth-driven improvements.', color: '#fbbf24' },
];

const ProcessStep = ({ step, index, isLast }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] items-center gap-0"
    >
      {/* Left side */}
      <div className={`md:flex ${isEven ? 'md:justify-end' : 'md:justify-start md:order-3'} pb-4 md:pb-0`}>
        {isEven ? (
          <StepCard step={step} align="right" />
        ) : (
          <div className="hidden md:block" />
        )}
      </div>

      {/* Center timeline */}
      <div className="hidden md:flex flex-col items-center">
        {/* Top connector */}
        {index !== 0 && (
          <div className="w-[2px] h-8 timeline-line" style={{ opacity: 0.4 }} />
        )}

        {/* Node */}
        <motion.div
          whileHover={{ scale: 1.15 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white z-10 cursor-default"
          style={{
            background: `linear-gradient(135deg, ${step.color}, ${steps[Math.min(index + 1, steps.length - 1)].color})`,
            boxShadow: `0 0 0 4px ${step.color}22, 0 0 25px ${step.color}44`,
          }}
        >
          {step.id}
          {/* Ripple */}
          <span
            className="absolute inset-0 rounded-full animate-ripple"
            style={{ border: `2px solid ${step.color}`, opacity: 0.4 }}
          />
        </motion.div>

        {/* Bottom connector */}
        {!isLast && (
          <div className="w-[2px] h-8 timeline-line" style={{ opacity: 0.4 }} />
        )}
      </div>

      {/* Right side */}
      <div className={`md:flex ${isEven ? 'md:justify-start md:order-3' : 'md:justify-end'} pb-4 md:pb-0`}>
        {!isEven ? (
          <StepCard step={step} align="left" />
        ) : (
          <div className="hidden md:block" />
        )}
      </div>

      {/* Mobile: always show card below */}
      <div className="md:hidden">
        <StepCard step={step} align="left" isMobile />
      </div>
    </motion.div>
  );
};

const StepCard = ({ step, align, isMobile }) => (
  <div
    className={`group glass-card rounded-3xl p-6 border border-white/[0.07] relative overflow-hidden
      hover:-translate-y-1 transition-transform duration-300 cursor-default
      ${isMobile ? 'w-full mt-4' : 'w-5/6'}`}
  >
    {/* Step number watermark */}
    <span
      className="absolute -top-2 right-4 text-[80px] font-black pointer-events-none select-none transition-colors duration-300"
      style={{ color: `${step.color}0a`, lineHeight: 1 }}
    >
      {step.id}
    </span>

    {/* Step color accent */}
    <div
      className="absolute top-0 left-0 bottom-0 w-[3px] rounded-l-3xl"
      style={{ background: `linear-gradient(to bottom, ${step.color}, transparent)` }}
    />

    <div className="relative z-10">
      <div
        className="text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-3"
        style={{ background: `${step.color}18`, color: step.color, border: `1px solid ${step.color}30` }}
      >
        Step {step.id}
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white">{step.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
    </div>

    {/* Bottom shimmer on hover */}
    <div
      className="absolute bottom-0 left-4 right-4 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: `linear-gradient(to right, transparent, ${step.color}80, transparent)` }}
    />
  </div>
);

const Process = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const yOrb = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="process" ref={sectionRef} className="py-28 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Parallax orb */}
      <motion.div style={{ y: yOrb }} className="absolute right-0 top-1/2 w-[500px] h-[500px] pointer-events-none -translate-y-1/2">
        <div className="orb orb-3 w-full h-full opacity-20" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span style={{
              background: 'linear-gradient(to right,#8b5cf6,#ec4899)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
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

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <ProcessStep key={step.id} step={step} index={i} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Process;
