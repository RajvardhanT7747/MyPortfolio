import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    // Add transition effect to body
    document.body.style.transition = 'all 0.3s ease-out';
    
    // Add a small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        // Get the navbar height to account for fixed positioning
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        
        // Calculate position with offset for fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
        
        // Enhanced smooth scrolling with easing
        const startPosition = window.pageYOffset;
        const distance = offsetPosition - startPosition;
        const duration = Math.min(Math.abs(distance) / 2, 1000); // Dynamic duration based on distance
        let start = null;
        
        const smoothScroll = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const percentage = Math.min(progress / duration, 1);
          
          // Easing function for smooth acceleration/deceleration
          const easeInOutCubic = percentage < 0.5 
            ? 4 * percentage * percentage * percentage 
            : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
          
          window.scrollTo(0, startPosition + distance * easeInOutCubic);
          
          if (progress < duration) {
            requestAnimationFrame(smoothScroll);
          } else {
            // Reset body transition
            document.body.style.transition = '';
          }
        };
        
        requestAnimationFrame(smoothScroll);
      }
    }, 300); // Wait for menu animation to complete
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-bg/95 backdrop-blur-md border-b border-dark-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl sm:text-2xl font-bold gradient-text cursor-pointer select-none"
            onClick={() => scrollToSection('#home')}
          >
            RT
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-text-secondary hover:text-accent-cyan nav-transition font-medium text-sm lg:text-base px-2 py-1 rounded-md hover:bg-dark-card/50"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-text-primary p-2 rounded-md hover:bg-dark-card/50 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2 border-t border-dark-border/50 bg-dark-bg/25 backdrop-blur-md rounded-b-lg shadow-lg shadow-dark-bg/50">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isMobileMenuOpen ? { 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: index * 0.1 }
                } : { opacity: 0, x: -20 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-text-secondary hover:text-accent-cyan transition-colors duration-300 py-3 px-4 rounded-md hover:bg-dark-card/30 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
