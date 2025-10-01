import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-border bg-dark-card/50">
      <div className="container-max py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-text-secondary">Built with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#ec4899', '#22d3ee', '#ec4899']
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <Heart className="w-5 h-5" />
              </motion.div>
              <span className="text-text-secondary">and</span>
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                <Code className="w-5 h-5 text-accent-cyan" />
              </motion.div>
            </div>
            
            <div className="text-text-muted text-sm">
              © {currentYear} Rajvardhan Tipugade. All rights reserved.
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <p className="text-text-muted text-sm mb-2">
              Built with React, TailwindCSS, and Framer Motion
            </p>
            <div className="flex justify-center gap-4 text-xs text-text-muted">
              <span>React</span>
              <span>•</span>
              <span>TailwindCSS</span>
              <span>•</span>
              <span>Framer Motion</span>
              <span>•</span>
              <span>Lucide Icons</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
