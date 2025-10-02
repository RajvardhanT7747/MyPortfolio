import React, { useEffect, useState } from 'react';

const ScrollColorTransition = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = [
      { id: 'home', element: null },
      { id: 'about', element: null },
      { id: 'skills', element: null },
      { id: 'experience', element: null },
      { id: 'projects', element: null },
      { id: 'achievements', element: null },
      { id: 'contact', element: null },
    ];

    // Get all section elements
    sections.forEach(section => {
      section.element = document.getElementById(section.id);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find which section is currently in view
      let currentSection = 'home';
      
      sections.forEach(section => {
        if (section.element) {
          const sectionTop = section.element.getBoundingClientRect().top + window.scrollY;
          const sectionHeight = section.element.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.id;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        
        // Remove active class from all sections
        sections.forEach(section => {
          if (section.element) {
            section.element.classList.remove('section-active');
          }
        });
        
        // Add active class to current section
        const currentElement = document.getElementById(currentSection);
        if (currentElement) {
          currentElement.classList.add('section-active');
        }

        // Update body class for global color theme
        document.body.className = document.body.className.replace(/section-\w+/g, '');
        document.body.classList.add(`section-${currentSection}`);
      }
    };

    // Initial call
    handleScroll();
    
    // Add scroll listener with throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [activeSection]);

  return null; // This component doesn't render anything visible
};

export default ScrollColorTransition;
