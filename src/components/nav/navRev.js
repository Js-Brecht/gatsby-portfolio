import React, { useState } from "react";
import NavLogoRev from "./NavLogoRev";
import NavButtonRev from "./NavButtonRev";
import NavMenu from "./NavMenu";
import navStyles from "./nav.module.scss";

const Nav = () => {
  const [menuActive, toggleMenu] = useState(false)
  return (
    <header className={navStyles.header}>
      <nav className={navStyles.navWrapper}>
        <NavLogoRev />
        <div className={navStyles.spacer} />
        <NavButtonRev toggle={toggleMenu} isActive={menuActive} />
      </nav>
      <NavMenu isActive={menuActive} />
    </header>
  )
}
export default Nav