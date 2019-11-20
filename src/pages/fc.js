import React from "react"
import Link from "../components/Link"

import Pageshell from "../components/Pageshell"
import SEO from "../components/seo"

const SecondPage = () => {

  if (typeof window !== 'undefined') {
    window.location = '/';
  }

  return (
    <SEO
      description="AMS is a leading vertically integrated contract manufacturer with 40 years experience, specializing in custom mechanical products and services. AMS offers turn-key solutions and a full range of value-added services to our customers, which includes industrial design, product design, prototyping, tooling, manufacturing, testing, packing."
    />
  );
}

export default SecondPage
