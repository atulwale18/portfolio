import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div 
        className="mb-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Get In Touch</h2>
        <div className="h-1 w-20 bg-portfolio-accent rounded-full mx-auto"></div>
        <p className="mt-6 text-portfolio-text-muted">
          I'm currently looking for new opportunities as a DevOps Engineer. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 text-portfolio-text">
            <div className="w-12 h-12 bg-[#161b22] rounded-full flex items-center justify-center text-portfolio-accent border border-gray-800">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <p className="text-sm text-portfolio-text-muted">Email</p>
              <a href="mailto:contact@example.com" className="font-semibold hover:text-portfolio-accent transition-colors">contact@example.com</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-portfolio-text">
            <div className="w-12 h-12 bg-[#161b22] rounded-full flex items-center justify-center text-portfolio-accent border border-gray-800">
              <FaPhoneAlt className="text-xl" />
            </div>
            <div>
              <p className="text-sm text-portfolio-text-muted">Phone</p>
              <a href="tel:+910000000000" className="font-semibold hover:text-portfolio-accent transition-colors">+91 00000 00000</a>
            </div>
          </div>

          <div className="flex items-center gap-4 text-portfolio-text">
            <div className="w-12 h-12 bg-[#161b22] rounded-full flex items-center justify-center text-portfolio-accent border border-gray-800">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <div>
              <p className="text-sm text-portfolio-text-muted">Location</p>
              <p className="font-semibold">Sangli, Maharashtra</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-[#0d1117] p-8 rounded-xl border border-gray-800 flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Connect with me</h3>
          <div className="flex gap-4 mb-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#161b22] hover:bg-portfolio-accent hover:text-portfolio-bg rounded-full flex items-center justify-center transition-all duration-300 text-white border border-gray-800">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#161b22] hover:bg-portfolio-accent hover:text-portfolio-bg rounded-full flex items-center justify-center transition-all duration-300 text-white border border-gray-800">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
          <a href="mailto:contact@example.com" className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-portfolio-bg font-bold py-3 px-8 rounded-lg transition-colors w-full">
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
