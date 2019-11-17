import React from "react"
import { Link } from "gatsby"

import Pageshell from "../components/Pageshell"
import SEO from "../components/seo"

const SecondPage = () => {

  if (typeof window !== 'undefined') {
    window.location = '/';
  }

  return (
    <Pageshell>
      <SEO title="Page two" />
      <h1>Supply Chain Management</h1>
      <Link to="/">Go back to the homepage</Link>
    </Pageshell>
  );
}

export default SecondPage
