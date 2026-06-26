import React from 'react';
import { motion } from 'framer-motion';

const GitHubStats: React.FC = () => {
  // Using Atul's actual GitHub username
  const githubUsername = "atulwale18"; 

  return (
    <section id="github" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div 
        className="mb-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">GitHub Activity</h2>
        <div className="h-1 w-20 bg-portfolio-accent rounded-full mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className="bg-portfolio-card p-4 rounded-xl border border-gray-800 flex justify-center items-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* GitHub Stats Card */}
          <img 
            src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=react&hide_border=true&bg_color=111827&title_color=06b6d4&text_color=e2e8f0&icon_color=06b6d4`} 
            alt="GitHub Stats" 
            className="w-full max-w-[400px]"
            onError={(e) => {
              // Fallback if username doesn't exist
              e.currentTarget.src = "https://github-readme-stats.vercel.app/api?username=torvalds&show_icons=true&theme=react&hide_border=true&bg_color=111827&title_color=06b6d4&text_color=e2e8f0&icon_color=06b6d4";
            }}
          />
        </motion.div>

        <motion.div 
          className="bg-portfolio-card p-4 rounded-xl border border-gray-800 flex justify-center items-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* GitHub Top Languages Card */}
          <img 
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=react&hide_border=true&bg_color=111827&title_color=06b6d4&text_color=e2e8f0`} 
            alt="Top Languages" 
            className="w-full max-w-[400px]"
            onError={(e) => {
              e.currentTarget.src = "https://github-readme-stats.vercel.app/api/top-langs/?username=torvalds&layout=compact&theme=react&hide_border=true&bg_color=111827&title_color=06b6d4&text_color=e2e8f0";
            }}
          />
        </motion.div>

        <motion.div 
          className="bg-portfolio-card p-4 rounded-xl border border-gray-800 flex justify-center items-center md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* GitHub Streak Stats */}
          <img 
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=react&hide_border=true&background=111827&ring=06b6d4&fire=06b6d4&currStreakNum=e2e8f0&sideNums=e2e8f0&currStreakLabel=06b6d4&sideLabels=06b6d4&dates=94a3b8`} 
            alt="GitHub Streak" 
            className="w-full max-w-[600px]"
            onError={(e) => {
              e.currentTarget.src = "https://github-readme-streak-stats.herokuapp.com/?user=torvalds&theme=react&hide_border=true&background=111827&ring=06b6d4&fire=06b6d4&currStreakNum=e2e8f0&sideNums=e2e8f0&currStreakLabel=06b6d4&sideLabels=06b6d4&dates=94a3b8";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
