import React from "react";
import Logo from "../Logo";

import './styles.scss';

const Footer = ({ siteTitle }) => (
  <footer className="ams-footer">
    <div className="ams-footer__container">
      <div className="ams-footer__big-blue">
        <Logo />
        <h1>
          Advanced Manufacturing<br />
          Solutions, Inc.
        </h1>
        <address>
          <p>
            <a href="tel:770-986-0620">770-986-0620</a> |
            <a href="https://www.google.com/maps/search/1627++Smith+Road+Chamblee,+GA+30341/@33.8900688,-84.3156176,13z/data=!3m1!4b1">1627  Smith Road Chamblee, GA 30341</a>
          </p>
          <p>© 2019 All rights reserved </p>
        </address>
      </div>
      <nav>

      </nav>
    </div>
  </footer>
);

export default Footer;
