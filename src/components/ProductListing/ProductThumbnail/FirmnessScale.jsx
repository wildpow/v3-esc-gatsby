import styled from "styled-components"

const FirmnessScale = ({ firmNum }) => {
  let gradient =
    "linear-gradient(to left, #EAEAED 0%, #3F81CB 35%, #1565C0 50%, #3F81CB 65%, #EAEAED 100%)"
  const firmnessPosition = num => {
    switch (num) {
      case 1:
        gradient = "linear-gradient(to left, #EAEAED 0%, #1565C0 100%)"
        return `0%`
      case 2:
        return `9%`
      case 3:
        return `30%`
      case 4:
        return `52%`
      case 5:
        gradient = "linear-gradient(to right, #EAEAED 0%, #1565C0 100%)"
        return `60%`
      default:
        return undefined
    }
  }
  return (
    <div firmNum={firmnessPosition(firmNum)} gradient={gradient}>
      <div className="firm">Firm</div>
      <div className="scale" />
      <div className="soft">Soft</div>
    </div>
  )
}

export default FirmnessScale
