import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MonitorPlay, Layers, Database, ShoppingCart, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
      icon: <Smartphone className="w-8 h-8" />,
      colSpan: 'lg:col-span-2'
    },
    {
      title: 'Web Application Development',
      description: 'Scalable, secure, and responsive web applications built with modern frontend and backend technologies.',
      icon: <MonitorPlay className="w-8 h-8" />,
      colSpan: 'lg:col-span-1'
    },
    {
      title: 'Custom Software Development',
      description: 'Tailor-made software solutions designed specifically to address your unique business requirements and workflows.',
      icon: <Layers className="w-8 h-8" />,
      colSpan: 'lg:col-span-1'
    },
    {
      title: 'ERP & CRM Development',
      description: 'Comprehensive enterprise resource planning and customer relationship management systems for operational efficiency.',
      icon: <Database className="w-8 h-8" />,
      colSpan: 'lg:col-span-1'
    },
    {
      title: 'E-Commerce Development',
      description: 'High-converting online stores with secure payment gateways, inventory management, and seamless checkouts.',
      icon: <ShoppingCart className="w-8 h-8" />,
      colSpan: 'lg:col-span-1'
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-[#0a0a0a]">
      {/* Top and Bottom soft borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Services</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400"
            >
              Comprehensive digital solutions to accelerate your business growth. We combine strategy, design, and engineering to build products that matter.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="flex-shrink-0 flex items-center text-red-500 hover:text-red-400 font-medium transition-colors group"
          >
            Start a project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-panel p-8 rounded-2xl group hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300 flex flex-col h-full bg-white/5 ${service.colSpan}`}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/20 to-red-500/5 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 group-hover:text-red-300 transition-all duration-300 border border-red-500/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-red-100 transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mt-auto">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
