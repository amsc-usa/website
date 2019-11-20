import React from "react";
import Starburst from '../Starburst'
import Button from '../Button'

import './styles.scss';

const LeadspaceHome = () => (
  <section className="ams-leadspace-home">
    <div className="ams-leadspace-home__content">
      <h1 className="ams-leadspace-home__title">
        Advanced Manufacturing<br />
        Solutions, inc.
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit est vel nunc dictum gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      <p>
        <Button className="ams-leadspace-home__cta" href="tel:770-986-0620">
          770-986-0620
          <i className="fas fa-phone-alt"></i>
        </Button>
      </p>
      <div className="ams-leadspace-home__bg">
        <Starburst />
      </div>
    </div>
  </section>
);

export default LeadspaceHome;
