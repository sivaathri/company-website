import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ChevronDown, Phone, Play } from 'lucide-react';

/* ── Typewriter words ── */
const words = ['Web Applications', 'Mobile Apps', 'ERP Systems', 'E-Commerce Stores', 'Custom Software'];

const TypeWriter = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const current = words[wordIndex];

  useEffect(() => {
    let timeout;
    if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex(i => (i + 1) % words.length);
    } else {
      const speed = deleting ? 40 : 80;
      timeout = setTimeout(() => setCharIndex(i => i + (deleting ? -1 : 1)), speed);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, current]);

  return (
    <span className="grad-text">
      {current.slice(0, charIndex)}
      <span
        className="animate-blink"
        style={{ WebkitTextFillColor: '#ef4444', color: '#ef4444', fontWeight: 400 }}
      >|</span>
    </span>
  );
};

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

    const COUNT = 60;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.4 + 0.1,
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
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(220,38,38,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    draw();
    const onResize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-70" style={{ pointerEvents: 'none' }} />;
};

/* ── Counter ── */
const CountUp = ({ end, suffix = '' }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const steps = 50;
        const inc = end / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += inc;
          if (current >= end) { setValue(end); clearInterval(timer); }
          else setValue(Math.floor(current));
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return <span ref={ref}>{value}{suffix}</span>;
};

const stats = [
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

const techBadges = ['React', 'Next.js', 'Node.js', 'React Native', 'MongoDB', 'AWS', 'Laravel', 'Python'];

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });

  const y1    = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2    = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.93]);
  const op    = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const springCfg = { stiffness: 100, damping: 20 };
  const sy1 = useSpring(y1, springCfg);
  const sy2 = useSpring(y2, springCfg);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex flex-col overflow-hidden bg-slate-50">
      <ParticleCanvas />

      {/* Parallax Orbs */}
      <motion.div style={{ y: sy1 }} className="absolute inset-0 pointer-events-none">
        <div className="orb orb-1 top-[5%] left-[5%]" />
        <div className="orb orb-2 bottom-[10%] right-[8%]" />
        <div className="orb orb-3 top-[40%] right-[20%]" />
      </motion.div>

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Vignette - reversed for light mode */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(255,255,255,0.4) 40%, transparent 100%)' }}
      />

      {/* ── MAIN HERO CONTENT ── */}
      <motion.div
        style={{ y: sy2, scale, opacity: op }}
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 min-h-screen"
      >
        {/* Left Content */}
        <div className="flex-1 max-w-2xl lg:max-w-none lg:flex-[0_0_55%]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-red-200 bg-red-50 text-red-600 shadow-sm text-sm font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            🏆 Top-Rated IT Company in Pondicherry
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] mb-6 text-slate-900"
          >
            We Build<br />
            <TypeWriter />
            <br />
            <span className="text-slate-700 text-3xl sm:text-4xl lg:text-5xl font-semibold">That Drive Results</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl"
          >
            Pondy IT Solutions delivers cutting-edge web, mobile, and enterprise solutions. 
            From startups to enterprises — we turn your vision into powerful digital products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#contact"
              className="btn-shimmer group relative px-7 py-3.5 rounded-xl font-semibold text-white
                bg-gradient-to-r from-red-600 via-rose-600 to-amber-500
                shadow-[0_4px_20px_rgba(220,38,38,0.3)] hover:shadow-[0_8px_30px_rgba(220,38,38,0.4)]
                transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 text-sm"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+919876543210"
              className="group px-7 py-3.5 rounded-xl font-semibold text-slate-700 hover:text-slate-900
                border border-slate-200 bg-white shadow-sm hover:border-red-300
                transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-red-500" />
              Call: +91 98765 43210
            </a>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            <span className="text-xs text-slate-500 font-semibold self-center mr-1">Technologies:</span>
            {techBadges.map(tech => (
              <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 font-medium shadow-sm">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Visual Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="hidden lg:block flex-[0_0_40%] mt-12 lg:mt-0"
        >
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl border border-slate-100 p-6 shadow-2xl backdrop-blur-sm z-10" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }}>
              <div className="absolute inset-0 rounded-3xl opacity-30" style={{ background: 'radial-gradient(ellipse at top left, rgba(220,38,38,0.1), transparent 60%)' }} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center shadow-lg shadow-red-500/30">
                    <span className="text-lg">🚀</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Project Launched!</div>
                    <div className="text-xs text-slate-500 font-medium">E-Commerce Platform</div>
                  </div>
                  <span className="ml-auto text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 font-semibold">Live ✓</span>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Design', pct: 100, color: 'from-red-600 to-rose-500' },
                    { label: 'Backend', pct: 100, color: 'from-amber-500 to-orange-500' },
                    { label: 'Frontend', pct: 100, color: 'from-red-500 to-amber-500' },
                    { label: 'Testing', pct: 95, color: 'from-rose-600 to-red-700' },
                  ].map(item => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs text-slate-600 font-medium mb-1">
                        <span>{item.label}</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.pct}%` }}
                          transition={{ duration: 1.5, delay: 0.8 }}
                          className={`h-full rounded-full bg-gradient-to-r ${item.color} shadow-sm`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                  {[
                    { n: '2 Wks', l: 'Fast Delivery' },
                    { n: '100%', l: 'Satisfaction' },
                    { n: '24/7', l: 'Support' },
                  ].map(item => (
                    <div key={item.l} className="text-center">
                      <div className="text-base font-extrabold text-slate-900">{item.n}</div>
                      <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{item.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge 1 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-100 px-4 py-3 flex items-center gap-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] z-20"
            >
              <span className="text-2xl drop-shadow-sm">⭐</span>
              <div>
                <div className="text-sm font-extrabold text-slate-900">5.0 / 5.0</div>
                <div className="text-xs text-slate-500 font-medium">Google Reviews</div>
              </div>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-100 px-4 py-3 flex items-center gap-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] z-20"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold border border-blue-100">50</div>
              <div>
                <div className="text-sm font-extrabold text-slate-900">50+ Clients</div>
                <div className="text-xs text-slate-500 font-medium">Across 8 countries</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Counter Strip ── */}
      <div className="relative z-10 w-full border-t border-b border-slate-200 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                className="text-center"
              >
                <div className="stat-number text-3xl sm:text-4xl font-extrabold mb-1 drop-shadow-sm">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center pt-1.5 bg-white shadow-sm"
        >
          <div className="w-1 h-2 rounded-full bg-red-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
