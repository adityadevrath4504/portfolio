import { useRef } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Nav from './components/Nav';
import { Divider } from './components/Shared';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import EducationSection from './components/sections/EducationSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import { useCursor } from './hooks/useCursor';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const curRef = useRef(null);
  const ringRef = useRef(null);
  const activeSection = useScrollReveal();

  useCursor(curRef, ringRef);

  return (
    <div className="min-h-screen font-manrope">
      <div className="cur" ref={curRef} />
      <div className="cur-ring" ref={ringRef} />

      <Loader />
      <Nav activeSection={activeSection} />
      <Hero />

      <Divider />
      <AboutSection />
      <Divider />
      <ExperienceSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <SkillsSection />
      <Divider />
      <EducationSection />
      <Divider />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
