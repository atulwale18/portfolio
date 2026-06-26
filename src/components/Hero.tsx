import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { DiLinux, DiAws, DiGit, DiDocker, DiPython, DiJenkins } from 'react-icons/di';
import { SiKubernetes, SiTerraform, SiAnsible, SiGnubash } from 'react-icons/si';
import profileImg from '../assets/profile.jpg';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      
      {/* Floating Cloud Background Elements */}
      <div className="absolute top-20 left-10 text-portfolio-accent/10 text-9xl animate-float z-0">
        <DiAws />
      </div>
      <div className="absolute bottom-40 right-20 text-portfolio-accent/10 text-9xl animate-float-delayed z-0">
        <SiKubernetes />
      </div>
      <div className="absolute top-1/2 left-2/3 text-portfolio-accent/10 text-9xl animate-float-slow z-0 opacity-50">
        <DiDocker />
      </div>

      <div className="z-10 max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-portfolio-accent shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <img src={profileImg} alt="Atul Wale" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl text-portfolio-accent font-mono mb-2">Hi 👋 I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Atul Wale
            </h1>
            <h3 className="text-2xl md:text-3xl text-portfolio-text-muted font-semibold">
              Aspiring DevOps Engineer
            </h3>
          </motion.div>

        <motion.p 
          className="text-lg text-portfolio-text max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Passionate about Cloud Computing, Infrastructure Automation, CI/CD Pipelines, and Kubernetes. I enjoy building scalable cloud solutions and continuously improving my DevOps skills through hands-on projects.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center md:justify-start gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 text-portfolio-text-muted bg-portfolio-card px-4 py-2 rounded-full text-sm">
            <DiLinux className="text-xl" /> Linux
          </div>
          <div className="flex items-center gap-2 text-portfolio-text-muted bg-portfolio-card px-4 py-2 rounded-full text-sm">
            <DiAws className="text-xl" /> AWS
          </div>
          <div className="flex items-center gap-2 text-portfolio-text-muted bg-portfolio-card px-4 py-2 rounded-full text-sm">
            <DiGit className="text-xl" /> Git & GitHub
          </div>
          <div className="flex items-center gap-2 text-portfolio-text-muted bg-portfolio-card px-4 py-2 rounded-full text-sm">
            <DiDocker className="text-xl" /> Docker
          </div>
          <div className="flex items-center gap-2 text-portfolio-text-muted bg-portfolio-card px-4 py-2 rounded-full text-sm">
            <SiKubernetes className="text-xl" /> Kubernetes
          </div>
          <div className="flex items-center gap-2 text-portfolio-text-muted bg-portfolio-card px-4 py-2 rounded-full text-sm">
            <DiJenkins className="text-xl" /> Jenkins
          </div>
          <div className="flex items-center gap-2 text-portfolio-text-muted bg-portfolio-card px-4 py-2 rounded-full text-sm">
            <SiTerraform className="text-xl" /> Terraform
          </div>
          <div className="flex items-center gap-2 text-portfolio-text-muted bg-portfolio-card px-4 py-2 rounded-full text-sm">
            <SiAnsible className="text-xl" /> Ansible
          </div>
          <div className="flex items-center gap-2 text-portfolio-text-muted bg-portfolio-card px-4 py-2 rounded-full text-sm">
            <SiGnubash className="text-xl" /> Bash
          </div>
          <div className="flex items-center gap-2 text-portfolio-text-muted bg-portfolio-card px-4 py-2 rounded-full text-sm">
            <DiPython className="text-xl" /> Python
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a href="#resume" className="flex items-center gap-2 bg-portfolio-accent hover:bg-portfolio-accent-hover text-portfolio-bg font-bold py-3 px-6 rounded-lg transition-colors">
            <FaFileAlt /> Resume
          </a>
          <a href="https://github.com/atulwale18" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-portfolio-card hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors border border-gray-700">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-portfolio-card hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors border border-gray-700">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="#contact" className="flex items-center gap-2 bg-portfolio-card hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors border border-gray-700">
            <FaEnvelope /> Contact Me
          </a>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
