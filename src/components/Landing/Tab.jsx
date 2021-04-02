// import styled from "styled-components";
// import PropTypes from "prop-types";
// import { colors } from "../../utils/styles";
import React from "react"

// const Button = styled.button`
//   color: ${(props) => (props.isActive ? "white" : "#93959b")};
//   font-size: 17px;
//   padding: 10px 15px;
//   font-family: ${(props) => props.theme.MainFont1};
//   text-decoration: none;
//   background-color: none;
//   background: ${(props) => (props.isActive ? colors.red[800] : "none")};
//   border: none;
//   transition: all 0.2s ease;
//   :hover {
//     background-color: ${colors.blue[800]};
//     color: white;
//   }
// `;
const Tab = ({ tabID, children, setActiveTab, activeTab }) => {
  const isActive = activeTab === tabID
  return (
    // <Button onClick={() => setActiveTab(tabID)} isActive={isActive}>
    //   {children}
    // </Button>
    <div>wef</div>
  )
}

export default Tab

// Tab.propTypes = {
//   tabID: PropTypes.number.isRequired,
//   children: PropTypes.string.isRequired,
//   setActiveTab: PropTypes.func.isRequired,
//   activeTab: PropTypes.number,
// };

// Tab.defaultProps = {
//   activeTab: 0,
// };
