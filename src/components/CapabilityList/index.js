import React, { useEffect } from 'react';
import Link from '../Link';

import './styles.scss';

const CapabilityList = ({ title, data, current }) => {
  const dataKeyList = Object.keys(data);

  if (current) {
      prepRecommendList(dataKeyList, current, 4);
  }

  return (
    <section className='ams-capability-list'>
      <h1 className='ams-capability-list__title'>{title}</h1>
      <ul className="ams-capability-list__list">
        {dataKeyList.map((key, i) => {
          const section = data[key][0];

          return (
            <li key={i} className='ams-capability-list__item'>
              <div className='ams-capability-list__item-container'>
                <div className='ams-capability-list__item-content'>
                  <h2 className='ams-capability-list__item-title'>{section.title}</h2>
                  <p>
                    <Link href={`/${getURLName(section.title)}`}>Learn more</Link>
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function getURLName (title) {
  return title.toLowerCase().replace(/ /g, '-');
}

function prepRecommendList(list, current, num) {
  for (let i = 0; i < list.length; i++ ) {
    const randNum = Math.floor(Math.random() * i);
    const tempObj = list[i];
    list[i] = list[randNum];
    list[randNum] = tempObj;
  }

  list.splice(list.indexOf(current), 1);
  list.length = num;
}

export default CapabilityList;
