import React from "react"

import Pageshell from "../components/Pageshell"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Pageshell>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Pageshell>
)

export default NotFoundPage
