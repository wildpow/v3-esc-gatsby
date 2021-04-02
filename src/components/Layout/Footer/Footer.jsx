// import { GatsbyImage } from "gatsby-plugin-image";
// import { Link } from "gatsby";
// import styled from "styled-components";
// import { OutboundLink } from "gatsby-plugin-google-analytics";
// import {
//   breakpoints,
//   colors,
//   spacing,
//   fontSize,
//   fonts,
// } from "../../../utils/styles";
// import Yelp from "../../../assets/yelp-brands.svg";
// import Insta from "../../../assets/instagram-brands.svg";
// import Twitter from "../../../assets/twitter-brands.svg";
// import FaceBook from "../../../assets/facebook-f-brands.svg";
// import useFooterIcons from "./use-footer-icons";
// import useReaders from "./use-readers-choice";
// import Bird from "./Bird";
import React from "react"

// const FooterRoot = styled.footer`
//   @media print {
//     display: none;
//   }
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding-right: ${spacing["5"]};
//   padding-left: ${spacing["5"]};
//   /* position: sticky; */
//   /* bottom: 0;
//   left: 0; */
//   padding-top: ${spacing["10"]};
//   color: ${colors.white};
//   background-color: ${colors.blue["900"]};
//   /* height: 300px; */
//   margin: 0 auto;
//   .topWrapper {
//     max-width: 1440px;
//     margin: 0 auto;
//     width: 100%;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
//     section {
//       width: 310px;
//       /* height: 300px; */
//       h3 {
//         font-weight: 500;
//         font-family: ${fonts.sans};
//         text-transform: uppercase;
//       }
//     }
//   }
//   /* @media (min-width: ${breakpoints.phablet}) {
//     .topWrapper {
//       flex-wrap: nowrap;
//       section {
//         width: auto;
//       }
//     }
//   } */

//   .middleWrapper {
//     margin: 0 auto;
//     margin-top: 20px;
//     max-width: 1224px;
//     font-family: ${fonts.sans};
//     border-top: 2px solid ${colors.gray["100"]}10;
//     display: flex;
//     justify-content: center;
//     padding: ${spacing["4"]} 0;
//     flex-direction: column;
//     font-weight: 300;
//     font-size: ${fontSize.sm};
//     h4 {
//       font-size: ${fontSize.base};
//       margin: 0;
//       text-align: center;
//       font-weight: 400;
//       color: ${colors.gray["100"]};
//       padding-bottom: ${spacing["2"]};
//     }
//     span {
//       text-align: center;
//     }
//     aside {
//       display: flex;
//       flex-direction: column;
//     }
//   }
//   .middleWrapper__contact {
//     padding-top: ${spacing["2"]};
//     display: flex;
//     justify-content: center;
//     font-size: ${fontSize.base};
//     a {
//       padding: 0 10px;
//       color: ${colors.red["200"]};
//       transition: all 0.2s ease-in;
//       &:hover {
//         color: ${colors.gray["600"]};
//       }
//     }
//   }
//   transition: 0.75s;
//   will-change: transform;
//   @media (min-width: ${breakpoints.sm}) {
//     transform: translate3d(0vw, 0, 0);
//     /* position: sticky; */
//     &.moved {
//       /* filter: blur(1px); */
//       transform: translate3d(-400px, 0, 0);
//     }
//     /* .middleWrapper {
//       flex-direction: column;
//     } */
//     .bottomWrapper {
//       flex-direction: row;
//     }
//   }
//   .firstUL {
//     padding-left: 0;
//   }
//   .navlinks {
//     display: flex;
//     ul {
//       list-style: none;
//       margin-top: 0;
//       li {
//         margin: 0;
//         /* margin-bottom: 1em; */
//         padding-left: 1.3em;
//         position: relative;
//         padding-bottom: ${spacing["4"]};
//         font-family: ${fonts.sans};

//         &:after {
//           content: "";
//           height: 0.25em;
//           width: 0.25em;
//           background: white;
//           display: block;
//           position: absolute;
//           transform: rotate(45deg);
//           top: 0.4em;
//           left: 0;
//         }
//         :hover {
//           a {
//             border-bottom-color: ${colors.gray["400"]};
//             color: white;
//           }
//           span {
//             color: ${colors.gray["900"]};
//           }
//         }
//         a {
//           border-bottom: 1px solid transparent;
//           transition: all 0.2s ease;
//           :focus {
//             box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
//             outline: 0;
//             transition: box-shadow 0.15s ease-in-out;
//           }
//           color: ${colors.gray["400"]};
//           text-decoration: none;
//           font-weight: 300;
//         }
//         span {
//           transition: all 0.2s ease;
//           padding-left: ${spacing["4"]};
//           font-weight: 300;
//           color: ${colors.gray["600"]};
//         }
//       }
//     }
//   }

