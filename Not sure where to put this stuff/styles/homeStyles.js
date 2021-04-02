import styled from "styled-components";
import { Link } from "gatsby";
import { FadeIn, FlexCol } from "./mainStyles";
import { breakpoints } from "../utils/styles";

export const Main = styled.div`
  animation-name: ${FadeIn};
  ${(props) => props.theme.Animation}
  margin-right: auto;
  margin-left: auto;
  padding-top: 1px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 15px;
  max-width: 1440px;
  @media (min-width: ${breakpoints.phablet}) {
    padding-top: 15px;
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-bottom: 45px;
  }
`;

export const OneImg = styled.img`
  color: white;
  background-color: white;
  max-width: 980px;
  max-height: 450px;
  // @media(min-width: 768px) { max-width: 800px; max-height: 600px; }
  // @media(min-width: 1024px) { max-width: 1000px; height: 600px; }
`;

export const Wrapper = styled(FlexCol)`
  background-color: ${(props) => props.theme.newColor1};
  box-shadow: ${(props) => props.theme.newBoxShadow};
  margin-top: 10px;
  margin-right: 0px;
  margin-left: 0px;
  @media (min-width: 768px) {
    margin-top: 15px;
  }
  @media (min-width: 925px) {
    width: 49%;
  }

  @media (min-width: 1300px) {
    margin-top: 15px;
  }
`;

export const Headline = styled.h2`
  color: ${(props) => props.theme.newColo1};
  font-family: ${(props) => props.theme.MainFont1};
  text-shadow: ${(props) => props.theme.newTextShadow};
  text-align: center;
  font-weight: 400;
  background-color: ${(props) =>
    props.red ? props.theme.mainColor2 : props.theme.mainColor1};
  color: white;
  margin: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  @media (min-width: 412px) {
    letter-spacing: 0.25rem;
    font-size: 1.4rem;
  }
  @media (min-width: 768px) {
    letter-spacing: 0.13rem;
    font-size: 1.7rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
    letter-spacing: 0.22rem;
  }
`;

export const P = styled.p`
  font-family: ${(props) => props.theme.MainFont3};
  text-align: justify;
  text-justify: inter-character !important;
  margin-bottom: 0;
  font-weight: 300;
  margin-top: 0;
  background-color: white;
  padding: 5px 15px 5px 15px;
  font-size: 1rem;
  line-height: 1.55rem;
  color: ${(props) => props.theme.newColor2};

  @media (min-width: 640px) {
    padding: 5px 15px 5px 15px;
    line-height: 1.8rem;
    font-size: 1.2rem;
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
    line-height: 2rem;
  }
  @media (min-width: 1024px) {
    padding: 5px 15px 5px 15px;
    font-size: 1.4rem;
    line-height: 2.1rem;
  }
`;

export const Links = styled(Link)`
  color: ${(props) => props.theme.mainColor2};
  &:hover {
    color: ${(props) => props.theme.mainColor1};
  }
`;

export const FooterLink = styled(Link)`
  text-decoration-color: white;
  transition: all 0.25s ease-in;
  color: white;
  :hover {
    transform: scale(1.04);
    text-decoration-color: ${(props) => props.theme.newColor2};
  }
`;
