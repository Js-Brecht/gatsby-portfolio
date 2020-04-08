import React, { useState } from "react";
import NavLogo from "./NavLogo";
import NavButton from "./NavButton";
import NavMenu from "./NavMenu";
import navStyles from "./nav.module.scss";

const Nav = () => {
  const [menuActive, toggleMenu] = useState(false)
  return (
    <header className={navStyles.header}>
      <nav className={navStyles.navWrapper}>
        <NavLogo />
        <div className={navStyles.spacer} />
        <NavButton toggle={toggleMenu} isActive={menuActive} />
      </nav>
        <NavMenu isActive={menuActive} />
    </header>
  )
}

export default Nav