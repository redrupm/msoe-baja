import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Current from './Current';
import Past from './Past';
import Donate from './Donate';
import Sponsorship from './Sponsorship';
import ContactUs from './ContactUs';
import SponsorScroll from './SponsorScroll';
import Footer from './Footer';
import '../scss/App.scss';

export default function App() {
  const [showFooter, setShowFooter] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showPast, setShowPast] = useState(false);
  const [showDonate, setShowDonate] = useState(false);
  const [showSponsorship, setShowSponsorship] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);

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
    } else if (showDonate) {
      return <Donate />;
    } else if (showSponsorship) {
      return <Sponsorship />;
    } else if (showContactUs) {
      return <ContactUs />;
    }
  };

  const handleClick = (item) => {
    // Reset all states
    setShowHome(false);
    setShowCurrent(false);
    setShowPast(false);
    setShowDonate(false);
    setShowSponsorship(false);
    setShowContactUs(false);

    // Set the appropriate page
    if(item === 'HOME') {
      setShowHome(true);
    } else if(item === 'Current') {
      setShowCurrent(true);
    } else if(item === 'Past') {
      setShowPast(true);
    } else if(item === 'Donate') {
      setShowDonate(true);
    } else if(item === 'Sponsorship') {
      setShowSponsorship(true);
    } else if(item === 'CONTACT US') {
      setShowContactUs(true);
    }
  };

  return (
    <div className="app-container">
      <NavBar handleClick={handleClick} />
      <div id="body">
        {displayPage()}
      </div>
      <SponsorScroll />
      <Footer className={showFooter ? 'visible' : ''} />
    </div>
  );
}
