import React from "react"
import Capability from "../components/Capability";
import CapabilityList from "../components/CapabilityList";

import { data } from "../globals/data/capabilities";

import Pageshell from "../components/Pageshell"
import SEO from "../components/seo"

const MechanicalDesign = () => (
  <Pageshell>
    <SEO title="Mechanical Design" />
    <Capability data={data.mechanicalDesign}/>
    <CapabilityList
      title="See more of our capabilities"
      data={data}
      current={'mechanicalDesign'}
    />
  </Pageshell>
)

export default MechanicalDesign;
