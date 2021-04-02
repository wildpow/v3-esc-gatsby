// import styled, { keyframes } from "styled-components";
// import PropTypes from "prop-types";
// import Popup from "reactjs-popup";
import React from "react"
// export const FadeIn = keyframes`
//   from { opacity: 0; }
//   to { opacity: 1; }
// `;
// const Firmness = styled.div`
//   --heightLg: 21px;
//   width: 100%;
//   height: 12px;
//   background: white;
//   display: flex;
//   align-content: center;
//   align-items: center;
//   justify-items: center;
//   justify-content: space-between;
//   flex-wrap: nowrap;
//   @media screen and (min-width: 768px) {
//     height: 20px;
//   }
//   @media screen and (min-width: 900px) {
//     height: 50px;
//     padding-bottom: 5px;
//     padding-top: 5px;
//   }
//   .firm,
//   .soft {
//     font-family: ${(props) => props.theme.MainFont1};
//     color: black;
//     width: 22%;
//     text-align: center;
//     font-size: 0.8rem;
//     @media screen and (min-width: 735px) {
//       font-size: 1rem;
//       font-weight: 700;
//       width: 20%;
//     }
//     @media screen and (min-width: 900px) {
//       font-size: 1.2rem;
//       font-weight: 700;
//     }
//   }

//   .scale {
//     position: relative;
//     background: #eaeaed;
//     display: flex;
//     width: 55%;
//     height: 12px;
//     :after {
//       content: "";
//       width: 40%;
//       height: 12px;
//       background-image: ${(props) => props.gradient};
//       position: absolute;
//       top: 0;
//       left: ${(props) => props.firmNum};
//       @media screen and (min-width: 768px) {
//         height: 15px;
//       }
//       @media screen and (min-width: 900px) {
//         height: var(--heightLg);
//       }
//     }
//     @media screen and (min-width: 768px) {
//       height: 15px;
//       width: 80%;
//     }
//     @media screen and (min-width: 900px) {
//       height: var(--heightLg);
//     }
//   }
// `;

