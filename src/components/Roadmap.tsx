import React from 'react';
import { motion } from 'framer-motion';

const roadmapSteps = [
  "Linux",
  "Git & GitHub",
  "Docker",
  "AWS",
  "Kubernetes",
  "Jenkins",
  "Terraform",
  "Ansible"
];

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div 
        className="mb-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">DevOps Roadmap</h2>
        <div className="h-1 w-20 bg-portfolio-accent rounded-full mx-auto"></div>
      </motion.div>

      <div className="flex flex-col items-center relative">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 w-1 bg-gray-800 left-1/2 transform -translate-x-1/2"></div>
        
        {roadmapSteps.map((step, index) => (
          <motion.div 
            key={step}
            className={`relative flex items-center w-full my-6 ${index % 2 === 0 ? 'justify-end md:pr-[50%] md:justify-start' : 'justify-start md:pl-[50%] md:justify-end'} md:even:flex-row-reverse`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-portfolio-accent border-4 border-portfolio-bg z-10 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
            
            {/* Content Box */}
            <div className={`w-full md:w-5/12 bg-portfolio-card p-4 rounded-lg border border-gray-800 hover:border-portfolio-accent transition-colors text-center md:text-left ${index % 2 === 0 ? 'md:mr-8 md:text-right ml-8' : 'md:ml-8 md:text-left mr-8'}`}>
              <h3 className="text-xl font-bold text-white">{step}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
