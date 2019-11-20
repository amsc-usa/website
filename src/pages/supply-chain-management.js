import React from "react";
import Capability from "../components/Capability";
import CapabilityList from "../components/CapabilityList";

import { data } from "../globals/data/capabilities";

import Pageshell from "../components/Pageshell"
import SEO from "../components/seo"

const SupplyChainManagement = () => (
  <Pageshell>
    <SEO
      title="Supply Chain Management"
      description="Our end-to-end supply chain capabilities are critical to our overall quality, value, and customer satisfaction, and we manage this function accordingly."
    />
    <Capability data={data.supplyChainManagement}/>
    <CapabilityList
      title="See more of our capabilities"
      data={data}
      current={'suplyChainManagement'}
    />
  </Pageshell>
)

export default SupplyChainManagement;