//   .social-icons {
//     display: flex;
//     a {
//       padding-right: ${spacing["8"]};
//       transition: all 0.2s ease;
//       svg {
//         width: 35px;
//         height: 35px;
//         color: white;
//       }
//       :focus {
//         box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
//         outline: 0;
//         transition: box-shadow 0.15s ease-in-out;
//       }
//       :hover {
//         transform: scale(1.2);
//       }
//     }
//   }
//   .bottomWrapper {
//     flex-direction: column;
//     border-top: 2px solid ${colors.gray["100"]}10;
//     display: flex;
//     justify-content: center;
//     padding-top: ${spacing["4"]};
//     padding-bottom: ${spacing["2"]};
//     font-family: ${fonts.sans};
//     max-width: 1224px;
//     margin: 0 auto;
//     aside {
//       display: flex;
//       justify-content: center;
//       a {
//         padding: 0 10px;
//         color: ${colors.red["200"]};
//         transition: all 0.2s ease-in;
//         &:hover {
//           color: ${colors.gray["600"]};
//         }
//       }
//     }
//     small {
//       text-align: center;
//       padding-top: 10px;
//       font-weight: 300;
//       color: ${colors.gray["300"]};
//     }
//   }
//   .hours {
//     font-family: ${fonts.sans};
//     justify-self: flex-end;
//     h6 {
//       color: ${colors.gray["100"]};
//       font-weight: 300;
//       /* max-width: 200px; */
//       display: flex;
//       /* justify-content: space-around; */
//       /* padding-bottom: ${spacing["1"]}; */
//       margin: 0;
//       font-size: ${fontSize.base};
//     }
//     span {
//       color: ${colors.blue["100"]};
//       font-weight: 400;
//       padding-right: ${spacing["4"]};
//     }
//   }
//   .hours__inner {
//     display: flex;
//   }
//   .hours__days {
//     padding-right: ${spacing["6"]};
//     h6 {
//       margin: 0;
//       padding-bottom: ${spacing["2"]};
//       font-size: ${fontSize.base};
//     }
//   }
//   .hours__time {
//     h6 {
//       margin: 0;
//       padding-bottom: ${spacing["2"]};
//       font-size: ${fontSize.base};
//     }
//     display: flex;
//     flex-direction: column;
//   }
//   .iconWrapper {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//   }

//   .sticker {
//     width: 100px;
//   }
//   .clothesForKids {
//     @media (max-width: 350px) {
//       padding-left: 5px;
//       width: 139px;
//     }
//   }
//   .link {
//     :focus {
//       box-shadow: 0 0 0 3px ${colors.blue["300"]};
//       outline: 0;
//       transition: box-shadow 0.15s ease-in-out;
//     }
//     transition: all 0.25s ease-in;
//     &:hover {
//       transform: scale3d(1.05, 1.05, 1);
//     }
//   }
// `;

