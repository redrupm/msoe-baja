import NavItems from './NavItems';
import logo from '../images/BajaLogo.jpg';
import '../scss/NavBar.scss'

function NavBar() {
    const navItems = [
        'HOME',
        'VEHICLES', 'Current', 'Past',
        'SUPPORT', 'Donate', 'Sponsorship',
        'CONTACT US'
    ];

    return (
        <nav id="header">
            <div id="logoBox">
                <img id="logo" src={logo} alt="MSOE logo" />
            </div>
            <div id="contentBox">
                <NavItems navItems={navItems} />
            </div>
        </nav>
    );
}

export default NavBar;
