import React from 'react';
import classnames from 'classnames';
import Logo from '../Logo';

import './styles.scss';

const Button = ({ href, className, children, ...restProps }) => {
  const classList = classnames(className, 'ams-btn');
  if (href) {
    return <a href={href} className={classList} {...restProps}>{children}</a>;
  }

  return <button className={classList} {...restProps}>{children}</button>;
};

export default Button;
