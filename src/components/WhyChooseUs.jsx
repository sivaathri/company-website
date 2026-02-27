import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Zap, MessageSquare, Code2, DollarSign, Shield } from 'lucide-react';

const reasons = [
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: 'Startup-Friendly Pricing',
    description: 'Flexible, milestone-based pricing designed to help ambitious teams launch without breaking the bank.',
    color: '#6366f1',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Fast & Agile Delivery',
    description: 'Rapid 2-week sprints with demo each cycle so you see real progress — not just promises.',
    color: '#ec4899',
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: 'Direct Engineer Access',
    description: 'No middlemen. Talk directly to the engineers building your product via dedicated channels.',
    color: '#22d3ee',
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: 'Modern Tech Stack',
    description: 'React, Next.js, Node, Python, AWS — cutting-edge tools for unmatched reliability and performance.',
    color: '#f97316',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Security-First Approach',
    description: 'OWASP best practices, code audits, and penetration testing baked into every release.',
    color: '#a3e635',
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: 'Proven Track Record',
    description: '100+ delivered projects, >50 clients worldwide, 99.9% uptime SLAs — our results speak for themselves.',
    color: '#fbbf24',
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  const yLeft  = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yOrb   = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden bg-[#080818]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Parallax orb */}
      <motion.div style={{ y: yOrb }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="orb orb-1 opacity-15" style={{ width: 700, height: 700 }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-pink-500/30 bg-pink-500/10 text-pink-300 text-sm font-medium"
          >
            Why Pondy IT
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
          >
            Why{' '}
            <span style={{
              background: 'linear-gradient(to right,#6366f1,#ec4899)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Choose Us?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-lg text-slate-400 max-w-xl mx-auto"
          >
            We don't just write code — we partner with you to solve real business problems.
          </motion.p>
        </div>

        {/* 2-column grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: reasons list */}
          <motion.div style={{ y: yLeft }} className="space-y-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group flex gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]
                  hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 cursor-default"
              >
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${r.color}22`,
                    border: `1px solid ${r.color}33`,
                    color: r.color,
                  }}
                >
                  {r.icon}
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">{r.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{r.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: decorative stats panel */}
          <motion.div style={{ y: yRight }} className="relative">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-pink-600/10 rounded-3xl" style={{ filter: 'blur(40px)' }} />

            <div className="relative glass-card rounded-3xl p-8 border border-white/[0.09]">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Performance at a glance</div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { value: '100+', label: 'Projects Delivered', color: '#6366f1' },
                  { value: '50+',  label: 'Happy Clients',      color: '#ec4899' },
                  { value: '99.9%',label: 'Uptime SLA',         color: '#22d3ee' },
                  { value: '4.9★', label: 'Average Rating',     color: '#fbbf24' },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 + i * 0.08 }}
                    className="rounded-2xl p-5 border border-white/[0.06] bg-white/[0.03] flex flex-col gap-1"
                  >
                    <div className="text-3xl font-extrabold" style={{
                      background: `linear-gradient(to right, ${s.color}, #fff)`,
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>
                      {s.value}
                    </div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Technologies */}
              <div className="text-xs text-slate-600 mb-3 uppercase tracking-widest">Core Technologies</div>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'React Native', 'AWS', 'MongoDB', 'PostgreSQL'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-full text-[11px] font-medium text-slate-400 border border-white/[0.07] bg-white/[0.03]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default WhyChooseUs;
