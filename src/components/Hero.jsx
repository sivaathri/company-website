import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Code, Cpu, Globe, Layout, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-sm font-medium text-red-100">Innovate • Transform • Grow</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Powering Businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">Intelligent</span> Digital Solutions
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Pondy IT Solutions is a premium technology partner helping startups and enterprises build scalable web, mobile, and custom software applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold hover:from-red-500 hover:to-red-400 transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transform hover:-translate-y-1"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="group flex items-center justify-center px-8 py-4 rounded-lg border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold hover:bg-white/10 transition-all transform hover:-translate-y-1"
              >
                View Our Services
                <ChevronRight className="ml-1 w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Testimonial / Social Proof Snippet */}
            {/* <div className="mt-12 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-10 h-10 rounded-full border-2 border-[#0f0f0f]" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-500">
                  {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <span className="text-gray-400 text-xs">Trusted by 50+ global clients</span>
              </div>
            </div> */}
          </motion.div>

          {/* Abstract Hero Image / Mockup Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-3xl transform rotate-3 scale-105 border border-white/10 backdrop-blur-sm"></div>
              <div className="absolute inset-0 glass-panel rounded-3xl overflow-hidden p-6 border border-white/20 shadow-[-20px_20px_60px_rgba(0,0,0,0.5)] flex flex-col shadow-[0_0_40px_rgba(239,68,68,0.15)]">
                {/* Simulated UI block */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-4 w-24 bg-white/10 rounded-full"></div>
                </div>
                
                <div className="flex-1 flex flex-col gap-4">
                  <div className="h-32 bg-gradient-to-br from-red-500/20 to-transparent rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
                     <Cpu className="text-red-400 w-12 h-12 opacity-50" />
                     <div className="absolute inset-0 bg-gradient-to-t from-red-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 flex-1">
                    <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between hover:bg-white/10 transition-colors">
                      <Layout className="text-gray-400 w-6 h-6" />
                      <div>
                        <div className="h-2 w-12 bg-white/20 rounded-full mb-2"></div>
                        <div className="h-2 w-8 bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between hover:bg-white/10 transition-colors">
                      <Smartphone className="text-gray-400 w-6 h-6" />
                      <div>
                        <div className="h-2 w-16 bg-white/20 rounded-full mb-2"></div>
                        <div className="h-2 w-10 bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between hover:bg-white/10 transition-colors">
                      <Code className="text-gray-400 w-6 h-6" />
                      <div>
                        <div className="h-2 w-10 bg-white/20 rounded-full mb-2"></div>
                        <div className="h-2 w-14 bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between hover:bg-white/10 transition-colors">
                      <Globe className="text-gray-400 w-6 h-6" />
                      <div>
                        <div className="h-2 w-14 bg-white/20 rounded-full mb-2"></div>
                        <div className="h-2 w-12 bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
               animate={{ y: [0, -10, 0] }} 
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-12 top-20 glass-panel p-4 rounded-xl flex items-center space-x-3 shadow-2xl border-white/10"
            >
               <div className="bg-green-500/20 p-2 rounded-full">
                  <span className="text-green-400 font-bold">99.9%</span>
               </div>
               <span className="text-sm font-medium">Uptime Guarantee</span>
            </motion.div>
            
            <motion.div 
               animate={{ y: [0, 10, 0] }} 
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -left-8 bottom-20 glass-panel p-4 rounded-xl flex items-center space-x-3 shadow-2xl border-white/10"
            >
               <div className="bg-red-500/20 p-2 rounded-full">
                  <Gamepad className="text-red-400 w-5 h-5" />
               </div>
               <span className="text-sm font-medium">Fast Delivery</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Quick shim for Gamepad icon
import { Gamepad2 as Gamepad } from 'lucide-react';

export default Hero;
