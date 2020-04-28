import React from "react";
import Logo from "../Logo";
import Link from "../Link";
import MainNav from "../MainNav";

import { data } from "../../globals/data/navigation";

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
            <Link href="tel:512-987-9874">512-987-9874</Link> |
            <Link target="_blank" href="https://goo.gl/maps/W8ngd2CvEjYo1tE56">19600 W State Hwy 29 Liberty Hill, TX 78642</Link>
          </p>
          <p>© 2019 All rights reserved </p>
        </address>
      </div>
      <MainNav />
    </div>
  </footer>
);

export default Footer;
