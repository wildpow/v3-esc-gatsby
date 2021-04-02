// import { useState } from "react";
// import styled, { css } from "styled-components";
// import PropTypes from "prop-types";
// import { GatsbyImage } from "gatsby-plugin-image";
// import { useWindowSize } from "../../context/WindowSizeContext";
// import Tab from "./Tab";
// import arrowDown from "../../images/whitedownArrow.png";
// import AnimatedBox from "./AnimatedBox";
// import { P } from "./Landing.styled";
// import { InBoundLink } from "./HeaderButtons";
// import { colors } from "../../utils/styles";
import React from "react"

// const aboutCSS = css`
//   @media screen and (max-width: 981px) {
//     height: initial;
//     margin-bottom: 0px;
//   }
//   @media screen and (max-width: 568px) {
//     height: initial;
//     margin-bottom: 0px;
//   }
//   @media screen and (max-width: 320px) {
//     height: initial;
//     margin-bottom: 0px;
//   }
//   @media screen and (orientation: landscape) {
//     height: initial;
//   }
// `;
// const TabHeroImg = styled(GatsbyImage)`
//   /* max-width: 100%;
//   height: auto;
//   vertical-align: middle; */
//   max-width: ${(props) => props.width}px;
//   /* width: ${(props) => props.width}px; */
//   margin: 0 auto;
//   text-align: center;
//   margin-bottom: 10px;
// `;

// const Select = styled.select`
//   font-weight: 500;
//   letter-spacing: 0.1rem;
//   background-color: ${({ about }) =>
//     about ? colors.red[900] : "rgb(200, 100, 93)"};
//   color: rgb(255, 255, 255);
//   width: 100%;
//   margin-bottom: 1em;
//   font-size: 18px;
//   font-family: ${(props) => props.theme.MainFont1};
//   background-image: url(${arrowDown});
//   background-size: 17px;
//   border-width: 0px;
//   border-style: initial;
//   border-color: initial;
//   border-image: initial;
//   padding: 8px;
//   background-position: 97% 50%;
//   text-indent: 0.01px;
//   background-repeat: no-repeat;
//   cursor: pointer;
//   border-radius: 0 0;
//   appearance: none;
// `;
// const Holder = styled.div`
//   @media screen and (max-width: 981px) {
//     height: 90vh;
//     margin-bottom: 100px;
//   }
//   @media screen and (max-width: 568px) {
//     height: initial;
//     margin-bottom: 70px;
//   }
//   @media screen and (max-width: 320px) {
//     height: initial;
//     margin-bottom: 0px;
//   }
//   @media screen and (orientation: landscape) {
//     height: initial;
//   }
//   article {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
//   ${({ about }) => about && aboutCSS};
// `;
const TabBox = ({
  tabs,
  hero,
  heroText,
  topButtonName,
  topButtonUrl,
  about,
}) => {
  // const [current, setCurrent] = useState(0);
  // const { width } = useWindowSize();
  // const hasTopButton = !!(
  //   topButtonName.length !== 0 || topButtonUrl.length !== 0
  // );
  return (
    // <Holder about={about}>
    //   <header>
    //     <TabHeroImg
    //       fluid={hero.fluid}
    //       alt={hero.alt}
    //       title={hero.title}
    //       width={hero.width}
    //     />
    //     <article>
    //       {hasTopButton ? (
    //         <InBoundLink
    //           style={{
    //             width: "250px",
    //             textAlign: "center",
    //             marginBottom: "20px",
    //           }}
    //           to={topButtonUrl}
    //         >
    //           {topButtonName}
    //         </InBoundLink>
    //       ) : null}
    //       <P>{heroText}</P>
    //     </article>
    //     <div style={{ display: "flex", justifyContent: "center" }}>
    //       {width > 770 ? (
    //         <>
    //           {tabs.map((data, i) => {
    //             return (
    //               <Tab
    //                 about
    //                 tabID={i}
    //                 key={data.title}
    //                 setActiveTab={setCurrent}
    //                 activeTab={current}
    //               >
    //                 {data.title}
    //               </Tab>
    //             );
    //           })}
    //         </>
    //       ) : (
    //         <Select onChange={(e) => setCurrent(e.target.value)} about>
    //           {tabs.map((data, i) => (
    //             <option value={i} key={data.title}>
    //               {data.title}
    //             </option>
    //           ))}
    //         </Select>
    //       )}
    //     </div>
    //   </header>
    //   <AnimatedBox current={current} tabs={tabs} />
    // </Holder>
    <div>swef</div>
  )
}

// TabBox.defaultProps = {
//   topButtonUrl: null,
//   topButtonName: null,
//   about: false,
// };

// TabBox.propTypes = {
//   about: PropTypes.bool,
//   heroText: PropTypes.string.isRequired,
//   hero: PropTypes.shape({
//     fluid: PropTypes.instanceOf(Object),
//     height: PropTypes.number,
//     width: PropTypes.number,
//     url: PropTypes.string,
//     title: PropTypes.string,
//     alt: PropTypes.string,
//   }).isRequired,
//   tabs: PropTypes.instanceOf(Array).isRequired,
//   topButtonUrl: PropTypes.string,
//   topButtonName: PropTypes.string,
// };

export default TabBox
