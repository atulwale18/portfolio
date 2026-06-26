import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
        <div className="h-1 w-20 bg-portfolio-accent rounded-full"></div>
      </motion.div>

      <motion.div 
        className="bg-[#0d1117] rounded-xl border border-gray-800 shadow-2xl overflow-hidden font-mono text-sm md:text-base"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Terminal Header */}
        <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-gray-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center text-gray-400 text-xs">
            atul@ubuntu: ~/portfolio
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 text-gray-300 space-y-4">
          <p>
            <span className="text-portfolio-accent">atul@ubuntu:~$</span> cat about_me.txt
          </p>
          <motion.div 
            className="pl-4 text-portfolio-text space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p>
              I'm <span className="font-bold text-white">Atul Wale</span>, a final-year B.Tech student in Electronics and Computer Science with a strong interest in DevOps and Cloud Engineering.
            </p>
            <p>
              My learning journey began with Linux and Git, and has expanded to Docker, AWS, Kubernetes, Infrastructure as Code, and CI/CD. I enjoy building real-world projects that automate deployments and simplify infrastructure management.
            </p>
            <p>
              My goal is to start my career as a DevOps Engineer where I can contribute to cloud infrastructure, automation, and modern deployment practices.
            </p>
          </motion.div>
          <p className="animate-pulse text-portfolio-accent mt-4">_</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
