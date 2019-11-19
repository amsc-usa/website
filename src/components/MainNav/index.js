import PropTypes from "prop-types";
import React from "react";
import classnames from 'classnames';

import { data } from "../../globals/data/navigation";

import './styles.scss';

const MainNav = ({ className, ...restProps }) => (
  <nav className={classnames('ams-main-nav', className)} {...restProps}>
    <ul className="ams-main-nav__list">
      {data.map(({ href, text }, i) => {
        return (
          <li className="ams-main-nav__item" key={i}>
            <a href={href}>{text}</a>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default MainNav;
