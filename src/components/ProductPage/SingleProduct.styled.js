// import styled from "styled-components";
// import { FadeIn, H2 } from "../../../styles/mainStyles";
// import {
//   MainTitlePr1nt,
//   WrapperSingleMattPr1nt,
//   ListPr1nt,
//   DescriptionPr1nt,
// } from "../../../styles/_pr1nt/main";
// import { colors } from "../../../utils/styles";

// export const Description = styled.p`
//   font-weight: 400;
//   color: ${colors.gray["800"]};
//   font-family: ${(props) => props.theme.MainFont3};
//   align-self: center;
//   border-radius: 0.11rem;
//   margin-left: 0px;
//   margin-right: 0px;
//   font-size: 0.8rem;
//   padding: 5px 14px 10px 14px;
//   line-height: 1.5rem;
//   margin: 0;
//   @media (min-width: 360px) {
//     font-size: 0.9rem;
//   }
//   @media (min-width: 550px) {
//     font-size: 1rem;
//     padding-top: 15px;
//   }
//   @media (min-width: 768px) {
//     font-size: 1.1rem;
//     padding-right: 40px;
//     padding-left: 40px;
//     line-height: 1.7rem;
//   }
//   @media (min-width: 1022px) {
//     font-size: 1.35rem;
//     padding-right: 60px;
//     padding-left: 60px;
//     line-height: 2.3rem;
//   }
//   @media (min-width: 1300px) {
//     font-size: 1.4rem;
//     padding-top: 10px;
//     padding-right: 80px;
//     padding-left: 80px;
//     line-height: 2.35rem;
//     padding-bottom: 10px;
//   }
//   ${DescriptionPr1nt}
// `;

// export const Main = styled.div`
//   align-items: center;
//   height: 100%;
//   display: flex;
//   justify-content: space-evenly;
//   flex-direction: column;
//   background-color: white;
//   padding-top: 5px;
//   margin-bottom: 30px;
//   @media (min-width: 768px) {
//     margin-bottom: 0;
//     flex-direction: row;
//     align-items: initial;
//     padding-left: 5px;
//     padding-right: 5px;
//   }
//   @media print {
//     flex-direction: row;
//     margin-top: 0;
//   }
// `;

// export const MainTitle = styled(H2)`
//   font-weight: 700;
//   background-color: ${(props) =>
//     props.red ? props.theme.mainColor2 : props.theme.mainColor1};
//   @media (min-width: 768px) {
//     text-align: left;
//     padding-left: 40px;
//   }
//   @media (min-width: 1022px) {
//     padding-left: 60px;
//   }
//   @media (min-width: 1300px) {
//     padding-left: 80px;
//   }
//   ${MainTitlePr1nt}
// `;

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   box-shadow: ${(props) => props.theme.newBoxShadow};
//   animation-name: ${FadeIn};
//   background-color: white;
//   ${(props) => props.theme.Animation}
//   justify-content: center;
//   border-radius: 0.11rem;

//   ${WrapperSingleMattPr1nt}
// `;
