import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Loader2, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';

const inputClass = `
  w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm
  placeholder-slate-600 font-medium
  focus:outline-none focus:border-red-500/60 focus:bg-red-500/[0.04]
  transition-all duration-300 resize-none
`;

const Contact = () => {
  const formRef      = useRef(null);
  const sectionRef   = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus]       = useState({ type: '', message: '' });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const yLeft  = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const yOrb   = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    const serviceId  = 'service_umslbe7';
    const templateId = 'template_b3f34ep';
    const publicKey  = '3Irc4beTdMUOxbjU9';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus({ type: 'success', message: "Message sent! We'll get back to you within 24 hours." });
        formRef.current.reset();
        setTimeout(() => setStatus({ type: '', message: '' }), 6000);
      })
      .catch((err) => {
        setStatus({ type: 'error', message: `Failed to send: ${err.text || err.message || 'Please try again.'}` });
      })
      .finally(() => setIsLoading(false));
  };

  const contactItems = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email Us', value: 'pondyitsolutions26@gmail.com', href: 'mailto:pondyitsolutions26@gmail.com', color: '#dc2626' },
    { icon: <Phone className="w-5 h-5" />, label: 'Call Us', value: '+91 98765 43210', href: 'tel:+919876543210', color: '#f59e0b' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Pondicherry, India', href: null, color: '#f97316' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-28 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Parallax orb */}
      <motion.div style={{ y: yOrb }} className="absolute left-0 bottom-0 w-[600px] h-[600px] pointer-events-none">
        <div className="orb orb-2 w-full h-full opacity-20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm font-medium"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Let's Build Together
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
          >
            Let's{' '}
            <span style={{
              background: 'linear-gradient(to right,#ef4444,#f59e0b)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Collaborate
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-lg text-slate-400 max-w-xl mx-auto"
          >
            Ready to build something extraordinary? Tell us about your project and we'll respond within 24 hours.
          </motion.p>
        </div>

        {/* Main container */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: Contact info */}
          <motion.div style={{ y: yLeft }} className="lg:col-span-2 space-y-5">
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02]
                  hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}35`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium mb-0.5">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-semibold text-white hover:text-amber-400 transition-colors break-all">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-white">{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Response time badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex items-center gap-3 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05]"
            >
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-white">Average response time</div>
                <div className="text-xs text-slate-500">Usually within 2–4 hours</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div style={{ y: yRight }} className="lg:col-span-3">
            <div className="glass-card rounded-3xl p-8 border border-white/[0.08] relative overflow-hidden">
              {/* Card inner glow — red tint */}
              <div className="absolute -top-20 -right-20 w-48 h-48 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.1), transparent 70%)' }}
              />
              {/* Gold bottom accent */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.08), transparent 70%)' }}
              />

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Full Name</label>
                    <input type="text" name="from_name" required placeholder="John Doe" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Email Address</label>
                    <input type="email" name="from_email" required placeholder="john@company.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Subject</label>
                  <input type="text" name="subject" required placeholder="Project Inquiry" className={inputClass} />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Your Message</label>
                  <textarea name="message" required rows={5} placeholder="Tell us about your project, timeline, and budget..." className={inputClass} />
                </div>

                {/* Status */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                      status.type === 'success'
                        ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                        : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'
                    }`}
                  >
                    {status.type === 'success'
                      ? <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      : <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />}
                    <span>{status.message}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-shimmer w-full py-4 rounded-2xl font-bold text-white flex justify-center items-center gap-2.5
                    bg-gradient-to-r from-red-600 via-rose-600 to-amber-500
                    shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-300 hover:-translate-y-0.5"
                >
                  {isLoading ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                  ) : (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Contact;
