import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#0d1117] py-12 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h3 className="text-xl font-mono text-portfolio-accent mb-6">
          "Automating infrastructure, one deployment at a time."
        </h3>
        
        <p className="text-portfolio-text-muted text-sm mt-8">
          Designed and built by <span className="text-white font-semibold">Atul Wale</span>
        </p>
        <p className="text-gray-600 text-xs mt-2">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
