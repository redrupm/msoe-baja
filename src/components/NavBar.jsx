import React, { useState } from 'react';
import NavItems from './NavItems';
import logo from '../images/logos/MASTER_RR_WhiteRed.png';
import '../scss/NavBar.scss'

function NavBar({ handleClick }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobile = () => setMobileOpen((s) => !s);

    const closeMobile = () => setMobileOpen(false);

    const navItems = [
        'HOME',
        'VEHICLES', 'Current', 'Past',
        'SUPPORT', 'Donate', 'Sponsorship',
        'CONTACT US'
    ];

    return (
        <nav id="header">
            <div id="logoBox">
                <img id="logo" src={logo} alt="MSOE logo" onClick={() => { handleClick('HOME'); closeMobile(); }} style={{cursor: 'pointer'}} />
            </div>
            <button className="mobile-toggle" aria-label="Toggle menu" aria-expanded={mobileOpen} onClick={toggleMobile}>
              <span className="hamburger" />
            </button>

            <div id="contentBox">
                <NavItems navItems={navItems} handleClick={(item) => { handleClick(item); closeMobile(); }} />
            </div>

            {/* Mobile menu overlay */}
            {mobileOpen && (
              <div className="mobile-menu" role="menu">
                <NavItems navItems={navItems} handleClick={(item) => { handleClick(item); closeMobile(); }} />
              </div>
            )}
        </nav>
    );
}

export default NavBar;
