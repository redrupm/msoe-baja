function NavItems({ navItems, handleClick }) {
    const items = [];

    for (let i = 0; i < navItems.length; i++) {
        const item = navItems[i];

        if (item.toUpperCase() === item) {
            // Main header item
            const subItems = [];

            // Check if next items are sub-items
            let j = i + 1;
            while (j < navItems.length && navItems[j].toUpperCase() !== navItems[j]) {
                subItems.push(navItems[j]);
                j++;
            }

            items.push(
                <div className="nav-group" key={i}>
                    <h1 className="nav-header clickable" onClick={() => handleClick(item)}>{item}</h1>
                    {subItems.length > 0 && (
                        <ul className="nav-dropdown">
                            {subItems.map((sub, index) => (
                                <li className="clickable" key={`${i}-${index}`} onClick={() => handleClick(sub)}>{sub}</li>
                            ))}
                        </ul>
                    )}
                </div>
            );
            i = j - 1;
        }
    }

    return <>{items}</>;
}

export default NavItems;
