import React from "react";

import DarkLayout from "../components/layout/DarkLayout"
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <DarkLayout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </DarkLayout>
  )
}

export default NotFoundPage