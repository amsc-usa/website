import React from 'react';
import Link from '../components/Link';

import Pageshell from "../components/Pageshell";
import SEO from "../components/seo";

const IndexPage = () => (
  <Pageshell>
    <SEO />
    <h1>This is the homepage</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link href="/page-2/">Go to page 2</Link>
    <h1>This is the homepage</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link href="/page-2/">Go to page 2</Link>
    <h1>This is the homepage</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link href="/page-2/">Go to page 2</Link>
  </Pageshell>
);

export default IndexPage;
