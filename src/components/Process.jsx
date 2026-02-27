import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { id: '01', title: 'Requirement Analysis', description: 'We start by understanding your business goals, target audience, and functional requirements deeply.' },
    { id: '02', title: 'UI/UX Design', description: 'Creating intuitive wireframes and stunning interfaces that guarantee exceptional user engagement.' },
    { id: '03', title: 'Development', description: 'Writing clean, scalable code using modern technologies aligned with the project scope.' },
    { id: '04', title: 'Testing', description: 'Rigorous QA testing to ensure your product is bug-free, secure, and performs optimally.' },
    { id: '05', title: 'Deployment', description: 'Smooth launch to production environments, App Stores, or custom servers with zero downtime.' },
    { id: '06', title: 'Support', description: 'Ongoing maintenance, updates, and monitoring to keep your software running perfectly.' },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-red-600/5 blur-[200px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Development Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            A streamlined, transparent, and agile approach to bringing your ideas to life.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line for larger screens */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className={`md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-12' : 'md:justify-start md:order-2 md:pl-12'} mb-8 md:mb-0 w-full`}>
                    <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-red-500 w-full md:w-5/6 relative hover:-translate-y-1 transition-transform group">
                      <span className="text-6xl font-black text-white/5 absolute -top-4 right-4 group-hover:text-red-500/10 transition-colors pointer-events-none">
                        {step.id}
                      </span>
                      <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-[#0f0f0f] bg-gradient-to-br from-red-600 to-red-500 items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(239,68,68,0.5)] z-10">
                    {step.id}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
