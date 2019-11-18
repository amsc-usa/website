import React from "react"
import { Link } from "gatsby"

import Pageshell from "../components/Pageshell"
import SEO from "../components/seo"

const SecondPage = () => (
  <Pageshell>
    <SEO title="Supply Chain" />
    <h1>Supply Chain Management</h1>
    <Link to="/">Go back to the homepage</Link>
  </Pageshell>
)

export default SecondPage
