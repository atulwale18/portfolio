import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "CI/CD Pipeline using Jenkins",
    tech: ["GitHub", "Jenkins", "Docker", "Kubernetes"],
    description: "Automated application build, Docker image creation, and Kubernetes deployment using Jenkins pipelines."
  },
  {
    id: 2,
    title: "AWS Infrastructure using Terraform",
    tech: ["Terraform", "AWS", "EC2", "VPC", "IAM"],
    description: "Provisioned cloud infrastructure using Infrastructure as Code with reusable Terraform modules."
  },
  {
    id: 3,
    title: "Kubernetes Application Deployment",
    tech: ["Docker", "Kubernetes", "YAML"],
    description: "Deployed containerized applications with Deployments, Services, ConfigMaps, and Secrets."
  },
  {
    id: 4,
    title: "Server Automation using Ansible",
    tech: ["Ansible", "Linux", "Nginx"],
    description: "Automated server configuration, package installation, and application deployment using Ansible Playbooks."
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div 
        className="mb-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Projects</h2>
        <div className="h-1 w-20 bg-portfolio-accent rounded-full mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="bg-[#0d1117] rounded-xl border border-gray-800 overflow-hidden group hover:border-portfolio-accent transition-colors duration-300 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Architecture Diagram Placeholder */}
            <div className="h-48 w-full bg-[#161b22] border-b border-gray-800 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
              <span className="text-gray-500 font-mono text-sm relative z-10 flex flex-col items-center gap-2">
                <svg className="w-8 h-8 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Architecture Diagram
              </span>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-portfolio-accent transition-colors">
                {project.id}️⃣ {project.title}
              </h3>
              <p className="text-portfolio-text-muted mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-xs bg-[#161b22] text-portfolio-accent px-2 py-1 rounded border border-gray-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
