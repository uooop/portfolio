import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import HeaderMain from "./contents/HeaderMain";
import AboutMe from "./contents/AboutMe";
import Skills from "./contents/Skills";
import Projects from "./contents/Projects";
import Footer from "./contents/Footer";
import "./Profile.css";

interface ProfileProps {
  onSectionChange: (sectionId: string) => void;
}

export default function Profile({ onSectionChange }: ProfileProps) {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const delta = Math.sign(event.deltaY);
      const currentSectionIndex = sectionRefs.current.findIndex(section =>
        section && section.getBoundingClientRect().top >= 0
      );

      let nextSectionIndex = currentSectionIndex + delta;
      nextSectionIndex = Math.max(0, Math.min(nextSectionIndex, sectionRefs.current.length - 1));

      const nextSection = sectionRefs.current[nextSectionIndex];
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
        onSectionChange(`section${nextSectionIndex + 1}`);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [onSectionChange]);


  return (
    <>
      <Header />
      <div className="profile">
        <div ref={(el) => (sectionRefs.current[0] = el)} id="section1" className="section">
          <HeaderMain />
        </div>
        <div ref={(el) => (sectionRefs.current[1] = el)} id="section2" className="section">
          <AboutMe />
        </div>
        <div ref={(el) => (sectionRefs.current[2] = el)} id="section3" className="section">
          <Skills />
        </div>
        <div ref={(el) => (sectionRefs.current[3] = el)} id="section4" className="section">
          <Projects />
        </div>
        <div ref={(el) => (sectionRefs.current[4] = el)} id="section5" className="section">
          <Footer />
        </div>
      </div>
    </>
  );
}