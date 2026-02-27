import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO',
    company: 'TechMart India',
    location: 'Chennai, TN',
    rating: 5,
    text: 'Pondy IT Solutions delivered our e-commerce platform in just 6 weeks — faster than anyone else quoted. The quality is exceptional, and their support team responds within the hour. Highly recommended!',
    avatar: '👨‍💼',
    project: 'E-Commerce Platform',
  },
  {
    name: 'Priya Shankar',
    role: 'Founder',
    company: 'EduLeap',
    location: 'Bangalore, KA',
    rating: 5,
    text: 'We had a complex LMS requirement and Pondy IT team executed it perfectly. They understood our needs from day one, provided regular updates, and the final product exceeded our expectations.',
    avatar: '👩‍💻',
    project: 'Learning Management System',
  },
  {
    name: 'Mohammed Farhan',
    role: 'Operations Head',
    company: 'AlGulf Trading',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'The ERP system they built transformed our business operations. We went from manual spreadsheets to a fully automated system. ROI was visible in the first month itself.',
    avatar: '👨‍🏭',
    project: 'ERP System',
  },
  {
    name: 'Anitha Devi',
    role: 'Director',
    company: 'HealthFirst Clinics',
    location: 'Pondicherry',
    rating: 5,
    text: 'Our telemedicine app is a hit with both patients and doctors. The UI is intuitive, video calls are crystal clear, and the prescription module saves hours of work daily. Great team!',
    avatar: '👩‍⚕️',
    project: 'Telemedicine App',
  },
  {
    name: 'Suresh Balaji',
    role: 'Managing Director',
    company: 'Balaji Motors',
    location: 'Coimbatore, TN',
    rating: 5,
    text: 'They built our dealership management software with custom reports we never thought possible. The after-sales support is brilliant — always available, always helpful.',
    avatar: '👨‍🔧',
    project: 'Dealership Management',
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);

  const goTo = (index, dir = 1) => {
    setDirection(dir);
    setActive(index);
  };

  const next = () => goTo((active + 1) % testimonials.length, 1);
  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length, -1);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [active]);

  const t = testimonials[active];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background orb */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-1 top-0 right-0 opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-rose-200 bg-rose-50 text-rose-600 font-bold text-sm shadow-sm"
          >
            ❤️ Client Love
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
          >
            What Our <span className="grad-text">Clients Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 font-medium max-w-xl mx-auto"
          >
            50+ businesses trust us to build their digital products. Here's what they say.
          </motion.p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              {/* Quote icon */}
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100" strokeWidth={2} />

              {/* Stars */}
              <div className="flex gap-1 mb-6 drop-shadow-sm">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400 border-amber-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 font-medium italic relative z-10">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-50 to-amber-50 border border-slate-200 shadow-sm flex items-center justify-center text-3xl">
                    <span className="drop-shadow-sm">{t.avatar}</span>
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900">{t.name}</div>
                    <div className="text-sm font-semibold text-red-600">{t.role}, {t.company}</div>
                    <div className="text-xs font-medium text-slate-500 mt-0.5">{t.location}</div>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-600 shadow-sm">
                  {t.project}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-200 text-slate-400 hover:text-red-500 hover:bg-slate-50 hover:border-red-200 flex items-center justify-center transition-all bg-white shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > active ? 1 : -1)}
                  className={`rounded-full transition-all duration-300 shadow-sm ${
                    i === active
                      ? 'w-8 h-2.5 bg-gradient-to-r from-red-600 to-amber-500'
                      : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-200 text-slate-400 hover:text-red-500 hover:bg-slate-50 hover:border-red-200 flex items-center justify-center transition-all bg-white shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {[
            { icon: '🏆', label: 'Top-Rated on', platform: 'Clutch.co' },
            { icon: '⭐', label: '5.0 Rating on', platform: 'Google Reviews' },
            { icon: '✅', label: 'Verified on', platform: 'GoodFirms' },
            { icon: '🎖️', label: 'Award Winner', platform: 'India IT Awards' },
          ].map(badge => (
            <div key={badge.platform} className="flex items-center gap-3 bg-white border border-slate-200 shadow-sm rounded-xl p-4 hover:-translate-y-1 transition-transform cursor-default">
              <span className="text-3xl drop-shadow-sm">{badge.icon}</span>
              <div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{badge.label}</div>
                <div className="text-sm font-extrabold text-slate-900">{badge.platform}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Testimonials;
