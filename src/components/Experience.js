import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Code2 } from 'lucide-react';

const Experience = ({ data }) => {
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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="experience" className="section-padding">
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
            <span className="gradient-text">Experience</span>
          </motion.h2>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan to-accent-purple" />

            {data.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start mb-12"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { 
                    scale: 1,
                    transition: { 
                      delay: index * 0.3 + 0.5,
                      duration: 0.3,
                      type: 'spring',
                      stiffness: 200
                    }
                  } : { scale: 0 }}
                  className="absolute left-6 w-4 h-4 bg-accent-cyan rounded-full border-4 border-dark-bg z-10"
                />

                {/* Experience Card */}
                <motion.div
                  whileHover={{ 
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                  className="ml-16 card flex-1 group hover:shadow-lg hover:shadow-accent-cyan/20 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-accent-cyan group-hover:text-accent-purple transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-lg text-accent-purple font-semibold">
                        <span>{exp.company}</span>
                        <span className="text-text-muted">•</span>
                        <span className="flex items-center gap-1 text-text-muted">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-lg mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-accent-cyan font-semibold mb-2 flex items-center gap-2">
                      <Code2 size={16} />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { 
                            opacity: 1, 
                            x: 0,
                            transition: { 
                              delay: index * 0.3 + achIndex * 0.1 + 0.8,
                              duration: 0.4 
                            }
                          } : { opacity: 0, x: -20 }}
                          className="flex items-start gap-2 text-text-secondary"
                        >
                          <span className="text-accent-cyan mt-1">▹</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-accent-purple font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { 
                            opacity: 1, 
                            scale: 1,
                            transition: { 
                              delay: index * 0.3 + techIndex * 0.05 + 1,
                              duration: 0.3 
                            }
                          } : { opacity: 0, scale: 0.8 }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: '#a855f7',
                            color: '#ffffff',
                            transition: { duration: 0.2 }
                          }}
                          className="px-3 py-1 bg-dark-bg text-accent-purple rounded-full text-sm font-medium border border-dark-border hover:border-accent-purple transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Future Timeline Item */}
            <motion.div
              variants={itemVariants}
              className="relative flex items-start"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { 
                  scale: 1,
                  transition: { 
                    delay: data.length * 0.3 + 0.5,
                    duration: 0.3,
                    type: 'spring',
                    stiffness: 200
                  }
                } : { scale: 0 }}
                className="absolute left-6 w-4 h-4 bg-accent-purple rounded-full border-4 border-dark-bg z-10"
              />

              {/* Future Card */}
              <motion.div
                whileHover={{ 
                  x: 10,
                  transition: { duration: 0.2 }
                }}
                className="ml-16 card flex-1 group hover:shadow-lg hover:shadow-accent-purple/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-accent-purple group-hover:text-accent-cyan transition-colors duration-300">
                      Summer Intern
                    </h3>
                    <div className="flex items-center gap-2 text-lg text-accent-cyan font-semibold">
                      <span>Mastercard</span>
                      <span className="text-text-muted">•</span>
                      <span className="flex items-center gap-1 text-text-muted">
                        <MapPin size={16} />
                        Pune, Maharashtra
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-text-muted mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span>Summer 2026</span>
                  </div>
                </div>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Selected as a finalist for Mastercard CFC 2.0 program. Excited to contribute to 
                  innovative financial technology solutions and learn from industry experts.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
