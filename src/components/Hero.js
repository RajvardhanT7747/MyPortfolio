import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = ({ data, highlights }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-cyan/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-purple/20 to-transparent rounded-full blur-3xl" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-20 w-4 h-4 bg-accent-cyan rounded-full opacity-60"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-40 right-32 w-6 h-6 bg-accent-purple rounded-full opacity-40"
      />
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-40 left-32 w-3 h-3 bg-accent-pink rounded-full opacity-50"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl mx-auto px-4"
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4"
          style={{ color: '#22d3ee', textShadow: '0 0 20px rgba(34, 211, 238, 0.8)' }}
        >
          {data.name}
        </motion.h1>

        {/* Mastercard Internship */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <img 
            src="/mastercard_logo1.jpeg" 
            alt="Mastercard Logo" 
            className="w-8 h-8 object-contain"
          />
          <span className="text-lg md:text-xl text-text-secondary font-medium">
            Upcoming Summer Intern at Mastercard
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl text-text-secondary mb-4 font-medium"
        >
          {data.title}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text-muted mb-8 max-w-2xl mx-auto italic"
        >
          "{data.tagline}"
        </motion.p>

        {/* Updated Tags */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-dark-card border border-dark-border rounded-full text-sm font-medium text-text-secondary hover:text-accent-cyan transition-colors duration-300"
          >
            Java
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-dark-card border border-dark-border rounded-full text-sm font-medium text-text-secondary hover:text-accent-cyan transition-colors duration-300"
          >
            DSA
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-dark-card border border-dark-border rounded-full text-sm font-medium text-text-secondary hover:text-accent-cyan transition-colors duration-300"
          >
            Open Source Contributor
          </motion.span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const projectsSection = document.querySelector('#projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-secondary"
          >
            Let's Connect
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <span className="text-text-muted text-sm mb-2">Scroll to explore</span>
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToAbout}
            className="text-accent-cyan hover:text-accent-purple transition-colors duration-300"
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
