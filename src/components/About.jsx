import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Expand, HeadphonesIcon } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      title: 'Innovation',
      description: 'We leverage the latest technologies to build forward-thinking solutions that keep you ahead of the curve.',
      icon: <Lightbulb className="w-8 h-8 text-red-500" />,
    },
    {
      title: 'Scalability',
      description: 'Our architectures are designed to grow with your business, ensuring seamless performance at any scale.',
      icon: <Expand className="w-8 h-8 text-red-500" />,
    },
    {
      title: '24/7 Support',
      description: 'We provide continuous maintenance and support to ensure your digital products run flawlessly.',
      icon: <HeadphonesIcon className="w-8 h-8 text-red-500" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 blur-[150px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Pondy IT Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 leading-relaxed text-left md:text-center"
          >
            We are a dynamic technology startup based in Pondicherry, India, specializing in crafting cutting-edge web, mobile, and enterprise software solutions. 
            Our mission is to transform complex business challenges into intuitive, scalable, and high-performing digital products.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-red-500/30 group"
            >
              <div className="w-16 h-16 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
