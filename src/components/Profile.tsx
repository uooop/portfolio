import { useEffect, useRef } from "react";
import "./Profile.css";
import HeaderMain from "./contents/HeaderMain";
import AboutMe from "./contents/AboutMe";
import Skills from "./contents/Skills";
import Projects from "./contents/Projects";
import Footer from "./contents/Footer";

interface ProfileProps {
  onSectionChange: (sectionId: string) => void;
}

export default function Profile({ onSectionChange }: ProfileProps) {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onSectionChange(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [onSectionChange]);

  return (
    <div className="profile">
      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        id="home"
        className="section section1"
      >
        <HeaderMain />
      </div>
      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        id="aboutme"
        className="section section2"
      >
        <AboutMe />
      </div>
      <div
        ref={(el) => (sectionRefs.current[2] = el)}
        id="skills"
        className="section section3"
      >
        <Skills />
      </div>
      <div
        ref={(el) => (sectionRefs.current[3] = el)}
        id="projects"
        className="section section4"
      >
        <Projects />
      </div>
      <div
        ref={(el) => (sectionRefs.current[4] = el)}
        id="footer"
        className="section section5"
      >
        <Footer />
      </div>
    </div>
  );
}
