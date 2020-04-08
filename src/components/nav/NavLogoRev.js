import React from "react";
import { Link } from "gatsby";

import LogoSVG from "../../images/logorev.svg";
import navStyles from "./nav.module.scss";

const NavLogoRev = () => {
  return (
    <div>
      <Link to="/"><img className={navStyles.logo}  src={LogoSVG} alt="logo" /></Link>
    </div>
  )
}

export default NavLogoRev