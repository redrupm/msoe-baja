import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Slideshow from './home/Slideshow';
import Blurb from './home/Blurb';
import Team from './home/Team';
import Footer from './Footer';
import '../scss/App.scss'

export default function Home() {
    const [showFooter, setShowFooter] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.body.scrollHeight;
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
        <>
            <Slideshow />
            <Blurb />
            <Team />
        </>
    );
}

