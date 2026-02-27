import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'TasteRush – Food Delivery App',
    category: 'Mobile App',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    description: 'Full-featured food delivery platform with real-time tracking, payment integration, and driver app.',
    gradient: 'from-red-50 to-amber-50',
    border: 'border-red-100',
    badge: 'iOS & Android',
    badgeColor: 'bg-red-100 text-red-700 border-red-200',
    emoji: '🍔',
    stats: ['50K+ Users', '4.8★ Rating', '3 City Launch'],
  },
  {
    title: 'ShopNest – E-Commerce Platform',
    category: 'E-Commerce',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    description: 'Multi-vendor marketplace with advanced inventory, analytics dashboard, and COD/online payments.',
    gradient: 'from-amber-50 to-orange-50',
    border: 'border-amber-100',
    badge: 'Web Platform',
    badgeColor: 'bg-amber-100 text-amber-700 border-amber-200',
    emoji: '🛒',
    stats: ['₹2Cr+ GMV', '200+ Vendors', '99.9% Uptime'],
  },
  {
    title: 'FactoryFlow – ERP System',
    category: 'ERP Solution',
    tech: ['React', 'Laravel', 'MySQL'],
    description: 'Complete manufacturing ERP with inventory, production planning, HR, payroll, and custom reports.',
    gradient: 'from-rose-50 to-red-50',
    border: 'border-rose-100',
    badge: 'Enterprise',
    badgeColor: 'bg-rose-100 text-rose-700 border-rose-200',
    emoji: '🏭',
    stats: ['300+ Employees', '5 Modules', '40% More Efficient'],
  },
  {
    title: 'MedConnect – Doctor Booking',
    category: 'Health Tech',
    tech: ['React', 'Node.js', 'Firebase'],
    description: 'Telemedicine platform connecting patients with doctors via video consultations and digital prescriptions.',
    gradient: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-100',
    badge: 'Healthcare',
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    emoji: '🏥',
    stats: ['10K+ Patients', '100+ Doctors', 'Pan India'],
  },
  {
    title: 'LearnSphere – LMS Portal',
    category: 'Ed-Tech',
    tech: ['Next.js', 'Python', 'AWS'],
    description: 'Feature-rich learning management system with video courses, quizzes, certificates, and analytics.',
    gradient: 'from-violet-50 to-purple-50',
    border: 'border-violet-100',
    badge: 'Education',
    badgeColor: 'bg-violet-100 text-violet-700 border-violet-200',
    emoji: '📚',
    stats: ['5K+ Students', '200+ Courses', '92% Completion'],
  },
  {
    title: 'ParkEasy – Smart Parking',
    category: 'SaaS',
    tech: ['React Native', 'IoT', 'Node.js'],
    description: 'IoT-integrated smart parking management with real-time slot availability and automated billing.',
    gradient: 'from-cyan-50 to-blue-50',
    border: 'border-cyan-100',
    badge: 'Smart City',
    badgeColor: 'bg-cyan-100 text-cyan-700 border-cyan-200',
    emoji: '🅿️',
    stats: ['500+ Slots', 'Real-time IoT', 'Pondicherry'],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background orb */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] orb orb-2 opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-blue-200 bg-blue-50 text-blue-600 font-bold text-sm shadow-sm"
          >
            💼 Our Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight"
          >
            Featured <span className="grad-text">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 font-medium max-w-2xl mx-auto"
          >
            Real products shipped for real businesses. Each project is built with care, performance, and scalability in mind.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative rounded-2xl border ${project.border} bg-white backdrop-blur-sm overflow-hidden p-6 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg`}
            >
              {/* Background gradient hint */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 z-0 pointer-events-none`} />

              <div className="relative z-10">
                {/* Category badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-xs px-2.5 py-1 rounded-full border shadow-sm font-bold ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors drop-shadow-sm" />
                </div>

                {/* Emoji */}
                <div className="text-4xl mb-4 drop-shadow-sm">{project.emoji}</div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stats.map(stat => (
                    <span key={stat} className="text-xs font-bold px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-600 shadow-sm">
                      {stat}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-semibold shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#contact"
            className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white
              bg-gradient-to-r from-red-600 to-amber-500
              shadow-[0_4px_15px_rgba(220,38,38,0.25)] hover:shadow-[0_8px_25px_rgba(220,38,38,0.4)]
              transition-all duration-300 hover:-translate-y-1"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Portfolio;
