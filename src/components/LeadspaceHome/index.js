import React from "react";
import Starburst from '../Starburst'
import Button from '../Button'
import Link from '../Link'

import './styles.scss';

const LeadspaceHome = () => (
  <section className="ams-leadspace-home">
    <div className="ams-leadspace-home__content">
      <h1 className="ams-leadspace-home__title">
        Advanced Manufacturing<br />
        Solutions, inc.
      </h1>
      <p>AMS is a leading vertically integrated contract manufacturer with 40 years experience, specializing in custom mechanical products and services. AMS offers turn-key solutions and a full range of value-added services to our customers, which includes industrial design, product design, prototyping, tooling, manufacturing, testing, packing.</p>
      <p>
        <Button className="ams-leadspace-home__cta" href="tel:512-987-9874">
          512-987-9874
          <i className="fas fa-phone-alt"></i>
        </Button>
        <Link href="#capability-list">See our capabilities</Link>
      </p>
      <div className="ams-leadspace-home__bg">
        <Starburst />
      </div>
    </div>
  </section>
);

export default LeadspaceHome;
