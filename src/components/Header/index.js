import PropTypes from "prop-types";
import React from "react";

import Logo from "../Logo";
import Button from "../Button";
import Link from "../Link";
import { data } from "../../globals/data/navigation";

import './styles.scss';

const Header = ({ siteTitle }) => (
  <header>
    <Logo />
    <nav>
      <Button href="https://asdf/">Find products</Button>
      <ul>
        {data.map(({ href, text }, i) => {
          return (
            <li key={i}>
              <Link href={href}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
