import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, animate } from 'framer-motion';
import { CheckCircle2, Zap, MessageSquare, Code2, DollarSign, Shield, TrendingUp, Star, Award, Users, Clock, ArrowUpRight } from 'lucide-react';

const reasons = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Startup-Friendly Pricing',
    description: 'Flexible, milestone-based pricing designed to help ambitious teams launch without breaking the bank.',
    color: '#dc2626',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Fast & Agile Delivery',
    description: 'Rapid 2-week sprints with demo each cycle so you see real progress — not just promises.',
    color: '#ef4444',
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Direct Engineer Access',
    description: 'No middlemen. Talk directly to the engineers building your product via dedicated channels.',
    color: '#f97316',
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Modern Tech Stack',
    description: 'React, Next.js, Node, Python, AWS — cutting-edge tools for unmatched reliability and performance.',
    color: '#f59e0b',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Security-First Approach',
    description: 'OWASP best practices, code audits, and penetration testing baked into every release.',
    color: '#d97706',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
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
    <section ref={sectionRef} className="py-28 relative overflow-hidden bg-slate-50">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Parallax orb */}
      <motion.div style={{ y: yOrb }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="orb orb-1 opacity-10" style={{ width: 700, height: 700 }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-red-200 bg-red-50 text-red-600 font-bold text-sm shadow-sm"
          >
            Why Pondy IT
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-5 leading-tight"
          >
            Why{' '}
            <span className="grad-text">
              Choose Us?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-lg text-slate-600 font-medium max-w-xl mx-auto"
          >
            We don't just write code — we partner with you to solve real business problems.
          </motion.p>
        </div>

        {/* 2-column grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: reasons list */}
          <motion.div style={{ y: yLeft }} className="space-y-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group flex gap-5 p-5 rounded-2xl border border-slate-200 bg-white shadow-sm
                  hover:bg-slate-50 hover:shadow-md hover:border-slate-300 transition-all duration-300 cursor-default"
              >
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm"
                  style={{
                    background: `${r.color}15`,
                    border: `1px solid ${r.color}33`,
                    color: r.color,
                  }}
                >
                  {r.icon}
                </div>

                {/* Text */}
                <div className="flex-1 mt-1">
                  <h4 className="text-lg font-extrabold text-slate-900 mb-1 leading-tight group-hover:text-red-600 transition-colors">{r.title}</h4>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed pr-2">{r.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: redesigned stats panel */}
          <motion.div style={{ y: yRight }} className="relative lg:ml-6 mt-8 lg:mt-0">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-200 via-transparent to-amber-200 rounded-3xl" style={{ filter: 'blur(30px)', opacity: 0.7 }} />

            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 shadow-xl space-y-8">

              {/* ── Top metric row ── */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 100, suffix: '+', label: 'Projects',   icon: <Award className="w-5 h-5" />, color: '#dc2626' },
                  { value: 50,  suffix: '+', label: 'Clients',    icon: <Users className="w-5 h-5" />, color: '#f97316' },
                  { value: 5,   suffix: 'yr', label: 'Experience', icon: <Clock className="w-5 h-5" />, color: '#f59e0b' },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.06 + i * 0.09 }}
                    className="rounded-2xl p-4 border border-slate-100 bg-slate-50 shadow-sm flex flex-col items-center text-center gap-1.5"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-1 shadow-sm"
                      style={{ background: `${m.color}15`, color: m.color, border: `1px solid ${m.color}33` }}>
                      {m.icon}
                    </div>
                    <CountUp to={m.value} suffix={m.suffix} color={m.color} />
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">{m.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* ── Divider ── */}
              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              {/* ── Expertise bars ── */}
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-slate-400" /> Expertise Depth
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Web & Mobile Development', pct: 95, color: '#dc2626' },
                    { label: 'UI/UX & Product Design',   pct: 88, color: '#ef4444' },
                    { label: 'Cloud & DevOps',            pct: 82, color: '#f97316' },
                    { label: 'AI & Automation',           pct: 75, color: '#f59e0b' },
                  ].map((b, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.07 }}
                    >
                      <div className="flex justify-between text-sm font-semibold mb-1.5">
                        <span className="text-slate-700">{b.label}</span>
                        <span style={{ color: b.color }}>{b.pct}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${b.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full shadow-sm"
                          style={{ background: `linear-gradient(to right, ${b.color}88, ${b.color})` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── Divider ── */}
              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              {/* ── Client satisfaction + recent wins ── */}
              <div className="flex gap-6 items-center">
                {/* Satisfaction ring */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2 pl-2">
                  <SatisfactionRing value={98} />
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider text-center mt-2">Satisfaction</div>
                </div>

                {/* Recent wins */}
                <div className="flex-1 min-w-0 border-l border-slate-100 pl-6">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-400 drop-shadow-sm" fill="#fbbf24" /> Recent Wins
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: 'SaaS platform launched',   time: '2d ago', color: '#dc2626' },
                      { label: 'Mobile app — 50K installs', time: '1w ago', color: '#f97316' },
                      { label: 'API reduced latency 60%',  time: '2w ago', color: '#f59e0b' },
                    ].map((w, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.12 + i * 0.09 }}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full flex-shrink-0 shadow-sm" style={{ background: w.color }} />
                        <span className="text-sm font-semibold text-slate-700 flex-1 truncate">{w.label}</span>
                        <span className="text-[11px] font-medium text-slate-400 flex-shrink-0 flex items-center gap-0.5 whitespace-nowrap">
                          <ArrowUpRight className="w-3 h-3" />{w.time}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

/* ── Helper: animated count-up number ── */
function CountUp({ to, suffix = '', color }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const controls = animate(0, to, {
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: v => setDisplay(Math.round(v)),
        });
        return () => controls.stop();
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return (
    <div
      ref={ref}
      className="text-3xl font-extrabold leading-none tabular-nums drop-shadow-sm"
      style={{ color: color }}
    >
      {display}{suffix}
    </div>
  );
}

/* ── Helper: SVG satisfaction ring ── */
function SatisfactionRing({ value }) {
  const r = 32, circ = 2 * Math.PI * r;
  const dash = (value / 100) * circ;
  return (
    <div className="relative w-[80px] h-[80px] drop-shadow-sm">
      <svg className="rotate-[-90deg]" width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={r} fill="none" stroke="#f1f5f9" strokeWidth="8" />
        <motion.circle
          cx="40" cy="40" r={r} fill="none"
          stroke="url(#ringGrad)" strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: circ - dash }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-extrabold text-slate-800 leading-none">{value}%</span>
      </div>
    </div>
  );
}

export default WhyChooseUs;
