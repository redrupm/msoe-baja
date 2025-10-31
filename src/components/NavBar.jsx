import NavItems from './NavItems';
import logo from '../images/BajaLogo.jpg';
import '../scss/NavBar.scss'

function NavBar({ handleClick }) {
    const navItems = [
        'HOME',
        'VEHICLES', 'Current', 'Past',
        'SUPPORT', 'Donate', 'Sponsorship',
        'CONTACT US'
    ];

    return (
        <nav id="header">
            <div id="logoBox">
                <img id="logo" src={logo} alt="MSOE logo" onClick={() => handleClick('HOME')} style={{cursor: 'pointer'}} />
            </div>
            <div id="contentBox">
                <NavItems navItems={navItems} handleClick={handleClick} />
            </div>
        </nav>
    );
}

export default NavBar;
