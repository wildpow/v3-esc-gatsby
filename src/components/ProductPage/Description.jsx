// import styled from "styled-components";
// import PropTypes from "prop-types";
// import { colors, fonts } from "../../../utils/styles";
// import FoundationCompat from "../FoundationCompat";
// import FeatureList from "../../shared/SingleProduct/FeatureList";
// import {

//   Description,

//   MainTitle,

// } from "../../shared/SingleProduct/SingleProduct.styled";
import React from "react"

// const DescriptionRoot = styled.section`
//   .bottomSpacing {
//     margin-bottom: 65px;
//   }
//   .extra {
//     display: flex;
//     width: 100%;
//     justify-content: flex-start;
//     font-family: ${fonts.sans};
//     h5 {
//       margin-bottom: 0;
//       font-weight: 500;
//       padding-bottom: 2px;
//       border-bottom: 4px solid ${colors.blue[800]};
//     }
//   }
//   background-color: ${colors.gray[200]};
//   header {
//     margin-bottom: 20px;
//     background-color: ${colors.red[800]};
//     h3 {
//       text-align: center;
//       margin: 0 auto;
//       max-width: 1000px;
//     }
//   }
//   .wrapper {
//     max-width: 600px;
//     margin: 0 auto;
//     padding-right: 10px;
//     padding-left: 10px;
//   }
//   @media (min-width: 768px) {
//     /* header {
//       h3 {
//         padding-left: 20px;
//       }
//     } */
//     .wrapper {
//       max-width: 1000px;
//       padding-right: 15px;
//       padding-left: 15px;
//     }
//     .extra {
//       justify-content: flex-end;

//     }
//   }
//   @media (min-width: 1075px) {
//     .wrapper {
//       max-width: 1125px;

//     }
//   }
//   @media (min-width: 1275px) {
//     .wrapper {
//       max-width: 1205px;
//       padding-right: 0;
//       padding-left: 0;
//     }
//   }
//   @media print {
//     margin-top: -25px;
//     .wrapper {
//       padding-right: 0px;
//       padding-left: 0px;
//     }
//     .bottomSpacing {
//       margin-bottom: 0px;
//       margin-top: -25px;
//     }
//     .extra {
//       justify-content: flex-end;
//     }
//   }
// `;
// const DescriptionBottom = styled(Description)`
//   padding-left: 0;
//   padding-right: 0;
//   padding-bottom: 0;
//   @media print {
//     margin: 0;
//     padding: 0;
//   }
// `;
// const MainTitleBottom = styled(MainTitle)`
//   padding-left: 0px;
//   padding-right: 0px;
//   text-align: start;

//   @media (max-width: 1000px) {
//     padding-right: 20px;
//     padding-left: 20px;
//   }
// `;
export default function DescriptionSection({
  warranty,
  profile,
  description,
  featureList,
  width,
  mattress,
}) {
  return (
    // <DescriptionRoot>
    //   <header id="moreInfo">
    //     <MainTitleBottom red as="h3">
    //       OVERVIEW & SPECS
    //     </MainTitleBottom>
    //   </header>
    //   <div className="wrapper">
    //     <DescriptionBottom>{description}</DescriptionBottom>
    //     <div className="extra bottomSpacing">
    //       {warranty && (
    //         <h5 style={{ marginRight: "20px" }}>{`Warranty: ${warranty}`}</h5>
    //       )}
    //       {profile && <h5>{`Profile: ${profile}"`}</h5>}
    //     </div>
    //     {featureList && (
    //       <div className="bottomSpacing">
    //         <FeatureList list={featureList} width={width} />
    //       </div>
    //     )}
    //     {mattress && (
    //       <div className="bottomSpacing">
    //         <FoundationCompat />
    //       </div>
    //     )}
    //   </div>
    // </DescriptionRoot>
    <div>wef</div>
  )
}

// DescriptionSection.defaultProps = {
//   mattress: false,
//   warranty: null,
//   profile: null,
//   featureList: null,
// };

// DescriptionSection.propTypes = {
//   mattress: PropTypes.bool,
//   warranty: PropTypes.string,
//   profile: PropTypes.number,
//   description: PropTypes.string.isRequired,
//   featureList: PropTypes.instanceOf(Object),
//   width: PropTypes.number.isRequired,
// };
