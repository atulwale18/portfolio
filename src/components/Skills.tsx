import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: "Cloud", items: ["AWS"] },
  { category: "Containers", items: ["Docker", "Kubernetes"] },
  { category: "Infrastructure as Code", items: ["Terraform"] },
  { category: "Configuration Management", items: ["Ansible"] },
  { category: "CI/CD", items: ["Jenkins"] },
  { category: "Version Control", items: ["Git", "GitHub"] },
  { category: "Operating System", items: ["Linux"] },
  { category: "Scripting", items: ["Bash", "Python"] },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div 
        className="mb-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Technical Skills</h2>
        <div className="h-1 w-20 bg-portfolio-accent rounded-full mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((skillGroup, index) => (
          <motion.div 
            key={skillGroup.category}
            className="bg-portfolio-card p-6 rounded-xl border border-gray-800 hover:border-portfolio-accent hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-4 group-hover:text-portfolio-accent transition-colors">
              {skillGroup.category}
            </h3>
            <ul className="space-y-2">
              {skillGroup.items.map((item) => (
                <li key={item} className="text-portfolio-text-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-accent"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
