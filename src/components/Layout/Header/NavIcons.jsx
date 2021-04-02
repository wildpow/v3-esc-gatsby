// import { useContext } from "react";
// import { bool, string, func } from "prop-types";
// import { Link } from "gatsby";
// import styled, { css } from "styled-components";
// import VisuallyHidden from "@reach/visually-hidden";
// import StoreContext from "../../../context/StoreContext";
// import Phone from "../../../assets/phone-solid.svg";
// import Email from "../../../assets/envelope-solid.svg";
// import Map from "../../../assets/directions-solid.svg";
// import { iconEntry } from "../../../utils/keyframes";
// import { colors, dimensions, breakpoints } from "../../../utils/styles";
// import Search from "../../Search";
// import CartItemCounter from "../Cart/CartItemCounter";

// const searchIndices = [{ name: `Products`, title: `Products` }];
import React from "react"

// TODO Change name or combine and import from different file to avoid
// TODO duplication in Cart component.

// TODO Change name or combine and import from different file to avoid
// TODO duplication in Cart component.
// const emptyCart = css`
//   cursor: pointer;
//   opacity: 1;
//   :hover {
//     transform: scale(1.2);
//     .fa-shopping-cart {
//       color: ${colors.blue["900"]};
//     }
//   }
// `;
// const CartToggle = styled.button`
//   cursor: not-allowed;
//   .fa-shopping-cart {
//     animation: ${iconEntry} 0.75s ease forwards;
//     height: 28px;
//     margin: 0;
//     width: 28px;
//     color: ${({ menuStatus, cartStatus }) =>
//       menuStatus === "open" || cartStatus === "open"
//         ? colors.gray["800"]
//         : colors.gray["600"]};
//     transition: all 0.2s ease;
//   }

//   background: transparent;
//   border: none;
//   border-radius: 0;
//   display: ${({ pin }) => (pin ? "flex" : "none")};
//   height: ${dimensions.headerHeight};
//   justify-content: center;
//   align-items: center;

//   padding: 0;
//   position: relative;
//   top: 0;

//   transition: all 0.2s ease;
//   pointer-events: ${({ menuStatus, cartStatus }) =>
//     menuStatus === "open" || cartStatus === "open" ? "none" : "auto"};
//   width: ${dimensions.headerHeight};

//   :focus {
//     box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
//     outline: 0;
//     transition: box-shadow 0.15s ease-in-out;
//   }
//   opacity: 0.3;
//   ${({ itemsInCart }) => itemsInCart !== 0 && emptyCart}
// `;

// const ExtraNavRoot = styled.div`
//   display: flex;
//   overflow: ${({ adding }) => (adding ? "hidden" : "initial")};

//   position: relative;
//   @media screen and (min-width: ${breakpoints.md}) {
//     margin-right: 61px;
//   }
//   @media (min-width: ${breakpoints.lg}) {
//     margin-right: 0px;
//   }
//   @media print {
//     display: none;
//   }
// `;

// const StyledLinks = styled.a`
//   align-items: center;
//   display: ${({ pin }) => (pin ? "initial" : "none")};

//   transition: all 0.2s ease;
//   :hover {
//     transform: scale(1.2);
//     .fa-phone {
//       color: ${colors.blue["900"]};
//     }
//   }
//   background: transparent;
//   border: none;
//   border-radius: 0;
//   display: flex;
//   justify-content: center;
//   padding: 0;
//   height: ${dimensions.headerHeight};
//   width: ${dimensions.headerHeight};
//   :focus {
//     box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
//     outline: 0;
//     transition: box-shadow 0.15s ease-in-out;
//   }

//   .fa-phone {
//     display: ${({ pin }) => (pin ? "initial" : "none")};
//     animation: ${iconEntry} 0.75s ease forwards;
//     height: 28px;
//     margin: 0;
//     width: 28px;
//     color: ${colors.gray["600"]};
//   }
// `;
// const ContactUS = styled(StyledLinks)`
//   @media (max-width: 360px) {
//     display: none;
//   }
// `;
// const ShoppingCartIcon = ({ itemCount }) => (
//   <svg
//     aria-hidden="true"
//     focusable="false"
//     data-prefix="fas"
//     data-icon="shopping-cart"
//     className="svg-inline--fa fa-shopping-cart fa-w-18"
//     role="img"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 576 512"
//     alt="Shopping Cart"
//   >
//     <path
//       fill="currentColor"
//       d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
//     />
//     <title>{itemCount !== 0 ? "Shopping Cart" : "Cart is empty"}</title>
//   </svg>
// );
const NavIcons = ({
  pin,
  cartToggle,
  menuStatus,
  cartStatus,
  searchFocus,
  setSearchFocus,
}) => {
  // const {
  //   store: { checkout, adding },
  // } = useContext(StoreContext);
  // const itemsInCart = checkout.lineItems.reduce(
  //   (total, item) => total + item.quantity,
  //   0,
  // );
  return (
    // <ExtraNavRoot adding={adding}>
    //   <Search
    //     pin={pin}
    //     indices={searchIndices}
    //     searchFocus={searchFocus}
    //     setSearchFocus={setSearchFocus}
    //   />
    //   <StyledLinks
    //     href="tel:1-425-512-0017"
    //     pin={pin}
    //     aria-label="Store phone number"
    //   >
    //     <span aria-hidden>
    //       <VisuallyHidden>Call store</VisuallyHidden>
    //       <Phone className="fa-phone" title="call store" />
    //     </span>
    //   </StyledLinks>
    //   <ContactUS
    //     as={Link}
    //     to="/contact-us"
    //     pin={pin}
    //     aria-label="get in contact with us via email"
    //   >
    //     <span aria-hidden>
    //       <VisuallyHidden>Contact Us</VisuallyHidden>
    //       <Email className="fa-phone" title="Contact Us" />
    //     </span>
    //   </ContactUS>
    //   <StyledLinks
    //     href="https://goo.gl/maps/nqXkkkAGRdu"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     pin={pin}
    //     aria-label="Google maps link to our store"
    //   >
    //     <span aria-hidden>
    //       <VisuallyHidden>directions to store</VisuallyHidden>
    //       <Map className="fa-phone" title="directions to store" />
    //     </span>
    //   </StyledLinks>
    //   <CartToggle
    //     aria-label={`Shopping cart with ${itemsInCart} items`}
    //     onClick={cartToggle}
    //     pin={pin}
    //     menuStatus={menuStatus}
    //     cartStatus={cartStatus}
    //     disabled={itemsInCart === 0}
    //     itemsInCart={itemsInCart}
    //   >
    //     <VisuallyHidden>shoping cart</VisuallyHidden>
    //     <span aria-hidden>
    //       <ShoppingCartIcon itemCount={itemsInCart} />
    //       {/* <CartIcon
    //         alt="Shopping cart icon"
    //         className="fa-shopping-cart"
    //         title="Open shopping cart menu"
    //       /> */}
    //     </span>
    //     {itemsInCart > 0 && (
    //       <CartItemCounter count={itemsInCart} adding={adding} />
    //     )}
    //   </CartToggle>
    // </ExtraNavRoot>
    <div>ewf</div>
  )
}
// NavIcons.defaultProps = {
//   pin: true,
//   menuStatus: "closed",
//   cartStatus: "closed",
// };
// NavIcons.propTypes = {
//   pin: bool,
//   menuStatus: string,
//   cartStatus: string,
//   cartToggle: func.isRequired,
// };

export default NavIcons
