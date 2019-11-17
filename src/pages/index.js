import React from "react";
import { Link } from "gatsby";

import Pageshell from "../components/Pageshell";
import SEO from "../components/seo";

const IndexPage = () => (
  <Pageshell>
    <SEO title="Home" />
    <h1>This is the homepage</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h1>This is the homepage</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h1>This is the homepage</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Pageshell>
);

export default IndexPage;
