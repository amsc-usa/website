import React from "react";
import Logo from "../Logo";

import './styles.scss';

const Link = ({ children, ...restProps }) => (
  <a className="ams-link" {...restProps}>{children}</a>
);

export default Link;
