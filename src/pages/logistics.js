import React from "react"
import { Link } from "gatsby"

import Pageshell from "../components/Pageshell"
import SEO from "../components/seo"

const SecondPage = () => (
  <Pageshell>
    <SEO title="Logistics" />
    <h1>Logistics</h1>
    <Link to="/">Go back to the homepage</Link>
  </Pageshell>
)

export default SecondPage
