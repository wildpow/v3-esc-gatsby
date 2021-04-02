import styled from "styled-components";
import { Link } from "gatsby";
import { FadeIn, FlexCol, FlexRow } from "./mainStyles";
import { colors } from "../utils/styles";

// export const AdjMarkdown = styled.div`
//   font-family: ${(props) => props.theme.MainFont3};
//   padding: 0px;
//   margin-top: 7%;
//   width: 50%;
//   display: none;
//   p {
//     border-bottom: 4px solid ${(props) => props.theme.mainColor2};
//     font-size: 1.3rem;
//     margin-top: 0;
//     margin-bottom: 0;
//     padding-bottom: 2px;
//     padding-left: 20px;
//     margin-left: 20px;
//   }
//   ul {
//     list-style: square;
//     margin-top: 10px;
//     padding-right: 10px;
//     font-size: 1rem;
//   }
//   li {
//     line-height: 1.35rem;
//     padding-bottom: 2px;
//     font-size: 0.9rem;
//   }
//   @media (min-width: 568px) {
//     display: block;
//   }
//   @media (min-width: 640px) {
//     p {
//       font-size: 1.4rem;
//     }
//   }
//   @media (min-width: 731px) {
//     margin-top: 5%;
//     p {
//       padding-bottom: 3px;
//       font-size: 1.6rem;
//     }
//     li {
//       font-size: 1.2rem;
//       line-height: 1.6rem;
//     }
//   }
//   @media (min-width: 992px) {
//     p {
//       font-size: 1.8rem;
//       margin-top: 0;
//       margin-bottom: 0;
//       padding-bottom: 2px;
//     }
//     ul {
//       margin-top: 10px;
//     }
//     li {
//       padding-bottom: 2px;
//       font-size: 1.2rem;
//     }
//   }
//   @media (min-width: 1024px) {
//     p {
//       font-size: 2rem;
//       padding-bottom: 4px;
//       font-weight: 700;
//     }
//     li {
//       font-size: 1.4rem;
//       line-height: 2.1rem;
//       letter-spacing: 0.03rem;
//     }
//   }
//   @media (min-width: 1300px) {
//     p {
//       font-size: 2rem;
//       padding-left: 7%;
//     }
//   }
// `;

export const Main = styled(FlexCol)`
  animation-name: ${FadeIn};
  ${(props) => props.theme.Animation}
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 5px;
  padding-right: 5px;
  @media (min-width: 1022px) {
    padding-bottom: 25px;
    padding-top: 25px;
  }
  @media (min-width: 1200px) {
    margin-left: 120px;
    margin-right: 120px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 2px;
  margin-right: 2px;
  color: black;
  margin-bottom: 20px;
  border-radius: 0.14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  transition: ${(props) => props.theme.hoverTransition};
  box-shadow: ${(props) => props.theme.hoverBoxBefore};
  &:hover {
    transform: ${(props) => props.theme.hoverTransform};
    box-shadow: ${(props) => props.theme.hoverBoxAfter};
  }
`;

export const H3 = styled.h3`
  text-shadow: ${(props) => props.theme.newTextShadow};
  font-family: ${(props) => props.theme.MainFont1};
  background-color: ${colors.blue["900"]};
  color: ${colors.gray["100"]};
  margin-top: 0;
  text-align: center;
  margin-bottom: 0;
  font-size: 1rem;
  padding: 10px 5px 10px 5px;
  letter-spacing: 0.12rem;
  @media (min-width: 560px) {
    font-size: 1.4rem;
    padding: 10px 30px 10px 30px;
  }
  @media (min-width: 692px) {
    word-spacing: 0.18rem;
    letter-spacing: 0.17rem;
  }
  @media (min-width: 731px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    letter-spacing: 0.19rem;
    font-size: 1.75rem;
  }
  @media (min-width: 1300px) {
    font-size: 1.8rem;
    text-align: left;
  }
`;

export const InfoWrapper = styled(FlexRow)`
  justify-content: space-around;
  @media (min-width: 1024px) {
    justify-content: space-evenly;
  }
`;

export const ImageContainer = styled.div`
  color: white;
  width: 240px;
  height: 240px;
  margin: 0 auto;
  @media (min-width: 991px) {
    width: 350px;
    height: 350px;
    align-self: center;
  }
`;