// const Wrapper = styled.div`
//   margin-top: 5px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   max-width: 350px;
//   width: 100%;
//   /* height: 100%; */
//   h6 {
//     display: none;
//   }
//   a {
//     justify-self: center;
//     align-self: center;
//     font-family: ${(props) => props.theme.MainFont1};
//     color: ${(props) => props.theme.mainColor1};
//     transition: color 0.2s ease-in;
//     &:hover {
//       color: ${(props) => props.theme.mainColor2};
//     }
//   }
//   @media screen and (min-width: 375px) {
//     h6 {
//       display: block;
//       margin-top: 0px;
//       margin-bottom: 5px;
//       font-family: ${(props) => props.theme.MainFont3};
//       border-bottom: 4px solid #eb1c24;
//       padding-bottom: 2px;
//       padding-left: 7px;
//       font-size: 1rem;
//     }
//   }
//   @media screen and (min-width: 735px) {
//     h6 {
//       font-size: 1.2rem;
//     }
//     a {
//       font-size: 1.1rem;
//     }
//   }
//   @media screen and (min-width: 1024px) {
//     h6 {
//       font-size: 1.5rem;
//     }
//     a {
//       font-size: 1.2rem;
//     }
//   }
// `;
// const contentStyle = {
//   maxWidth: "600px",
//   width: "90%",
//   padding: "0px",
//   background: "white",
//   border: "1px solid lightgray",
//   borderRadius: "10px",
// };
// const OpenButton = styled.button`
//   border: none;
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none;
//   background: white;
//   font-family: ${(props) => props.theme.MainFont1};
//   text-decoration: underline;
//   color: ${(props) => props.theme.mainColor1};
//   text-align: center;
//   :hover,
//   :active {
//     color: ${(props) => props.theme.mainColor2};
//   }
// `;
// const Popper = styled.div`
//   transition: all 0.25s ease-in-out;
//   opacity: 1;
//   animation-name: ${FadeIn};
//   display: flex;
//   justify-content: center;
//   .button {
//     font-family: ${(props) => props.theme.MainFont1};
//     color: #000000;
//     cursor: pointer;
//     padding: 0px 30px;
//     display: inline-block;
//     margin: 10px 15px;
//     text-transform: uppercase;
//     line-height: 2em;
//     letter-spacing: 1.5px;
//     font-size: 1em;
//     outline: none;
//     position: relative;
//     font-size: 14px;
//     font-weight: 700;
//     border: 3px solid ${(props) => props.theme.mainColor1};
//     background-color: #ffffff;
//     border-radius: 15px 15px 15px 15px;
//     -webkit-transition: all 0.3s;
//     transition: all 0.3s;
//   }
//   .modal {
//     font-size: 12px;
//   }
//   .modal > .header {
//     width: 100%;
//     margin-top: 0;
//     margin-bottom: 0;
//     padding-top: 10px;
//     font-family: ${(props) => props.theme.MainFont3};
//     border-bottom: 4px solid #eb1c24;
//     padding-bottom: 2px;
//     font-size: 1.4rem;
//     padding-left: 15px;
//     font-weight: 400;
//   }
//   .modal > .content {
//     font-family: ${(props) => props.theme.MainFont1};
//     font-size: 1rem;
//     line-height: 1.3rem;
//     font-weight: 300;
//     width: 100%;
//     padding: 10px 15px 10px 15px;
//     margin-bottom: 0;
//     margin-top: 0;
//   }
//   .modal > .actions {
//     margin: auto;
//   }
//   .modal > .actions {
//     width: 100%;
//     padding: 0px 5px 10px 5px;
//     text-align: center;
//   }
// `;
const FirmnessScale = ({ firmness }) => {
  // let gradient =
  //   "linear-gradient(to left, #EAEAED 0%, #3F81CB 35%, #1565C0 50%, #3F81CB 65%, #EAEAED 100%)";
  // const firmnessPosition = (num) => {
  //   switch (num) {
  //     case 1:
  //       gradient = "linear-gradient(to left, #EAEAED 0%, #1565C0 100%)";
  //       return `0%`;
  //     case 2:
  //       return `9%`;
  //     case 3:
  //       return `30%`;
  //     case 4:
  //       return `52%`;
  //     case 5:
  //       gradient = "linear-gradient(to right, #EAEAED 0%, #1565C0 100%)";
  //       return `60%`;
  //     default:
  //       return undefined;
  //   }
  // };
  return (
    // <Wrapper>
    //   <h6>Firmness Scale</h6>
    //   <Firmness firmNum={firmnessPosition(firmness)} gradient={gradient}>
    //     <div className="firm">Firm</div>
    //     <div className="scale" />
    //     <div className="soft">Soft</div>
    //   </Firmness>
    //   <Popup
    //     closeOnDocumentClick
    //     position="top center"
    //     // modal
    //     closeOnEscape
    //     repositionOnResize
    //     keepTooltipInside
    //     contentStyle={contentStyle}
    //     trigger={
    //       <OpenButton className="openButton" type="button">
    //         Learn More
    //       </OpenButton>
    //     }
    //   >
    //     {(close) => (
    //       <Popper>
    //         <article className="modal">
    //           <h3 className="header">Firmness Scale </h3>
    //           <p className="content">
    //             Firmness ratings are based on customer feedback and manufacturer
    //             information. Feel is subjective and we recommend experiencing
    //             the bed for yourself in our showroom.
    //           </p>
    //           <div className="actions">
    //             <button type="button" className="button" onClick={close}>
    //               close
    //             </button>
    //           </div>
    //         </article>
    //       </Popper>
    //     )}
    //   </Popup>
    // </Wrapper>
    <div>ef</div>
  )
}

// FirmnessScale.propTypes = {
//   firmness: PropTypes.number.isRequired,
// };

export default FirmnessScale
