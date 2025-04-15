import NavBar from "./NavBar";
import {useState} from "react";
import Home from "./Home/Home";
import Contact from "./Contact";
import Current from "./Current";
import Past from "./Past";
import Donate from "./Donate";
import Sponsorship from "./Sponsorship";

function App() {
    const [site, setSite] = useState("Home.html");
    const changeSite = (siteURL) => {
        setSite(siteURL);
    }
    const renderSite = () => {
        switch (site) {
            case "Home.html":
                return <Home />;
            case "Contact.html":
                return <Contact />;
            case "Current.html":
                return <Current />;
            case "Past.html":
                return <Past />;
            case "Donate.html":
                return <Donate />;
            case "Sponsorship.html":
                return <Sponsorship />;
            default:
                return <Home />;
        }
    };
    return (
        <>
            <NavBar changeSite={changeSite}/>
            {renderSite()}
        </>
    );
}

export default App;
