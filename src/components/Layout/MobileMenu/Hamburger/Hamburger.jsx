// import styled from "styled-components";
// import { func, string, bool } from "prop-types";
// import { colors, dimensions, breakpoints } from "../../../../utils/styles";
// import { iconEntry } from "../../../../utils/keyframes";
import React from "react"
// const BurgerToggle = styled.button`
//   background: transparent;
//   border: none;
//   border-radius: 0;
//   display: ${({ pin }) => (pin ? "flex" : "none")};

//   height: ${dimensions.headerHeight};
//   justify-content: center;
//   left: 0;
//   padding: 0;
//   position: relative;
//   top: 0;
//   transform: translateX(-100%);
//   transition: all 0.2s ease;
//   width: ${dimensions.headerHeight};
//   :hover {
//     transform: scale(1.2) translateX(-85%);
//     .hamburger {
//       span {
//         background: ${colors.blue["900"]};
//       }
//     }
//   }
//   :focus {
//     box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
//     outline: 0;
//     transition: box-shadow 0.15s ease-in-out;
//   }
//   .hamburger {
//     animation: ${iconEntry} 0.75s ease forwards;
//     position: absolute;
//     top: 15px;
//     /* left: 2rem; */
//     right: 14px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     /* width: 2rem;
//     height: 2rem; */
//     height: 28px;
//     margin: 0;
//     width: 28px;
//     background: transparent;
//     border: none;
//     cursor: pointer;
//     padding: 0;
//     transition: all 0.2s ease;
//     /* z-index: 10; */
//     span {
//       width: 2rem;
//       height: 0.25rem;
//       background: ${colors.gray["600"]};
//       border-radius: 10px;
//       transition: all 0.3s linear;
//       position: relative;
//       transform-origin: 3px;

//       :first-child {
//         transform: rotate(0);
//       }

//       :nth-child(2) {
//         opacity: 1;
//         transform: translateX(0);
//       }

//       :nth-child(3) {
//         transform: rotate(0);
//       }
//     }
//   }

//   .open & {
//     background: ${colors.blue["800"]};
//     color: ${colors.white};
//     transform: translateX(0);
//     .hamburger {
//       span {
//         background: white;
//         :first-child {
//           transform: rotate(45deg);
//         }
//         :nth-child(2) {
//           opacity: 0;
//           transform: translateX(20px);
//         }
//         :nth-child(3) {
//           transform: rotate(-45deg);
//         }
//       }
//     }
//     transition: all 0.2s ease-in-out;
//     :hover {
//       background: ${colors.blue["900"]};
//       transform: scale(1.1);
//     }
//   }

//   @media (min-width: ${breakpoints.lg}) {
//     .open & {
//       transform: translateX(-100%);
//     }
//   }
// `;

const Hamburger = ({ toggle, status, pin, ...props }) => {
  const isExpanded = status === "open"
  return (
    // <BurgerToggle
    //   pin={pin}
    //   onClick={toggle}
    //   aria-label="Toggle menu"
    //   aria-expanded={isExpanded}
    //   className={status}
    //   {...props}
    // >
    //   <div className="hamburger">
    //     <span />
    //     <span />
    //     <span />
    //   </div>
    // </BurgerToggle>
    <div>wef</div>
  )
}

// Hamburger.defaultProps = {
//   status: "closed",
//   pin: true,
// };

// Hamburger.propTypes = {
//   toggle: func.isRequired,
//   status: string,
//   pin: bool,
// };

export default Hamburger
