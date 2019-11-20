import React from "react"
import Capability from "../components/Capability";
import CapabilityList from "../components/CapabilityList";

import { data } from "../globals/data/capabilities";

import Pageshell from "../components/Pageshell"
import SEO from "../components/seo"

const Logistics = () => (
  <Pageshell>
    <SEO title="Logistics" />
    <Capability data={data.logistics} />
    <CapabilityList
      title={"See more of our capabilities"}
      data={data}
      current={'logistics'}
    />
  </Pageshell>
)

export default Logistics
