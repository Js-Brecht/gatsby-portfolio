import React from "react";
import { Link } from "gatsby";

import LogoSVG from "../../images/logo.svg";
import navStyles from "./nav.module.scss";

const NavLogo = () => {
  return (
    <div>
      <Link to="/"><img className={navStyles.logo}  src={LogoSVG} alt="logo" /></Link>
    </div>
  )
}

export default NavLogo