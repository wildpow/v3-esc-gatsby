import { OutboundLink } from "gatsby-plugin-google-analytics";
import styled from "styled-components";
import { FlexCol, FadeIn, FlexRow } from "./mainStyles";
import { boxShadow } from "../utils/styles";

export const Main = styled(FlexCol)`
  animation-name: ${FadeIn};
  ${(props) => props.theme.Animation}
  margin-top: 15px;
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 20px;
  @media (min-width: 1022px) {
    margin-top: 0px;
    padding-top: 30px;
  }
  @media (min-width: 1200px) {
    margin-left: 120px;
    margin-right: 120px;
  }
`;

export const CompanyWrapper = styled.article`
  box-shadow: ${(props) => props.theme.newBoxShadow};
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 15px;
  border-radius: 0.14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  @media (min-width: 660px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (min-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;

export const CompanyWrapper2 = styled(CompanyWrapper)`
  margin-bottom: 0px;
`;

export const H3 = styled.h3`
  text-shadow: ${(props) => props.theme.newTextShadow};
  font-family: ${(props) => props.theme.MainFont1};
  background-color: ${(props) => props.theme.mainColor1};
  color: ${(props) => props.theme.newColor1};
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  padding: 10px 5px 10px 5px;
  letter-spacing: 0.12rem;
  font-weight: 700;
  @media (min-width: 581px) {
    font-size: 1.2rem;
    padding: 10px 30px 10px 30px;
  }
  @media (min-width: 692px) {
    text-align: left;
    word-spacing: 0.18rem;
    letter-spacing: 0.17rem;
  }
  @media (min-width: 1028px) {
    letter-spacing: 0.2rem;
    word-spacing: 0.17rem;
    font-size: 1.4rem;
  }
`;

export const Img = styled.img`
  color: white;
  max-height: 10rem;
  align-self: center;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (min-width: 640px) and (max-width: 767px) {
    max-height: 14rem;
  }
  @media (min-width: 768px) {
    align-self: center;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-top: 10px;
    max-height: 12rem;
  }
  @media (min-width: 1024px) {
    align-self: flex-start;
    max-height: 16rem;
  }
`;

export const InfoWrapper = styled(FlexRow)`
  flex-wrap: wrap;
  justify-content: space-around;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const P = styled.p`
  margin-top: 0;
  align-self: center;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: 300;
  align-self: flex-start;
  font-family: ${(props) => props.theme.MainFont3};
  @media (min-width: 360px) {
    padding-left: 7px;
    padding-right: 7px;
  }
  @media (min-width: 411px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (min-width: 660px) and (max-width: 767px) {
    margin-right: 30px;
    margin-left: 30px;
  }

  @media (min-width: 768px) {
    margin-right: 0px;
    padding-top: 20px;
    margin-left: 20px;
    font-size: 1.3rem;
    line-height: 1.7rem;
    max-width: 500px;
  }
  @media (min-width: 1024px) {
    line-height: 1.9rem;
  }
  @media (min-width: 1300px) {
    margin-right: 60px;
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding-right: 0px;
  flex-direction: column;
  padding-bottom: 15px;
  align-items: center;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 25px;
    padding-left: 10px;
  }
`;

export const ApplyNow = styled(OutboundLink)`
  font-size: 1rem;
  width: 90%;
  text-decoration: none;
  text-align: center;
  padding: 10px 15px 10px 15px;
  background-color: #66ccff;
  font-family: ${(props) => props.theme.MainFont1};
  color: ${(props) => props.theme.newColor1};
  border: none;
  cursor: pointer;
  border-radius: 0.17rem;
  transition: all 0.25s ease-in;
  box-shadow: ${boxShadow.default};

  &:hover {
    box-shadow: ${boxShadow.md};
    transform: scale3d(1.05, 1.05, 1);
  }

  @media (min-width: 768px) {
    padding: 10px 15px 10px 15px;
    font-size: 1.2rem;
    width: auto;
  }
  @media (min-width: 1028px) {
    font-size: 1.3rem;
  }
`;

export const BottomP = styled.p`
  font-size: 0.8rem;
  margin-top: 0;
  padding-right: 5px;
  padding-left: 5px;
  text-align: center;
  margin-bottom: 10px;
  padding-bottom: 5px;
  font-weight: 300;
  font-family: ${(props) => props.theme.MainFont1};
  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;
