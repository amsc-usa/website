import React from "react"
import Capability from "../components/Capability";
import CapabilityList from "../components/CapabilityList";

import { data } from "../globals/data/capabilities";

import Pageshell from "../components/Pageshell"
import SEO from "../components/seo"

const Logistics = () => (
  <Pageshell>
    <SEO
      title="Logistics"
      description="AMS provides our customers with total dock to dock services. Our customers can be as involved as they like or leave the whole process of getting product from China to USA." />
    <Capability data={data.logistics} />
    <CapabilityList
      title={"See more of our capabilities"}
      data={data}
      current={'logistics'}
    />
  </Pageshell>
)

export default Logistics
