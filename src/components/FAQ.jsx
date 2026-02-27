import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How much does it cost to build a website or app?',
    a: 'Pricing depends on the complexity, features, and timeline. A basic website starts from ₹25,000, a full web application from ₹75,000, and a mobile app from ₹1,50,000. We offer free consultations to give you an accurate quote tailored to your needs.',
  },
  {
    q: 'How long does it take to complete a project?',
    a: 'A standard website takes 2–4 weeks. A web application takes 4–12 weeks. Mobile apps take 6–16 weeks. ERP/CRM systems take 8–24 weeks. These timelines depend on scope and feature complexity.',
  },
  {
    q: 'Do you provide post-launch support and maintenance?',
    a: 'Yes! We offer flexible support packages — monthly retainer plans for bug fixes, feature additions, server management, security patches, and 24/7 uptime monitoring. We are available via WhatsApp, email, and phone.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'We work with React, Next.js, Node.js, Laravel, Python, React Native, Flutter, MongoDB, PostgreSQL, MySQL, AWS, Azure, Firebase, and more. We choose the best tech stack for your specific use case.',
  },
  {
    q: 'Can you work with our existing team or take over an existing project?',
    a: 'Absolutely! We frequently integrate with existing teams as dedicated developers. We can also audit, optimize, and take over existing codebases from other vendors — including bug-ridden or poorly built projects.',
  },
  {
    q: 'Do you sign an NDA to protect our idea?',
    a: 'Yes, we sign a Non-Disclosure Agreement (NDA) before any project discussions. Your idea, code, and business data are 100% confidential. All IP rights are transferred to you upon project completion and final payment.',
  },
  {
    q: 'Can you handle international projects remotely?',
    a: 'Yes! We have clients across the UAE, USA, UK, Australia, Singapore, and more. We work in your time zone, communicate via Slack/Teams/Zoom, and deliver high-quality results regardless of geography.',
  },
  {
    q: 'What is your payment structure?',
    a: 'We follow a milestone-based payment model: typically 30% advance, 40% at midpoint, and 30% on delivery. For ongoing projects or retainers, we bill monthly. We accept bank transfers, UPI, and international wire transfers.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-sky-200 bg-sky-50 text-sky-600 font-bold text-sm shadow-sm"
            >
              ❓ Common Questions
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Frequently Asked <span className="grad-text">Questions</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 font-medium mb-8 leading-relaxed"
            >
              Have more questions? We're happy to help. Reach out to our team anytime!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]"
            >
              <div className="text-4xl mb-4 drop-shadow-sm">💬</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Still have questions?</h3>
              <p className="text-sm font-medium text-slate-500 mb-6">Our team is available Mon–Sat, 9 AM – 6 PM IST</p>
              <div className="flex flex-col gap-3">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-red-600 text-sm font-bold hover:text-red-500 transition-colors bg-red-50 p-3 rounded-xl border border-red-100">
                  <span className="text-lg">📞</span> +91 98765 43210
                </a>
                <a href="mailto:info@pondyitsolutions.com" className="flex items-center gap-3 text-slate-700 text-sm font-bold hover:text-slate-900 transition-colors bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="text-lg">✉️</span> info@pondyitsolutions.com
                </a>
                <a href="https://wa.me/919876543210" className="flex items-center gap-3 text-emerald-600 text-sm font-bold hover:text-emerald-500 transition-colors bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                  <span className="text-lg">💬</span> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right – FAQ List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                  open === i
                    ? 'border-red-200 bg-red-50/50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow'
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className={`font-extrabold text-sm md:text-base transition-colors ${open === i ? 'text-red-600' : 'text-slate-800'}`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all border ${
                    open === i ? 'bg-red-600 text-white border-red-600 shadow-md' : 'bg-slate-50 text-slate-400 border-slate-200'
                  }`}>
                    {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-6 text-slate-600 font-medium text-sm leading-relaxed border-t border-red-100 pt-4 mt-2">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default FAQ;
