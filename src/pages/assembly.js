import React from 'react'
import Capability from '../components/Capability';
import CapabilityList from '../components/CapabilityList';

import { data } from '../globals/data/capabilities';

import Pageshell from '../components/Pageshell'
import SEO from '../components/seo';

const Assembly = () => (
  <Pageshell>
    <SEO
      title='Assembly'
      description="AMS has capabilities and resources to provide secondary operations for any mechanical parts we manufacturer."
    />
    <Capability data={data.assembly} />
    <CapabilityList
      title="See more of our capabilities"
      data={data}
      current={'assembly'}
    />
  </Pageshell>
);

export default Assembly
