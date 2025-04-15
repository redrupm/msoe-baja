import Profile from "./Profile";
import teamPrincipal from "../../Pictures/AmeedProfile.jpg";
import vicePrincipal from "../../Pictures/CamdenProfile.jpg";
import adminPrincipal from "../../Pictures/LeoProfile.jpg";
import {useRef} from "react";

const MeetTheTeam = () => {
    const readMoreRef = useRef(null);
    let loaded = false;
    const load = () => {
        if(!loaded){
            //readMoreRef.current =
        }
    }
    return (
        <>
            <h1 className="title">MEET THE TEAM</h1>
            <h1 className="subtitle">E-BOARD</h1>
            <div className="fourGroup">
                <Profile isLead={true} image={teamPrincipal} name={"Ameed Abidalrahim"} description={"Team Principal"}/>
                <Profile isLead={true} image={vicePrincipal} name={"Camden Ellingsen"} description={"Vice Principal"}/>
                <Profile isLead={true} image={adminPrincipal} name={"Leo Pietruszynski"}
                         description={"Administrative Principal"}/>
                <Profile isLead={true} image={teamPrincipal} name={"Finnley Olsen"} description={"Treasurer"}/>
            </div>
            <button id="readMore" ref={readMoreRef} onClick={load}>READ MORE</button>
            <div id="moreGroups">
                <h1 className="subtitle">G-BOARD</h1>
                <div className="fourGroup">

                </div>
            </div>
        </>
    );
}

export default MeetTheTeam;