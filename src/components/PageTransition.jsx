import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const PageTransition = ({ children, sectionId, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '-50px 0px -50px 0px' // Trigger slightly before entering viewport
      }
    );

    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionId, hasAnimated]);

  // Different animation variants for different sections
  const getAnimationVariant = (sectionId) => {
    const variants = {
      home: {
        hidden: { 
          opacity: 0, 
          scale: 0.8,
          y: 100
        },
        visible: { 
          opacity: 1, 
          scale: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
            staggerChildren: 0.2
          }
        }
      },
      about: {
        hidden: { 
          opacity: 0, 
          x: -100,
          rotateY: -15
        },
        visible: { 
          opacity: 1, 
          x: 0,
          rotateY: 0,
          transition: {
            duration: 0.7,
            ease: "easeOut",
            staggerChildren: 0.15
          }
        }
      },
      skills: {
        hidden: { 
          opacity: 0, 
          y: 50,
          scale: 0.9
        },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.1
          }
        }
      },
      experience: {
        hidden: { 
          opacity: 0, 
          x: 100,
          rotateX: 15
        },
        visible: { 
          opacity: 1, 
          x: 0,
          rotateX: 0,
          transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.2
          }
        }
      },
      projects: {
        hidden: { 
          opacity: 0, 
          y: 100,
          scale: 0.8,
          rotateZ: -5
        },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          rotateZ: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.15
          }
        }
      },
      achievements: {
        hidden: { 
          opacity: 0, 
          scale: 0.7,
          rotateY: 20
        },
        visible: { 
          opacity: 1, 
          scale: 1,
          rotateY: 0,
          transition: {
            duration: 0.9,
            ease: [0.6, -0.05, 0.01, 0.99],
            staggerChildren: 0.1
          }
        }
      },
      contact: {
        hidden: { 
          opacity: 0, 
          y: -50,
          x: -50,
          scale: 0.9
        },
        visible: { 
          opacity: 1, 
          y: 0,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: "easeOut",
            staggerChildren: 0.2
          }
        }
      }
    };

    return variants[sectionId] || variants.about;
  };

  const variant = getAnimationVariant(sectionId);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        variants={variant}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
