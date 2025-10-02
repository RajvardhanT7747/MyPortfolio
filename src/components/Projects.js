import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Zap, Users, Clock } from 'lucide-react';

const Projects = ({ data }) => {
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

  const getProjectIcon = (index) => {
    const icons = [
      <Zap className="w-6 h-6" />,
      <Users className="w-6 h-6" />,
      <Clock className="w-6 h-6" />,
    ];
    return icons[index % icons.length];
  };

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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {data.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="card group hover:shadow-2xl hover:shadow-accent-cyan/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Project Header */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-accent-cyan group-hover:text-accent-purple transition-colors duration-300">
                      {getProjectIcon(index)}
                    </div>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-300">
                      {project.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-purple/20 text-accent-purple rounded-full text-sm font-medium">
                      <Zap size={14} />
                      {project.impact}
                    </div>
                  </div>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="mb-4">
                      <h4 className="text-accent-cyan font-semibold mb-2 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, hlIndex) => (
                          <motion.li
                            key={hlIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { 
                              opacity: 1, 
                              x: 0,
                              transition: { 
                                delay: index * 0.2 + hlIndex * 0.1 + 0.5,
                                duration: 0.3 
                              }
                            } : { opacity: 0, x: -10 }}
                            className="flex items-start gap-2 text-text-muted text-sm"
                          >
                            <span className="text-accent-cyan mt-1">•</span>
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-accent-purple font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { 
                            opacity: 1, 
                            scale: 1,
                            transition: { 
                              delay: index * 0.2 + techIndex * 0.05 + 0.7,
                              duration: 0.3 
                            }
                          } : { opacity: 0, scale: 0.8 }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: '#22d3ee',
                            color: '#0f172a',
                            transition: { duration: 0.2 }
                          }}
                          className="px-2 py-1 bg-dark-bg text-accent-cyan rounded-md text-xs font-medium border border-dark-border hover:border-accent-cyan transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.a
                      href={
                        index === 0 
                          ? "https://cryptocurrencyalertsystem.onrender.com/"
                          : index === 1
                          ? "https://github.com/RajvardhanT7747"
                          : "https://wanderlust-ocrz.onrender.com/listings"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent-cyan text-dark-bg rounded-lg font-medium hover:bg-accent-purple transition-colors duration-300 text-sm sm:text-base"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </motion.a>
                    <motion.a
                      href="https://github.com/RajvardhanT7747"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center px-4 py-2.5 border border-dark-border text-text-secondary rounded-lg hover:border-accent-purple hover:text-accent-purple transition-colors duration-300 sm:w-auto"
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Projects Section */}
          <motion.div
            variants={cardVariants}
            className="mt-16 text-center"
          >
            <div className="card max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-accent-cyan mb-4">
                More Projects
              </h3>
              <p className="text-text-secondary text-lg mb-6">
                I've built numerous other projects including web applications, 
                automation scripts, and data analysis tools. Each project focuses 
                on solving real-world problems with clean, efficient code.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => window.open('https://github.com/RajvardhanT7747', '_blank')}
              >
                View All Projects on GitHub
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
