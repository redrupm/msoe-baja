import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';
import '../scss/App.scss';

export default function App() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= fullHeight - 10) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <NavBar />
      <Home />
      {/* Optional: Add real content here to ensure scrollability */}
      {/* <Blurb /> */}
      {/* <Team /> */}
      {/* Spacer for testing scroll */}
      <Footer className={showFooter ? 'visible' : ''} />

    </div>
  );
}
