import React from 'react';
// import Link from '../components/Link';
import CapabilityList from "../components/CapabilityList";
import LeadspaceHome from "../components/LeadspaceHome";

import { data } from "../globals/data/capabilities";

import Pageshell from "../components/Pageshell";
import SEO from "../components/seo";

const IndexPage = () => (
  <Pageshell>
    <SEO
      description="AMS is a leading vertically integrated contract manufacturer with 40 years experience, specializing in custom mechanical products and services. AMS offers turn-key solutions and a full range of value-added services to our customers, which includes industrial design, product design, prototyping, tooling, manufacturing, testing, packing."
    />
    <LeadspaceHome />
    <CapabilityList
      title="Our capabilities"
      data={data}
    />
  </Pageshell>
);

export default IndexPage;
