import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github } from 'lucide-react';

const Contact = ({ personal, social }) => {
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

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: 'text-accent-cyan',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: 'text-accent-purple',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: personal.location,
      href: '#',
      color: 'text-accent-pink',
    },
  ];

  const socialLinks = [
    {
      icon: <img src="/leetcode.png" alt="LeetCode" className="w-6 h-6 object-contain" />,
      label: 'LeetCode',
      href: social.leetcode,
      color: 'hover:text-yellow-400',
    },
    {
      icon: <img src="/gfg.png" alt="GeeksforGeeks" className="w-6 h-6 object-contain" />,
      label: 'GeeksforGeeks',
      href: social.gfg,
      color: 'hover:text-green-400',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: social.github,
      color: 'hover:text-gray-300',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      href: `mailto:${personal.email}`,
      color: 'hover:text-accent-cyan',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-dark-card/30">
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
            Let's Build Something <span className="gradient-text">Together</span>
          </motion.h2>

          {/* Contact Content */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-4xl mx-auto mb-8 sm:mb-12"
          >
            <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-6 sm:mb-8 leading-relaxed px-2">
              Whether you're looking for a backend developer who obsesses over performance metrics, 
              a problem solver who thinks in algorithms, or a collaborator who brings ideas to life—I'd love to connect!
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href={`mailto:${personal.email}`}
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            {contactMethods.slice(0, 2).map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="card text-center group hover:shadow-lg hover:shadow-accent-cyan/20 transition-all duration-300"
              >
                <div className={`${method.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                  {method.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                  {method.label}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary break-all">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-accent-cyan mb-4 sm:mb-6">
              Connect With Me
            </h3>
            <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 bg-dark-card border border-dark-border rounded-full flex items-center justify-center text-text-secondary ${social.color} hover:border-accent-cyan transition-all duration-300 group`}
                  aria-label={social.label}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="card max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-accent-purple mb-3 sm:mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6 leading-relaxed">
                I'm always excited to work on new projects, contribute to open source, 
                or discuss innovative ideas. Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.a
                  href={`mailto:${personal.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-sm sm:text-base px-6 py-3"
                >
                  Send Email
                </motion.a>
                <motion.a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-sm sm:text-base px-6 py-3"
                >
                  Connect on LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
