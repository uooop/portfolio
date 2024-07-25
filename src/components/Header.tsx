import React, { useState, useEffect, useRef } from "react";
import "../components/Header.css";
import logoImage from "../../public/logo.png";

interface MenuItem {
  href: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { href: "#home", label: "HOME" },
  { href: "#aboutme", label: "About Me" },
  { href: "#skills", label: "Skill" },
  { href: "#projects", label: "Projects" },
  { href: "#footer", label: "Contact" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [initialAnimationComplete, setInitialAnimationComplete] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (event: React.MouseEvent<HTMLElement>, sectionId: string) => {
    event.preventDefault();
    const section = document.getElementById(sectionId.substring(1));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } 
    setMenuOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialAnimationComplete(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      menuRef.current.focus();
    }
  }, [menuOpen]);

  return (
    <header className="header-wrapper">
      <div className={`initial-screen ${initialAnimationComplete ? 'hide' : ''}`}>
        <img src={logoImage} alt="Logo" className="center-logo" />
      </div>
      <div
        className={`side-menu ${menuOpen ? "open" : ""}`}
        ref={menuRef}
        tabIndex={-1}
        aria-hidden={!menuOpen}
      >
        <span className="close-btn" onClick={toggleMenu}>
          &times;
        </span>
        <img src={logoImage} alt="Logo" className="logo" />
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={(e) => scrollToSection(e, item.href)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`header-content ${initialAnimationComplete ? 'show' : ''}`}
        ref={contentRef}
      >
        <img
          src={logoImage}
          alt="Logo"
          className="logo"
          onClick={toggleMenu}
        />
        <div className="header-text-center">Web Visual Designer</div>
        <div className="header-text-right">2024 | Portfolio</div>
      </div>
    </header>
  );
};

export default Header;