import React from "react";
import { Link } from "gatsby";

import ScrollLocker from "../scrolllocker";
import navStyles from "./nav.module.scss";


const Menu = ({ isActive }) => {
  
  return (
    <React.Fragment>
    {isActive && <ScrollLocker />}
    <div className={`${navStyles.menu} ${isActive ? navStyles.menuActive : ''}`}>
      <ul>
        <li><Link className={navStyles.menuItem} activeClassName={navStyles.menuItemActive} to="/">HOME</Link></li>
        <li><Link className={navStyles.menuItem} activeClassName={navStyles.menuItemActive} to="/portfolio">PORTFOLIO</Link></li>
        <li><Link className={navStyles.menuItem} activeClassName={navStyles.menuItemActive} to="/about">ABOUT</Link></li>
        <li><Link className={navStyles.menuItem} activeClassName={navStyles.menuItemActive} to="/contact">CONTACT</Link></li>
        <li><Link className={navStyles.menuItem} activeClassName={navStyles.menuItemActive} to="/journal">JOURNAL</Link></li>
      </ul>
    </div>
    </React.Fragment>
  )
}

export default Menu