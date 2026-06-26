import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaFileAlt } from 'react-icons/fa';

const certifications = [
  "AWS Solutions Architecture Job Simulation",
  "Google Cloud Agentic AI Day",
  "Core Java Training",
  "Tata GenAI Powered Data Analytics",
  "Adobe India Hackathon"
];

const publications = [
  "Smart Dustbin: Waste Segregation (Dry & Wet)",
  "AI Powered Blood Donor Finder System"
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Certifications */}
        <div>
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Certifications</h2>
            <div className="h-1 w-16 bg-portfolio-accent rounded-full"></div>
          </motion.div>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="bg-portfolio-card p-4 rounded-lg border border-gray-800 flex items-center gap-4 hover:border-portfolio-accent transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <FaCheckCircle className="text-portfolio-accent text-xl flex-shrink-0" />
                <span className="text-portfolio-text font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Research Publications</h2>
            <div className="h-1 w-16 bg-portfolio-accent rounded-full"></div>
          </motion.div>

          <div className="space-y-4">
            {publications.map((pub, index) => (
              <motion.div 
                key={index}
                className="bg-portfolio-card p-4 rounded-lg border border-gray-800 flex items-center gap-4 hover:border-portfolio-accent transition-colors"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <FaFileAlt className="text-portfolio-accent text-xl flex-shrink-0" />
                <span className="text-portfolio-text font-medium">{pub}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
