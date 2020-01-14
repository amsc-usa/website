import React from "react";

import NotFound from '../components/NotFound';

import Pageshell from "../components/Pageshell";
import SEO from "../components/seo";

const NotFoundPage = () => {
  if (typeof window !== 'undefined') {
    window.location = '/';
  }

  return <SEO title="404: Page not found" description="Sorry, but we couldn't find the page you're looking for." />;
}

export default NotFoundPage
