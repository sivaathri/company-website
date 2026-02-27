import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    const serviceId  = "service_umslbe7";
    const templateId = "template_b3f34ep";
    const publicKey  = "3Irc4beTdMUOxbjU9";

    if (serviceId.startsWith("YOUR_")) {
      setTimeout(() => {
        setStatus({
          type: 'error',
          message: 'Configuration Required: Please set your EmailJS Service ID, Template ID, and Public Key in Contact.jsx.',
        });
        setIsLoading(false);
      }, 1000);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        formRef.current.reset();
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus({
          type: 'error',
          message: `Failed: ${error.text || error.message || 'Check console for details'}`,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-red-600/10 blur-[150px] -z-10 rounded-tr-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Collaborate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Ready to start your next big project? Get in touch with us today for a free consultation and proposal.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 bg-[#121212] rounded-3xl p-6 sm:p-10 border border-white/5 shadow-2xl relative overflow-hidden focus-within:shadow-[0_0_50px_rgba(239,68,68,0.1)] transition-shadow duration-500">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Fill up the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-red-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us At</p>
                  <a
                    href="mailto:pondyitsolutions26@gmail.com"
                    className="font-semibold text-white hover:text-red-400 transition-colors break-all"
                  >
                    pondyitsolutions26@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-red-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Our Location</p>
                  <p className="font-semibold text-white">Pondicherry, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-red-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="font-semibold text-white">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all font-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all font-sans"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all font-sans"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all font-sans resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-3 px-4 py-3 rounded-lg text-sm font-medium ${
                    status.type === 'success'
                      ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                  }`}
                >
                  {status.type === 'success'
                    ? <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    : <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  }
                  <span>{status.message}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white font-bold hover:from-red-500 hover:to-red-400 transition-all flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
