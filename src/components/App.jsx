import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Current from './Current';
import Past from './Past';
import Footer from './Footer';
import '../scss/App.scss';

export default function App() {
  const [showFooter, setShowFooter] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showPast, setShowPast] = useState(false);

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

  const displayPage = () => {
    if (showHome) {
      return <Home />;
    } else if (showCurrent) {
      return <Current />;
    } else if (showPast) {
      return <Past />;
    }
  };

  const handleClick = (item) => {
    if(item === 'HOME') {
      setShowHome(true);
      setShowCurrent(false);
      setShowPast(false);
    } else if(item === 'Current') {
      setShowHome(false);
      setShowCurrent(true);
      setShowPast(false);
    } else if(item === 'Past') {
      setShowHome(false);
      setShowCurrent(false);
      setShowPast(true);
    }
  };

  return (
    <div className="app-container">
      <NavBar handleClick={handleClick} />
      <div id="body">
        {displayPage()}
      </div>
      <Footer className={showFooter ? 'visible' : ''} />
    </div>
  );
}
