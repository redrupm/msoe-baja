const NavItems = (props) => {
    // const navItems = [];
    // const items = [];
    // let int = 0;
    // let before = [];
    // for(let i = 0; i < props.navItems.length; i++) {
    //     let URL;
    //     if(props.navItems[i].toUpperCase() === props.navItems[i]) {
    //         if(int === 1){
    //             navItems.push(<div>{before}</div>);
    //             before = [];
    //         }
    //         URL = props.navItems[i].charAt(0) + props.navItems[i].substring(1).toLowerCase() + ".html";
    //         items.push(<h1 className="clickable" id={URL}>{props.navItems[i]}</h1>);
    //         int++;
    //     } else {
    //         const li = [];
    //         while(props.navItems[i].toUpperCase() !== props.navItems[i]) {
    //             URL = props.navItems[i] + ".html";
    //             li.push(<li className="clickable" id={URL}>{props.navItems[i++]}</li>);
    //         }
    //         i--;
    //         let parent = items.pop();
    //         items.push(parent);
    //         let parentSize = { width: parent.clientWidth + "px" };
    //         items.push(<ul style={parentSize}>{li}</ul>);
    //         int = 0;
    //     }
    //     let bef = items.pop();
    //     before.push(bef);
    //     items.push(bef);
    //     if(int === 0 || i === props.navItems.length - 1){
    //         navItems.push(<div>{before}</div>);
    //         before = [];
    //     }
    // }

    let click= (event) => {
        let id = event.target.id;
        props.changeSite(id);
    }
    let flex = {display: 'flex'};
    return (
        <>
            <div className="headers"><div className="clickable" style={flex}><h1 onClick={click} id="Home.html">HOME</h1></div></div>
            <div className="headers">
                <div className="clickable" style={flex}><h1>VEHICLES</h1><h1 className="arrow">▾</h1></div>
                <ul className="headers">
                    <li className="clickable" onClick={click} id="Current.html">Current</li>
                    <li className="clickable" onClick={click} id="Past.html">Past</li>
                </ul>
            </div>
            <div className="headers">
                <div className="clickable" style={flex}><h1>SUPPORT </h1><h1 className="arrow">▾</h1></div>
                <ul className="headers">
                    <li className="clickable" onClick={click} id="Donate.html">Donate</li>
                    <li className="clickable" onClick={click} id="Sponsorship.html">Sponsorship</li>
                </ul>
            </div>
            <div className="headers"><div className="clickable" style={flex}><h1 onClick={click} id="Contact.html">CONTACT US</h1></div></div>
            </>
            );
            }
            export default NavItems;