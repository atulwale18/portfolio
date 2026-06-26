import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div 
        className="mb-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Experience & Journey</h2>
        <div className="h-1 w-20 bg-portfolio-accent rounded-full mx-auto"></div>
      </motion.div>

      <div className="relative border-l border-gray-700 ml-3 md:ml-6 space-y-12 pb-4">
        
        {/* Current Experience */}
        <motion.div 
          className="relative pl-8 md:pl-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:hidden absolute w-4 h-4 bg-portfolio-accent rounded-full -left-[9px] top-1 border-4 border-portfolio-bg"></div>
          
          <div className="md:w-1/2 md:pr-12 md:text-right relative">
            <div className="hidden md:block absolute w-4 h-4 bg-portfolio-accent rounded-full -right-[8px] top-1 border-4 border-portfolio-bg z-10"></div>
            <h3 className="text-2xl font-bold text-white">DevOps Intern</h3>
            <span className="text-portfolio-accent font-medium inline-block mb-2">(Current Training)</span>
            <p className="text-portfolio-text-muted mb-4">
              Building hands-on cloud infrastructure and CI/CD projects.
            </p>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {["Linux", "AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible"].map(skill => (
                <span key={skill} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Milestone 2 */}
        <motion.div 
          className="relative pl-8 md:pl-0 flex justify-end"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="md:hidden absolute w-4 h-4 bg-gray-600 rounded-full -left-[9px] top-1 border-4 border-portfolio-bg"></div>
          
          <div className="md:w-1/2 md:pl-12 relative">
            <div className="hidden md:block absolute w-4 h-4 bg-gray-600 rounded-full -left-[8px] top-1 border-4 border-portfolio-bg z-10"></div>
            <h3 className="text-xl font-bold text-white">Started DevOps Journey</h3>
            <span className="text-gray-400 font-medium inline-block mb-2">Foundation</span>
            <p className="text-portfolio-text-muted">
              Began learning Linux administration, bash scripting, and version control using Git & GitHub.
            </p>
          </div>
        </motion.div>

        {/* Milestone 3 */}
        <motion.div 
          className="relative pl-8 md:pl-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="md:hidden absolute w-4 h-4 bg-gray-600 rounded-full -left-[9px] top-1 border-4 border-portfolio-bg"></div>
          
          <div className="md:w-1/2 md:pr-12 md:text-right relative">
            <div className="hidden md:block absolute w-4 h-4 bg-gray-600 rounded-full -right-[8px] top-1 border-4 border-portfolio-bg z-10"></div>
            <h3 className="text-xl font-bold text-white">B.Tech Engineering</h3>
            <span className="text-gray-400 font-medium inline-block mb-2">Electronics and Computer Science</span>
            <p className="text-portfolio-text-muted">
              Pursuing final-year B.Tech, building a strong foundation in computer science and software development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
