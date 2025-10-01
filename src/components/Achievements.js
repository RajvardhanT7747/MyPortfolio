import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Code, Trophy, GraduationCap, Users, Calendar } from 'lucide-react';

const Achievements = ({ achievements, leadership }) => {
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

  const getIcon = (iconName) => {
    const icons = {
      award: <Award className="w-8 h-8" />,
      code: <Code className="w-8 h-8" />,
      trophy: <Trophy className="w-8 h-8" />,
      graduation: <GraduationCap className="w-8 h-8" />,
    };
    return icons[iconName] || <Award className="w-8 h-8" />;
  };

  const getGradientClass = (index) => {
    const gradients = [
      'from-yellow-400 to-orange-500',
      'from-green-400 to-cyan-500',
      'from-blue-400 to-purple-500',
      'from-pink-400 to-red-500',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="achievements" className="section-padding">
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
            Achievements & <span className="gradient-text">Leadership</span>
          </motion.h2>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="card text-center group hover:shadow-lg hover:shadow-accent-cyan/20 transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { 
                    scale: 1,
                    transition: { 
                      delay: index * 0.2 + 0.5,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 200
                    }
                  } : { scale: 0 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${getGradientClass(index)} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {getIcon(achievement.icon)}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Leadership Section */}
          <motion.div
            variants={cardVariants}
            className="card max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-accent-cyan">Leadership Roles</h3>
            </div>

            <div className="space-y-6">
              {leadership.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      delay: index * 0.2 + 0.8,
                      duration: 0.5 
                    }
                  } : { opacity: 0, x: -20 }}
                  className="flex items-start gap-4 p-4 bg-dark-bg rounded-lg border border-dark-border hover:border-accent-purple transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-text-primary">
                        {role.role}
                      </h4>
                      <span className="text-accent-purple font-medium text-sm">
                        {role.organization}
                      </span>
                    </div>
                    <p className="text-text-secondary">
                      {role.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={cardVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Problems Solved', value: '500+', color: 'text-accent-cyan' },
              { label: 'Current CGPA', value: '9.02', color: 'text-accent-purple' },
              { label: 'Projects Built', value: '10+', color: 'text-accent-pink' },
              { label: 'Events Led', value: '5+', color: 'text-accent-cyan' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    delay: index * 0.1 + 1,
                    duration: 0.5 
                  }
                } : { opacity: 0, scale: 0.8 }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className="text-center p-6 bg-dark-card rounded-lg border border-dark-border hover:border-accent-cyan transition-colors duration-300"
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
