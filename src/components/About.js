import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          {/* About Content */}
          <motion.div
            variants={itemVariants}
            className="card max-w-5xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Profile Image */}
              <motion.div
                variants={itemVariants}
                className="flex-shrink-0 mx-auto lg:mx-0"
              >
                <div className="relative w-64 h-64">
                  {/* Glow Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full blur-xl"
                  />
                  
                  {/* Profile Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-full h-full rounded-full border-4 border-dark-border overflow-hidden"
                  >
                    <img
                      src={data.avatar || '/profile.jpg'}
                      alt="Rajvardhan Tipugade"
                      className="w-full h-full object-cover object-top"
                      style={{ objectPosition: 'center 30%' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback Avatar */}
                    <div className="hidden w-full h-full bg-gradient-to-br from-accent-cyan to-accent-purple items-center justify-center text-white text-4xl font-bold">
                      RT
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* About Text */}
              <motion.div
                variants={itemVariants}
                className="flex-1 space-y-6"
              >
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-text-secondary leading-relaxed"
                >
                  {data.summary}
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-text-secondary leading-relaxed"
                >
                  {data.experience}
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-text-secondary leading-relaxed"
                >
                  {data.current}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