const Footer = ({ moved }) => {
  // const { images } = useFooterIcons();
  // const { sticker } = useReaders();
  // let bbb;
  // let clothsForKids;
  // let aquasox;
  // images.map((img) => {
  //   if (img.title === "bbb") bbb = img;
  //   if (img.title === "aquosox") aquasox = img;
  //   if (img.title === "clothes_for_kids") clothsForKids = img;
  //   return null;
  // });
  return (
    <div>sdf</div>
    // <FooterRoot className={moved}>
    //   <div className="topWrapper">
    //     <section>
    //       <div>
    //         <h3>Stay Connected</h3>
    //         <div className="social-icons">
    //           <OutboundLink
    //             href="https://www.facebook.com/ESCMattressCenter/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             aria-label="Vist our FaceBook page"
    //           >
    //             <FaceBook />
    //           </OutboundLink>
    //           <OutboundLink
    //             href="https://www.yelp.com/biz/esc-mattress-center-everett-3"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             aria-label="Vist our Yelp page"
    //           >
    //             <Yelp />
    //           </OutboundLink>
    //           <OutboundLink
    //             href="https://www.instagram.com/centeresc/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             aria-label="Vist our Instagram page"
    //           >
    //             <Insta />
    //           </OutboundLink>
    //           <OutboundLink
    //             href="https://twitter.com/CenterEsc?ref_src=twsrc%5Etfw"
    //             data-size="large"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             aria-label="Vist our Twitter page"
    //           >
    //             <Twitter />
    //           </OutboundLink>
    //         </div>
    //       </div>
    //       <div className="hours">
    //         <h3>Hours</h3>
    //         <div className="hours__inner">
    //           <div className="hours__days">
    //             <h6>Mon-Sat:</h6>
    //             <h6>Sunday:</h6>
    //           </div>
    //           <div className="hours__time">
    //             <h6>10am - 7pm</h6>
    //             <h6> 10am - 6pm</h6>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section>
    //       <h3>Navigate</h3>
    //       <div className="navlinks">
    //         <ul className="firstUL">
    //           <li>
    //             <Link to="/brands">Mattresses</Link>
    //             <span>&gt;</span>
    //           </li>
    //           <li>
    //             <Link to="/adjustable">Adjustable</Link>
    //             <span>&gt;</span>
    //           </li>
    //           <li>
    //             <Link to="/accessories">Accessories</Link>
    //             <span>&gt;</span>
    //           </li>
    //           <li>
    //             <Link to="/financing">Financing</Link>
    //             <span>&gt;</span>
    //           </li>
    //         </ul>
    //         <ul>
    //           <li>
    //             <Link to="/blog">Our Blog</Link>
    //             <span>&gt;</span>
    //           </li>
    //           <li>
    //             <Link to="/about">About Us</Link>
    //             <span>&gt;</span>
    //           </li>
    //           <li>
    //             <Link to="/current-sale">Current Sale</Link>
    //             <span>&gt;</span>
    //           </li>
    //           <li>
    //             <Link to="/contact-us">Contact Us</Link>
    //             <span>&gt;</span>
    //           </li>
    //         </ul>
    //       </div>
    //     </section>
    //   </div>
    //   <div className="topWrapper">
    //     <section>
    //       <div>
    //         <h3>Our Partners</h3>
    //         <div className="iconWrapper">
    //           <OutboundLink
    //             href="https://www.milb.com/everett"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="link"
    //             style={{ textDecoration: "none" }}
    //           >
    //             <GatsbyImage
    //               image={aquasox.gatsbyImageData}
    //               style={{
    //                 borderRadius: "5px",
    //                 width: "140px",
    //               }}
    //               alt={aquasox.alt} />
    //           </OutboundLink>
    //           <OutboundLink
    //             href="https://clothesforkids.org/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="clothesForKids link"
    //           >
    //             <GatsbyImage
    //               image={clothsForKids.gatsbyImageData}
    //               style={{
    //                 borderRadius: "5px",
    //                 width: "140px",
    //               }}
    //               alt={clothsForKids.alt} />
    //           </OutboundLink>
    //         </div>
    //       </div>
    //     </section>
    //     <section>
    //       <div>
    //         <h3>Reviews / Awards</h3>
    //         <div className="iconWrapper">
    //           <Bird />
    //           <Link
    //             to="/blog/esc-mattress-center-wins-best-mattress-store-in-snohomish-county"
    //             className="link"
    //           >
    //             <img src={sticker.url} alt={sticker.alt} className="sticker" />
    //           </Link>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    //   <div>
    //     <section className="middleWrapper">
    //       <aside>
    //         <h4>E.S.C. Mattress Center</h4>
    //         <span>10121 Evergreen Way, #30, Everett, WA 98204</span>
    //       </aside>
    //       <div className="middleWrapper__contact">
    //         <OutboundLink
    //           href="https://goo.gl/maps/nqXkkkAGRdu"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           aria-label="Google maps link to our store"
    //         >
    //           Directions
    //         </OutboundLink>
    //         <OutboundLink
    //           href="tel:1-425-512-0017"
    //           aria-label="Store phone number"
    //         >
    //           (425) 512-0017
    //         </OutboundLink>
    //       </div>
    //     </section>
    //     <section className="bottomWrapper">
    //       <aside>
    //         <Link to="/policies">Terms/Policies</Link>
    //         <Link to="/sitemap">Site Map</Link>
    //         <Link to="/warranty">Warranty Info</Link>
    //       </aside>
    //       <small>&copy; 2020 E.S.C. Mattress Center</small>
    //     </section>
    //   </div>
    // </FooterRoot>
  )
}

export default Footer
