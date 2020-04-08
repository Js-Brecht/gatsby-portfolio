import React from "react";
import navStyles from "./nav.module.scss";

const NavButton = ({ toggle, isActive }) => {
  return (
    <button className={navStyles.navButton} onClick={() => toggle(!isActive)} >
      <div className={`${navStyles.buttonBarRev} ${isActive ? navStyles.buttonActive : ''}`} />
    </button>
  )
}

export default NavButton