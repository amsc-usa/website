import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const Button = ({ href, className, children, ...restProps }) => {
  const classList = classnames(className, 'ams-btn');
  if (href) {
    return <a href={href} className={classList} {...restProps}><span>{children}</span></a>;
  }

  return <button className={classList} {...restProps}><span>{children}</span></button>;
};

export default Button;
