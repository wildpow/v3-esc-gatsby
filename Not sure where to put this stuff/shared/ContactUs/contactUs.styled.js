import styled from "styled-components";
import {
  spacing,
  breakpoints,
  fonts,
  colors,
  fontSize,
  radius,
  boxShadow,
} from "../../../utils/styles";

export const Content = styled.div`
  background-color: white;
  max-width: 1128px;
  margin: 0 auto;
  margin-top: -20px;
  position: relative;
  margin-right: 5px;
  margin-left: 5px;
  box-shadow: ${boxShadow.lg};
  border-top-left-radius: ${radius.large}px;
  border-top-right-radius: ${radius.large}px;
  padding: ${spacing["3"]};
  color: ${colors.gray["800"]};
  h2 {
    margin-top: 0;
    color: inherit;
    color: ${colors.blue[900]};
    font-size: ${fontSize["2xl"]};
    margin-bottom: 0;
    border-bottom: 4px solid #9b2c2c;
  }
  p {
    font-family: ${fonts.serif};
    line-height: ${spacing["6"]};
    padding-bottom: ${spacing["2"]};
    font-size: ${fontSize.md};
    color: ${colors.gray[800]};
  }
  @media (min-width: 540px) {
    margin-top: -50px;
  }
  @media (min-width: ${breakpoints.sm}) {
    padding: ${spacing["10"]};
    margin-top: -50px;
    margin-right: 20px;
    margin-left: 20px;
    h2 {
      font-size: ${fontSize["3xl"]};
    }
    p {
      font-size: ${fontSize.xl};
      line-height: ${spacing["8"]};
      padding-bottom: ${spacing["4"]};
    }
  }
  @media (min-width: ${breakpoints.md}) {
    margin-top: -50px;
    padding: ${spacing["10"]};
    margin-right: 20px;
    margin-left: 20px;
  }
  @media (min-width: ${breakpoints.lg}) {
    margin-top: -80px;
    h2 {
      font-size: ${fontSize["5xl"]};
    }
    p {
      font-size: ${fontSize["2xl"]};
      line-height: ${spacing["8"]};
      padding-bottom: ${spacing["6"]};
    }
  }
  @media (min-width: ${breakpoints.xl}) {
    margin: 0 auto;
    margin-top: -100px;
  }
`;

export const ContactUsRoot = styled.section`
  /* padding-top: ${spacing["1"]}; */
  position: relative;
  padding-bottom: ${spacing["10"]};
  font-family: ${fonts.sans};
  @media (min-width: ${breakpoints.sm}) {
    /* padding-top: ${spacing["1"]}; */
  }
  h3 {
    color: ${colors.blue[900]};
    border-bottom: 4px solid #9b2c2c;
    font-size: ${fontSize["2xl"]};
  }
  @media (min-width: ${breakpoints.xl}) {
    h3 {
      font-size: ${fontSize["3xl"]};
    }
  }
`;
