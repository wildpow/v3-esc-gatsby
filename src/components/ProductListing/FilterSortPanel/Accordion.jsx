import React from "react"

import chevron from "../../../../images/new/chevron-down-solid.svg"
import { useWindowSize } from "../../../../context/WindowSizeContext"

const Accordion = ({ title, children }) => {
  return (
    <div active={active} height={height} bg={chevron}>
      {children}
    </div>
  )
}

export default Accordion
