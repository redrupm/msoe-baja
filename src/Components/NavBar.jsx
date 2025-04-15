import NavItems from "./NavItems";
import '../Navbar.css';
import '../Pictures/BajaLogo.jpg'
const NavBar = (props) => {
    return (
        <nav id="header">
            <div id="logoBox">
                <img id="logo" src={require("../Pictures/BajaLogo.jpg")} alt="MSOE logo"/>
            </div>
            <div id="contentBox">
                <NavItems changeSite={props.changeSite}/>
            </div>
        </nav>
    )
}

export default NavBar;