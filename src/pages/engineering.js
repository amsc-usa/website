import React from "react"
import Capability from "../components/Capability";
import CapabilityList from "../components/CapabilityList";

import { data } from "../globals/data/capabilities";

import Pageshell from "../components/Pageshell"
import SEO from "../components/seo"

const Engineering = () => (
  <Pageshell>
    <SEO title="Engineering" />
    <Capability data={data.engineering}/>
    <CapabilityList
      title="See more of our capabilities"
      data={data}
      current={'engineering'}
    />
  </Pageshell>
)

export default Engineering
