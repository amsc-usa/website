/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../Header";
import Footer from "../Footer";
import "./styles.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="ams">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="ams-content">{children}</main>
      <Footer />
    </div>
  )
};

export default Layout;
