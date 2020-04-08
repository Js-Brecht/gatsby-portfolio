import React from "react";

import NavRev from "../nav/navRev";
import Footer from "../footer/footer";

import "../../styles/global.scss";
import layoutStyles from "./layout.module.scss";

const LightLayout = ({ children }) => {
  return (
    <main className={layoutStyles.outerWrapperLight}>
      <NavRev />
      <div className={layoutStyles.innerWrapper}>
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default LightLayout