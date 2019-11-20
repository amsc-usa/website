import React from "react"
import Capability from "../components/Capability";
import CapabilityList from "../components/CapabilityList";

import { data } from "../globals/data/capabilities";

import Pageshell from "../components/Pageshell"
import SEO from "../components/seo"

const Engineering = () => (
  <Pageshell>
    <SEO
      title="Engineering"
      description="Our engineering team will provide thorough analysis of customer’s design and provide a detailed report of any proposed changes to enhance the manufacturability of the product and provide the best cost."
    />
    <Capability data={data.engineering}/>
    <CapabilityList
      title="See more of our capabilities"
      data={data}
      current={'engineering'}
    />
  </Pageshell>
)

export default Engineering
