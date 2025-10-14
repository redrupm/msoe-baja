function NavItems(navItems) {
    const items = [];
    for(let i = 0; i < navItems.length; i++) {
        let URL;
        if(navItems[i].toUpperCase() === navItems[i]) {
            URL = navItems[i].charAt(0) + navItems[i].substring(1).toLowerCase() + ".html";
            items.push(<h1 className="clickable" id={URL}>{navItems[i]}</h1>);
        } else {
            const li = [];
            while(navItems[i].toUpperCase() !== navItems[i]) {
                URL = navItems[i] + ".html";
                li.push(<li className="clickable" id={URL}>{navItems[i++]}</li>);
            }
            i--;
            items.push(<ul>{li}</ul>);
        }
    }

}