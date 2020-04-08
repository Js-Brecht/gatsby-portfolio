import React from "react";

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.info}>
        <span className={footerStyles.mo}>© 2012-2020</span>
        <span className={footerStyles.dt}>© 2012-2020. Built using Gatsby, React and other fancy things.</span>
        <nav>
          <a className={footerStyles.socialLink} href="https://www.linkedin.com/in/alan-fung-2b11b677/" target="_blank" rel="noopener noreferrer">li.</a>
          <a className={footerStyles.socialLink} href="https://codepen.io/wailun" target="_blank" rel="noopener noreferrer">cp.</a>
          <a className={footerStyles.socialLink} href="https://github.com/wailunfung" target="_blank" rel="noopener noreferrer">gh.</a>
          <a className={footerStyles.socialLink} href="..." target="_blank" rel="noopener noreferrer">v1.</a>
        </nav>
      </div>
      <div className={footerStyles.bar} />
      <div className={footerStyles.info}>
        <span className={footerStyles.name}>Portfolio of Alan Fung</span>
        <span className={footerStyles.title}>Full Stack Designer</span>
      </div>
    </footer>
  )
}

export default Footer