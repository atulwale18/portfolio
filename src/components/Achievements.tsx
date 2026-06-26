import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaFileAlt } from 'react-icons/fa';

const certifications = [
  {
    title: "AWS Solutions Architecture Job Simulation",
    url: ""
  },
  {
    title: "Google Cloud Agentic AI Day",
    url: "https://certificate.hack2skill.com/legacy/2025H2S06AID-I28853"
  },
  {
    title: "Core Java with AI (Internshala)",
    url: "https://trainings.internshala.com/verify_certificate/?certificate_code=f2sxat216qu"
  },
  {
    title: "Tata GenAI Powered Data Analytics",
    url: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/story-images/205691a9-48bb-424a-a1bc-9899f604374d.jpg"
  },
  {
    title: "Udemy Course Certification",
    url: "https://www.udemy.com/certificate/UC-9ebed24b-8775-412c-a28f-674d5d9b0b44/"
  },
  {
    title: "Adobe India Hackathon",
    url: ""
  }
];

const publications = [
  {
    title: "Smart Dustbin: Waste Segregation (Dry & Wet)",
    url: "https://www.irjmets.com/upload_newfiles/irjmets70600152639/paper_file/irjmets70600152639.pdf"
  },
  {
    title: "AI Powered Blood Donor Finder System",
    url: "https://www.irjet.net/archives/V13/i4/IRJET-V13I04225.pdf"
  }
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
            {certifications.map((cert, index) => {
              const content = (
                <>
                  <FaCheckCircle className="text-portfolio-accent text-xl flex-shrink-0" />
                  <span className={`text-portfolio-text font-medium ${cert.url ? 'group-hover:text-portfolio-accent transition-colors' : ''}`}>
                    {cert.title}
                  </span>
                </>
              );

              const commonProps = {
                key: index,
                className: `bg-portfolio-card p-4 rounded-lg border border-gray-800 flex items-center gap-4 hover:border-portfolio-accent transition-colors ${cert.url ? 'group block cursor-pointer' : ''}`,
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.4, delay: index * 0.1 }
              };

              return cert.url ? (
                <motion.a 
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...commonProps}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div {...commonProps}>
                  {content}
                </motion.div>
              );
            })}
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
              <motion.a 
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="bg-portfolio-card p-4 rounded-lg border border-gray-800 flex items-center gap-4 hover:border-portfolio-accent transition-colors group block cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <FaFileAlt className="text-portfolio-accent text-xl flex-shrink-0" />
                <span className="text-portfolio-text font-medium group-hover:text-portfolio-accent transition-colors">{pub.title}</span>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
