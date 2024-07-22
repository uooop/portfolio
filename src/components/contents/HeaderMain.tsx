import { useState, useEffect } from 'react';
import '../Header.css';

const Header = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage(prev => !prev);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-main-container">
      <img src="/bg-w.png" alt="Background" className="header-main" />
      <div className="header-helloi-container">
        <img 
          src="/helloi.png" 
          className={`header-helloi ${showFirstImage ? 'visible' : 'hidden'}`} 
          alt="Hello 1"
        />
        <img 
          src="/hello.png" 
          className={`header-helloi ${!showFirstImage ? 'visible' : 'hidden'}`} 
          alt="Hello 2"
        />
      </div>
    </div>
  );
};

export default Header;