import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from 'framer-motion';
import { ArrowRight, ChevronDown, Code2, Globe, Smartphone, Layers } from 'lucide-react';

/* ── Typewriter words ── */
const words = ['Web Apps', 'Mobile Apps', 'ERP Systems', 'E-Commerce', 'Custom Software'];

const TypeWriter = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const current = words[wordIndex];

  useEffect(() => {
    let timeout;
    if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex(i => (i + 1) % words.length);
    } else {
      const speed = deleting ? 45 : 90;
      timeout = setTimeout(() => setCharIndex(i => i + (deleting ? -1 : 1)), speed);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, current]);

  return (
    <span
      style={{
        background: 'linear-gradient(to right,#ef4444,#f59e0b,#f97316)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {current.slice(0, charIndex)}
      <span
        className="animate-blink"
        style={{ WebkitTextFillColor: '#ef4444', fontWeight: 400 }}
      >|</span>
    </span>
  );
};

/* ── Floating badge ── */
const FloatingBadge = ({ className, children, delay = 0 }) => (
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay }}
    className={`glass-card rounded-2xl px-4 py-3 flex items-center gap-3 select-none border border-white/10 ${className}`}
  >
    {children}
  </motion.div>
);

/* ── Particle canvas ── */
const ParticleCanvas = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = canvas.width  = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;
    let animId;

    const COUNT = 90;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '220,38,38' : Math.random() > 0.5 ? '245,158,11' : '249,115,22',
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
      });

      // Draw soft lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(220,38,38,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      w = canvas.width  = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
};

/* ── Main Hero ── */
const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });

  const y1    = useTransform(scrollYProgress, [0, 1], [0, -150]);   // orbs parallax
  const y2    = useTransform(scrollYProgress, [0, 1], [0, -80]);    // text parallax
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.93]);
  const op    = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const springCfg = { stiffness: 100, damping: 20 };
  const sy1 = useSpring(y1, springCfg);
  const sy2 = useSpring(y2, springCfg);

  const stats = [
    { value: '50+', label: 'Clients served' },
    { value: '100+', label: 'Projects shipped' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '24/7', label: 'Support' },
  ];

  const services = [
    { icon: <Globe className="w-5 h-5" />, label: 'Web Apps' },
    { icon: <Smartphone className="w-5 h-5" />, label: 'Mobile' },
    { icon: <Layers className="w-5 h-5" />, label: 'ERP / CRM' },
    { icon: <Code2 className="w-5 h-5" />, label: 'Custom Dev' },
  ];

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* ── Particle canvas ── */}
      <ParticleCanvas />

      {/* ── Parallax Orbs ── */}
      <motion.div style={{ y: sy1 }} className="absolute inset-0 pointer-events-none">
        <div className="orb orb-1 top-[5%] left-[10%]" />
        <div className="orb orb-2 bottom-[10%] right-[8%]" />
        <div className="orb orb-3 top-[40%] right-[20%]" />
      </motion.div>

      {/* ── Grid ── */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      {/* ── Radial vignette ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, #0d0d0f 100%)' }}
      />

      {/* ── Main text ── */}
      <motion.div style={{ y: sy2, scale, opacity: op }} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          Technology Partner for Startups & Enterprises
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          We Build<br />
          <TypeWriter />
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Pondy IT Solutions is a premium technology partner helping ambitious teams build
          scalable, beautiful digital products at startup speed.
        </motion.p>

        {/* Service pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {services.map(s => (
            <span
              key={s.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                bg-white/5 border border-white/10 text-slate-300 hover:border-red-500/40 hover:bg-red-500/10
                cursor-default transition-all duration-300"
            >
              <span className="text-red-400">{s.icon}</span>
              {s.label}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#contact"
            className="btn-shimmer group relative px-8 py-4 rounded-2xl font-semibold text-white
              bg-gradient-to-r from-red-600 via-rose-600 to-amber-500
              shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)]
              transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="group px-8 py-4 rounded-2xl font-semibold text-slate-300 hover:text-white
              border border-white/10 bg-white/[0.03] backdrop-blur-sm
              hover:bg-white/[0.07] hover:border-red-500/30
              transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Explore Services
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((s, i) => (
            <div key={i} className="glass-card rounded-2xl px-4 py-4 border border-white/5">
              <div className="stat-number text-2xl sm:text-3xl mb-1">{s.value}</div>
              <div className="text-xs text-slate-500 font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Floating badges ── */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <FloatingBadge className="absolute top-[22%] left-[6%]" delay={0}>
          <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">✓</span>
          <div>
            <div className="text-xs font-semibold text-white">99.9% Uptime</div>
            <div className="text-[10px] text-slate-500">SLA Guaranteed</div>
          </div>
        </FloatingBadge>

        <FloatingBadge className="absolute top-[28%] right-[6%]" delay={1.5}>
          <span className="text-2xl">🚀</span>
          <div>
            <div className="text-xs font-semibold text-white">Fast Delivery</div>
            <div className="text-[10px] text-slate-500">2–4 week sprints</div>
          </div>
        </FloatingBadge>

        <FloatingBadge className="absolute bottom-[22%] left-[8%]" delay={0.8}>
          <span className="text-2xl">⭐</span>
          <div>
            <div className="text-xs font-semibold text-white">5.0 Rating</div>
            <div className="text-[10px] text-slate-500">50+ happy clients</div>
          </div>
        </FloatingBadge>
      </div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-slate-600 uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-red-400 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
