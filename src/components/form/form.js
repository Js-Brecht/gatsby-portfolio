import React from "react";

import formStyles from "./form.module.scss";

const Form = () => {
  return (
    <div className={formStyles.formContainer}>
      <h3 className={formStyles.formHeader}>Let's work together and change the world,<br />one pixel at a time.</h3>
      <form method="post" action="mailto:wailunfung@gmail.com" target="_blank">
        <div className={formStyles.inputGroup}>
          <input className={formStyles.inputStyle} type="text" placeholder="NAME" name="name" id="name" />
        </div>
        <div className={formStyles.inputGroup}>
          <input className={formStyles.inputStyle} type="email" placeholder="EMAIL" name="email" id="email" />
        </div>
        <div className={formStyles.inputGroup}>
          <input className={formStyles.inputStyle} type="text" placeholder="SUBJECT" name="subject" id="subject" />
        </div>
        <div className={formStyles.inputGroup}>
          <textarea className={formStyles.inputStyle} placeholder="Say Hi" name="MESSAGE" id="message" rows="5" />
        </div>    
        <button type="submit">SUBMIT</button>
      </form>
    </div>

  )
}

export default Form