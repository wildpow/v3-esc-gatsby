// import { Link } from "gatsby";
// import { string } from "prop-types";
// import styled from "styled-components";
// import {
//   colors,

//   breakpoints,

//   fontSize,
//   fonts,
//   boxShadow,
// } from "../../../utils/styles";
import React from "react"

// const menuData = [
//   { name: "Mattresses", url: "/brands" },
//   { name: "Adjustable Bases", url: "/adjustable" },
//   { name: "Accessories", url: "/accessories" },
//   { name: "Financing", url: "/financing" },
//   { name: "Our Blog", url: "/blog" },
//   { name: "About Us", url: "/about" },
// ];

// const NavRoot = styled.nav`
//   font-family: ${fonts.sans};
//   background: ${colors.blue["700"]};
//   z-index: 0;
//   box-shadow: ${boxShadow.md};
//   ul {
//     max-width: 1440px;
//     justify-content: space-evenly;
//     margin: 0 auto;

//     opacity: ${({ cartStatus }) => (cartStatus === "open" ? 0.5 : 1)};
//     display: flex;
//     list-style: none;
//     padding: 0;
//     li {
//       flex: 1;
//       position: relative;
//       text-align: center;
//       a {
//         transition: all 0.2s ease-in-out;
//         pointer-events: ${({ cartStatus }) =>
//           cartStatus === "open" ? "none" : "auto"};
//         width: 100%;
//         padding: 10px 0;
//         color: #fff;
//         display: block;
//         text-decoration: none;
//         :hover {
//           color: ${colors.gray["100"]};
//           background: ${colors.red["800"]};
//         }
//         :focus {
//           box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
//           outline: 0;
//           transition: box-shadow 0.15s ease-in-out;
//         }
//       }
//     }
//     @media print {
//       display: none;
//     }
//   }
//   @media (min-width: ${breakpoints.xl}) {
//     ul li a {
//       font-size: ${fontSize.lg};
//     }
//   }
// `;

const Nav = ({ cartStatus }) => {
  return (
    <div>ef</div>
    // <NavRoot cartStatus={cartStatus}>
    //   <ul>
    //     {menuData.map((item) => (
    //       <li key={item.name}>
    //         <Link
    //           to={item.url}
    //           partiallyActive
    //           activeStyle={{ background: colors.blue["900"] }}
    //         >
    //           {item.name}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </NavRoot>
  )
}

// Nav.defaultProps = {
//   cartStatus: "closed",
// };
// Nav.propTypes = {
//   cartStatus: string,
// };
export default Nav
