// import { OutboundLink } from "gatsby-plugin-google-analytics";
// import { StaticQuery, graphql } from "gatsby";
// import styled from "styled-components";
// import { colors } from "../../../utils/styles";
import React from "react"

// const BirdLink = styled(OutboundLink)`
//   text-decoration: none;

// `;

// const CertReview = styled.div`
//   transition: all 0.25s ease-in;
//   &:hover {
//     transform: scale3d(1.05, 1.05, 1);
//   }
//   :focus {
//     box-shadow: 0 0 0 3px ${colors.blue["300"]};
//     outline: 0;
//     transition: box-shadow 0.15s ease-in-out;
//   }
//   width: 145px;
//   height: 96.656px;

//   font-family: ${(props) => props.theme.MainFont1};
//   background-color: ${colors.gray["100"]};
//   display: flex;
//   color: ${colors.blue["900"]};
//   border-radius: 5px;
//   justify-content: space-between;
//   div h4 {
//     font-weight: 400;
//     margin: 0;
//     padding: 0;
//     font-size: 1rem;
//   }
//   @media (min-width: 768px) {
//     line-height: 1.1em;
//     letter-spacing: 0.14em;
//     div h4 {
//       font-size: 0.9rem;
//     }
//   }
//   @media print {
//     color: black;
//     box-shadow: none;
//     text-shadow: none;
//   }
// `;

// const Words = styled.div`
//   padding: 7px 0 0 9px;
//   display: flex;
//   flex-direction: column;
//   @media (min-width: 768px) {
//     padding-top: 10px;
//     padding-left: 10px;
//   }
// `;
// const Cert = styled.img`
//   margin-top: -3px;
//   margin-right: 7px;
//   width: 45px;
//   justify-self: start;
//   height: 70px;
//   transform: scale(0.9);
// `;

// const Rating = styled.div`
//   padding-top: 10px;
//   display: flex;
//   img {
//     width: 15px;
//     height: 15px;
//   }
//   @media (min-width: 768px) {
//     padding-top: 5px;
//   }
// `;

// const AvgContainer = styled.div`
//   margin-top: 2px;
//   font-size: 0.8em;
//   margin-left: 4px;
//   font-family: ${(props) => props.theme.MainFont1};
//   @media (min-width: 812px) {
//     margin-top: 0px;
//     font-size: 0.9em;
//   }
// `;

const Bird = () => {
  // const starsArr = [];
  return (
    // <StaticQuery
    //   query={graphql`
    //     query birdeye {
    //       allWidget(filter: { id: { ne: "dummy" } }) {
    //         nodes {
    //           id
    //           avgRating
    //           reviewCount
    //         }
    //       }
    //     }
    //   `}
    //   render={(data) => {
    //     const { avgRating, reviewCount } = data.allWidget.nodes[0];
    //     for (let i = 0; i < avgRating; i += 1) {
    //       starsArr.push(
    //         <img src="/star.png" alt="start for rating" key={i + 200} />,
    //       );
    //     }
    //     return (
    //       <>
    //         <BirdLink
    //           href="https://birdeye.com/esc-mattress-center-154743411347922"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <CertReview>
    //             <Words>
    //               <h4>{reviewCount}</h4>
    //               <h4>Certified</h4>
    //               <h4>Reviews</h4>
    //               <Rating>
    //                 {starsArr}
    //                 <AvgContainer>{avgRating}</AvgContainer>
    //               </Rating>
    //             </Words>
    //             <Cert alt="BirdEye certified seal" src="/badge.png" />
    //           </CertReview>
    //         </BirdLink>

    //       </>
    //     );
    //   }}
    // />
    <div>ewf</div>
  )
}

export default Bird
