import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, MessageSquare, Code2 } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Startup Friendly Pricing',
      description: 'We offer flexible, cost-effective models designed specifically to help new businesses scale without breaking the bank.',
      icon: <CheckCircle2 className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Fast & Agile Delivery',
      description: 'Rapid prototyping and iterative development sprints to get your product to market faster.',
      icon: <Zap className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Direct Developer Communication',
      description: 'No middle-men. You talk directly with the engineers building your product for complete transparency.',
      icon: <MessageSquare className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Modern Tech Stack',
      description: 'We exclusively use state-of-the-art technologies (React, Node, Next.js, AWS) for unmatched performance.',
      icon: <Code2 className="w-6 h-6 text-red-500" />
    }
  ];

  return (
    <section className="py-24 relative bg-[#0a0a0a]">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Choose Us?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              At Pondy IT Solutions, we act as your dedicated engineering team. We don't just write code; we partner with you to solve complex business problems using the latest technological innovations.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex bg-white/5 rounded-xl p-4 border border-white/5 hover:border-red-500/20 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">{reason.icon}</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-white mb-1">{reason.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Decorative Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-red-600/10 blur-[100px] rounded-full" />
            <div className="relative glass-panel rounded-3xl p-8 border border-white/10 shadow-2xl">
               <div className="space-y-4">
                 <div className="h-4 w-1/3 bg-white/10 rounded-full" />
                 <div className="h-4 w-full bg-white/5 rounded-full" />
                 <div className="h-4 w-5/6 bg-white/5 rounded-full" />
                 <div className="h-4 w-2/3 bg-white/5 rounded-full" />
                 
                 <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="h-24 bg-gradient-to-br from-red-600/20 to-transparent rounded-xl flex items-center justify-center border border-red-500/20">
                      <span className="text-2xl font-black text-red-500">100+</span>
                    </div>
                    <div className="h-24 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                      <span className="text-2xl font-black text-white">24/7</span>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
