import React from "react";
import classnames from 'classnames';
import { markdown } from 'markdown';
import Button from '../button';

import './styles.scss';

const Capability = ({ data }) => (
  <div className="ams-capabilities">
    {data.map((section, i) => (
      <section className={classnames('ams-capability', sectionType(section, i))}>
        {renderOverview(section)}
        {renderMedia(section)}
      </section>
    ))}
  </div>
);

function sectionType (section, i) {
  let type = [];

  if (i === 0) {
    type.push('ams-capability--first');
  } else {
    type.push('ams-capability--alt');
  }

  if (!section.title
    && !section.text
    && (!section.cta
    || !section.cta.text
    || !section.cta.href)
    && section.image
    && section.image.src
    && section.image.alt) {
    type.push('ams-capability--image-only');
  }

  return type;
}

function renderTitle (title) {
  if (!title) {
    return null;
  }

  return <h1 className="ams-capability__title">{title}</h1>;
}

function renderDescription (md) {
  if (!md) {
    return null;
  }

  return <div className="ams-capability__md" dangerouslySetInnerHTML={{__html: markdown.toHTML(md) }} />;
}

function renderCTA (cta) {
  let iconJSX = null;

  if (!cta || !cta.href || !cta.text) {
    return null;
  }

  if (cta.icon) {
    iconJSX = (<i className={classnames('fas', cta.icon)}></i>);
  }

  return (
    <p className="ams-capabilities__cta">
      <Button href={`tel:${cta.href}`}>
        {cta.text}
        {iconJSX}
      </Button>
    </p>
);
}

function renderOverview (section) {
  if (!section.title && !section.text) {
    return null;
  }

  return (
    <div className="ams-capability__overview">
      <div className="ams-capability__overview-wrapper">
        {renderTitle(section.title)}
        {renderDescription(section.text)}
        {renderCTA(section.cta)}
      </div>
    </div>
  );
}

function renderMedia (section) {

  if (!section.image || !section.image.src || !section.image.alt) {
    return null;
  }

  return (
    <div className="ams-capability__media">
      <div className="ams-capability__media-wrapper">
        <img src={section.image.src} alt={section.image.alt} />
      </div>
    </div>
  );
}

export default Capability;
