import React from "react";

import Nav from "../nav/nav";
import Footer from "../footer/footer";

import "../../styles/global.scss";
import layoutStyles from "./layout.module.scss";

const DarkLayout = ({ children }) => {
  return (
    <main className={layoutStyles.outerWrapperDark}>
      <Nav />
      <div className={layoutStyles.innerWrapper}>
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default DarkLayout