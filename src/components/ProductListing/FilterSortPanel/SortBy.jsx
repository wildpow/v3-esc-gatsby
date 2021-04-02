import React from "react"
import chevron from "../../../../images/new/chevron-down-solid.svg"

const SortBy = ({ onChange }) => {
  return (
    <div name="sorting" onChange={onChange} id="sorting" bg={chevron}>
      SORT BY
    </div>
  )
}

export default SortBy
