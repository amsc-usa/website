import React from 'react';
import Link from '../components/Link';
import CapabilityList from "../components/CapabilityList";

import { data } from "../globals/data/capabilities";

import Pageshell from "../components/Pageshell";
import SEO from "../components/seo";

const IndexPage = () => (
  <Pageshell>
    <SEO />
    <CapabilityList
      title="Our capabilities"
      data={data}
    />
  </Pageshell>
);

export default IndexPage;
