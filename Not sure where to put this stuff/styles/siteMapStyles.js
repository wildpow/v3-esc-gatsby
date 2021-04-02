import { Link } from "gatsby";
import styled from "styled-components";
import { FadeIn, FlexCol, FlexRow } from "./mainStyles";

export const MattLinksWrapper = styled(FlexRow)`
  animation-name: ${FadeIn};
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  ${(props) => props.theme.Animation}
  @media(min-width: 1300px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

export const Main = styled.div`
  /* border: ${(props) => props.theme.Border}; */
  box-shadow: ${(props) => props.theme.newBoxShadow};
  background-color: white;
  margin-bottom: 20px;
  ul {
    padding-right: 20px;
    padding-left: 20px;
    list-style: none;
    line-height: 1.9rem;
  }
  li {
    font-family: ${(props) => props.theme.MainFont1};
    font-weight: 400;
  }
  h3 {
    font-family: ${(props) => props.theme.MainFont1};
    background-color: ${(props) => props.theme.mainColor1};
    margin: 0;
    color: ${(props) => props.theme.newColor1};
    padding-top: 15px;
    padding-bottom: 15px;
    letter-spacing: 0.2rem;
    font-size: 1.2rem;
    text-align: center;
  }
`;
export const BrandLinks = styled(Link)`
  color: ${(props) => props.theme.newColor1};
  &:hover {
    color: ${(props) => props.theme.newColor2};
  }
`;
export const SiteLinks = styled(Link)`
  color: #1565c0;
  &:hover {
    color: #eb1c24;
  }
`;

export const MainLinks = styled(FlexCol)`
  animation-name: ${FadeIn};
  border: ${(props) => props.theme.Border};
  box-shadow: ${(props) => props.theme.BoxShadow};
  margin-top: 15px;
  padding-left: 5px;
  padding-right: 5px;
  ${(props) => props.theme.Animation}
  @media(min-width: 1300px) {
    margin-left: 85px;
    margin-right: 85px;
  }
`;

export const Lilist = styled.li`
  font-family: ${(props) => props.theme.MainFont1};
  font-size: 1rem;
  letter-spacing: 0.1rem;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 412px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const UnList = styled.ul`
  list-style: none;
  line-height: 1.8rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 0;
`;

export const BottomLinks = styled(FlexRow)`
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (min-width: 1300px) {
    margin-left: 85px;
    margin-right: 85px;
  }
`;

// export const TheNew2 = styled.h2`
//     font-family: ${MainFont1};
//     background-color: ${Blue};
//     text-shadow: ${TextShadow};
//     text-align: center;
//     color: white;
//     margin: 0;
//     padding-top: 15px;
//     padding-bottom: 15px;
//     letter-spacing: .25rem;
//     font-size: 1.2rem;
//     @media(min-width: 768px) {
//       font-size: 2rem;
//     }
// `;
