import React from "react"
import { Link } from "gatsby"

import Pageshell from "../components/Pageshell"
import SEO from "../components/seo"

const SecondPage = () => (
  <Pageshell>
    <SEO title="Manufacturing Solutions" />
    <h1>Manufacturing Solutions</h1>
    <Link to="/">Go back to the homepage</Link>
  </Pageshell>
)

export default SecondPage
