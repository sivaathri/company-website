import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  {
    category: 'Frontend',
    color: 'from-blue-50 to-cyan-50',
    border: 'border-blue-100',
    dot: 'bg-blue-500',
    items: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Vue.js', icon: '💚' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Tailwind CSS', icon: '🎨' },
    ],
  },
  {
    category: 'Backend',
    color: 'from-green-50 to-emerald-50',
    border: 'border-green-100',
    dot: 'bg-green-500',
    items: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Laravel', icon: '🔴' },
      { name: 'Python', icon: '🐍' },
      { name: 'Django', icon: '🟩' },
      { name: 'Express.js', icon: '🚂' },
    ],
  },
  {
    category: 'Mobile',
    color: 'from-purple-50 to-pink-50',
    border: 'border-purple-100',
    dot: 'bg-purple-500',
    items: [
      { name: 'React Native', icon: '📱' },
      { name: 'Flutter', icon: '💙' },
      { name: 'iOS (Swift)', icon: '🍎' },
      { name: 'Android (Kotlin)', icon: '🤖' },
      { name: 'Expo', icon: '⚡' },
    ],
  },
  {
    category: 'Database',
    color: 'from-orange-50 to-amber-50',
    border: 'border-orange-100',
    dot: 'bg-orange-500',
    items: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'Redis', icon: '🔴' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: 'from-sky-50 to-indigo-50',
    border: 'border-sky-100',
    dot: 'bg-sky-500',
    items: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Azure', icon: '🔵' },
      { name: 'Docker', icon: '🐳' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'Nginx', icon: '🟢' },
    ],
  },
  {
    category: 'Tools',
    color: 'from-red-50 to-rose-50',
    border: 'border-red-100',
    dot: 'bg-red-500',
    items: [
      { name: 'Git & GitHub', icon: '🐙' },
      { name: 'Figma', icon: '🎭' },
      { name: 'Postman', icon: '📮' },
      { name: 'Jira', icon: '📋' },
      { name: 'Slack', icon: '💬' },
    ],
  },
];

const Technologies = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-teal-200 bg-teal-50 text-teal-600 shadow-sm text-sm font-bold"
          >
            ⚙️ Our Tech Stack
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5"
          >
            Technologies We <span className="grad-text">Master</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 font-medium max-w-2xl mx-auto"
          >
            We use the latest, most reliable technologies to build fast, secure, and scalable products.
          </motion.p>
        </div>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative rounded-2xl border ${cat.border} bg-gradient-to-br ${cat.color} p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`w-3 h-3 rounded-full ${cat.dot} shadow-sm`} />
                <h3 className="text-lg font-extrabold text-slate-900">{cat.category}</h3>
              </div>

              <div className="space-y-3">
                {cat.items.map(item => (
                  <div key={item.name} className="flex items-center gap-3 group bg-white/50 hover:bg-white rounded-lg p-2 transition-colors border border-transparent hover:border-slate-200 shadow-sm hover:shadow">
                    <span className="text-lg drop-shadow-sm">{item.icon}</span>
                    <span className="text-sm font-bold text-slate-700 group-hover:text-red-600 transition-colors">{item.name}</span>
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-amber-400 transition-colors" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip - trusted by */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-slate-400 uppercase tracking-widest font-extrabold mb-8">
            Trusted by businesses across industries
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              '🏪 Retail & E-Commerce',
              '🏥 Healthcare',
              '🏭 Manufacturing',
              '📚 Education',
              '🏗️ Real Estate',
              '🍔 Food & Hospitality',
              '💼 Finance & Fintech',
              '🚗 Logistics',
            ].map(industry => (
              <span key={industry} className="px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-600 hover:text-red-500 hover:border-red-200 transition-colors cursor-pointer">
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Technologies;
