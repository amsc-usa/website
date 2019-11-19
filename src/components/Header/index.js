import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import classnames from 'classnames';

import MainNav from "../MainNav";
import Logo from "../Logo";
import Button from "../Button";
// import { data } from "../../globals/data/navigation";

import './styles.scss';

const mobileOpenClass = 'ams-main-nav--mobile-open';
const mobileOpenIcon = ['fa-bars', 'fa-times'];

const Header = ({ siteTitle }) => {
  const [mobileHeight, setMobileHeight] = useState(null);
  const [hamburger, setHamburger] = useState(mobileOpenIcon[0]);

  const header = useRef();

  useEffect(() => {
    window.addEventListener('resize', mobileResize);
  }, [])

  return (
    <header className='ams-header' ref={header}>
      <Logo />
      <MainNav style={mobileHeight} />
      <div className="ams-header__cta">
        <Button href="tel:770-986-0620">
          770-986-0620
          <i class="fas fa-phone-alt"></i>
        </Button>
      </div>
      <div className="ams-header__hamburger">
        <button className="ams-header__hamburger-btn" onClick={toggleMobileNav}>
          <i className={classnames('fas', hamburger)}></i>
        </button>
      </div>
    </header>
  );

  function toggleMobileNav () {
    if (hamburger === mobileOpenIcon[0]) {
      openMobile();
    } else {
      closeMobile();
    }
  }

  function mobileResize () {
    if (window.outerWidth >= 750) {
      closeMobile();
    } else {
      calcHeight();
    }
  }

  function openMobile () {
    setHamburger(mobileOpenIcon[1]);
    document.body.classList.add(mobileOpenClass);
    calcHeight();
  }

  function closeMobile () {
    setHamburger(mobileOpenIcon[0]);
    document.body.classList.remove(mobileOpenClass);
    setMobileHeight(null)
  }

  function calcHeight () {
    setMobileHeight({
      height: `calc(100vh - ${header.current.offsetHeight}px)`,
      top: header.current.offsetHeight
    });
  }
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
