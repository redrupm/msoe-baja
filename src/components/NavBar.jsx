function NavBar() {
    const navItems = ['HOME', 'VEHICLES', 'Current', 'Past', 'SUPPORT', 'Donate', 'Sponsorship',
        'CONTACT US'];
    return (
        <nav id="header">
            <div id="logoBox">
                <img id="logo" src="../Pictures/BajaLogo.jpg" alt="MSOE logo"/>
            </div>
            <div id="contentBox">
                <NavItems navItems={navItems} />
            </div>
        </nav>
    )
}