import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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

  const skillCategories = Object.entries(data).map(([category, skills]) => ({
    category,
    skills,
  }));

  return (
    <section className="section-padding bg-dark-card/30">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map(({ category, skills }, index) => (
              <motion.div
                key={category}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="card group hover:shadow-lg hover:shadow-accent-cyan/20 transition-all duration-300"
              >
                {/* Category Title */}
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  className="text-xl font-semibold text-accent-cyan mb-4 group-hover:text-accent-purple transition-colors duration-300"
                >
                  {category}
                </motion.h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { 
                        opacity: 1, 
                        scale: 1,
                        transition: { 
                          delay: index * 0.1 + skillIndex * 0.05,
                          duration: 0.3 
                        }
                      } : { opacity: 0, scale: 0.8 }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: '#22d3ee',
                        color: '#0f172a',
                        transition: { duration: 0.2 }
                      }}
                      className="px-3 py-1.5 bg-dark-bg text-text-secondary rounded-full text-sm font-medium border border-dark-border hover:border-accent-cyan transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Animated Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { 
                    width: '100%',
                    transition: { 
                      delay: index * 0.2 + 0.5,
                      duration: 1,
                      ease: 'easeOut'
                    }
                  } : { width: 0 }}
                  className="mt-4 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full"
                />
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            variants={cardVariants}
            className="mt-12 text-center"
          >
            <div className="card max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-accent-cyan mb-4">
                Problem Solving Expertise
              </h3>
              <p className="text-text-secondary text-lg">
                With 500+ solved problems across multiple platforms, I bring algorithmic thinking 
                and optimization skills to every project.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
