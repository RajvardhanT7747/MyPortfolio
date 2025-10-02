import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollColorTransition from './components/ScrollColorTransition';
import PageTransition from './components/PageTransition';
import portfolioData from './data/portfolioData.json';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-text-primary">
      <ScrollColorTransition />
      <Navigation data={portfolioData.personal} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="preserve-3d"
      >
        <div id="home" className="section-transition hero-gradient">
          <PageTransition sectionId="home" className="preserve-3d">
            <Hero data={portfolioData.personal} highlights={portfolioData.highlights} />
          </PageTransition>
        </div>
        <div id="about" className="section-transition about-gradient">
          <PageTransition sectionId="about" className="preserve-3d">
            <About data={portfolioData.about} />
          </PageTransition>
        </div>
        <div id="skills" className="section-transition skills-gradient">
          <PageTransition sectionId="skills" className="preserve-3d">
            <Skills data={portfolioData.skills} />
          </PageTransition>
        </div>
        <div id="experience" className="section-transition experience-gradient">
          <PageTransition sectionId="experience" className="preserve-3d">
            <Experience data={portfolioData.experience} />
          </PageTransition>
        </div>
        <div id="projects" className="section-transition projects-gradient">
          <PageTransition sectionId="projects" className="preserve-3d">
            <Projects data={portfolioData.projects} />
          </PageTransition>
        </div>
        <div id="achievements" className="section-transition achievements-gradient">
          <PageTransition sectionId="achievements" className="preserve-3d">
            <Achievements 
              achievements={portfolioData.achievements} 
              leadership={portfolioData.leadership} 
            />
          </PageTransition>
        </div>
        <div id="contact" className="section-transition contact-gradient">
          <PageTransition sectionId="contact" className="preserve-3d">
            <Contact 
              personal={portfolioData.personal} 
              social={portfolioData.social} 
            />
          </PageTransition>
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
}

export default App;
