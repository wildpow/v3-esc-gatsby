// /* eslint-disable react/jsx-one-expression-per-line */
// import { useEffect, useState, useContext } from "react";
// import { func, string, bool } from "prop-types";
// import VisuallyHidden from "@reach/visually-hidden";
// import styled from "styled-components";
// import StoreContext from "../../../context/StoreContext";
// import CloseIcon from "../../../assets/times-solid.svg";
// import CartIcon from "../../../assets/shopping-cart-solid.svg";
// import ForwardArrow from "../../../assets/arrow-right-solid.svg";
// import BackArrow from "../../../assets/arrow-left-solid.svg";
// import { iconEntry, numberEntry } from "../../../utils/keyframes";
// import CartList from "./CartList";
// // import CartIndicator from "./CartIndicator";
// import { PrimaryButton, Button } from "../../shared/Buttons";
// import {
//   dimensions,
//   colors,
//   breakpoints,
//   fonts,
//   boxShadow,
//   spacing,
// } from "../../../utils/styles";
import React from "react"

// const CartRoot = styled.div`
//   background: ${colors.white};
//   bottom: 0;
//   position: fixed;
//   right: 0;
//   top: -1px;
//   transform: translateX(100%);
//   transition: transform 0.75s;
//   width: 100%;
//   will-change: transform;
//   z-index: ${({ zIndex }) => zIndex};
//   /* z-index: ${({ status }) => (status === "open" ? "11" : "10")}; */
//   display: ${({ pin }) => (pin ? "initial" : "none")};
//   ::after {
//     background-color: ${colors.white};
//     bottom: 0;
//     content: "";
//     left: 0;
//     opacity: 0;
//     pointer-events: none;
//     position: absolute;
//     right: 0;
//     top: 0;
//     transition: all 250ms;
//   }
//   &.open {
//     transform: translateX(0%);
//   }

//   &.closed {
//     transform: translateX(100%);
//   }

//   &.loading {
//     ::after {
//       opacity: 0.9;
//       pointer-events: all;
//     }
//   }

//   @media (min-width: ${breakpoints.lg}) {
//     width: ${dimensions.cartWidthDesktop};
//     &.covered {
//       display: none;
//     }
//   }
//   @media print {
//     display: none;
//   }
// `;

// const ItemsNumber = styled.span`
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   align-items: center;
//   background: ${colors.yellow["400"]};
//   border-radius: 50%;
//   color: ${colors.gray["900"]};
//   display: flex;
//   font-size: 1.45rem;
//   font-weight: bold;
//   height: 36px;
//   justify-content: center;
//   width: 36px;
//   font-family: ${fonts.sans};
// `;

// const Heading = styled.div`
//   align-items: center;
//   display: flex;
//   height: ${dimensions.headerHeight};
//   justify-content: flex-start;
//   color: ${colors.gray["900"]};
//   box-shadow: ${boxShadow.sm};
// `;

// const CartToggle = styled.button`
//   cursor: pointer;
//   .fa-shopping-cart,
//   .fa-times {
//     animation: ${iconEntry} 0.75s ease forwards;
//     height: 28px;
//     margin: 0;
//     width: 28px;
//     color: ${({ menuStatus }) =>
//       menuStatus === "open" ? colors.gray["800"] : colors.gray["600"]};
//     transition: all 0.2s ease;
//   }

//   background: transparent;
//   border: none;
//   border-radius: 0;
//   display: ${({ pin }) => (pin ? "flex" : "none")};
//   height: ${dimensions.headerHeight};
//   justify-content: center;
//   align-items: center;
//   left: 0;
//   padding: 0;
//   position: relative;
//   top: 0;
//   transition: ${({ menuStatus }) =>
//     menuStatus === "open" ? "all 0.75s" : "all .2s ease"};
//   pointer-events: ${({ menuStatus }) =>
//     menuStatus === "open" ? "none" : "auto"};
//   width: ${dimensions.headerHeight};
//   :hover {
//     transform: scale(1.2);
//     .fa-shopping-cart {
//       color: ${colors.blue["900"]};
//     }
//   }
//   :focus {
//     box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
//     outline: 0;
//     transition: box-shadow 0.15s ease-in-out;
//   }

//   .open & {
//     background: ${colors.blue["800"]};
//     .fa-times {
//       color: ${colors.white};
//     }
//     transform: translateX(0);
//     left: 0;
//     transition: all 0.2s ease-in-out;
//     :hover {
//       background: ${colors.blue["900"]};
//       transform: scale(1.1);
//     }
//   }

//   @media (min-width: ${breakpoints.lg}) {
//     left: 0;
//     .open & {
//       transform: translateX(0%);
//       left: -61px;
//     }
//   }

//   ${ItemsNumber} {
//     position: absolute;
//     right: 0rem;
//     top: 0rem;
//     animation: ${numberEntry} 0.5s ease forwards;
//     transform: scale(0.6);
//   }
// `;
// const Title = styled.h2`
//   flex-grow: 1;
//   /* new */
//   text-align: center;
//   /* ____ */
//   font-family: ${fonts.sans};
//   font-size: 1.8rem;
//   /* left: -${dimensions.headerHeight}; */
//   margin: 0;
//   /* margin-left: ${spacing["4"]}; */
//   position: relative;
//   color: ${colors.blue["900"]};
//   /* margin-left: calc(${dimensions.headerHeight} + ${spacing["4"]}); */
//   @media (min-width: 560px) {
//     margin-left: ${spacing["5"]};
//     text-align: left;
//   }
//   @media (min-width: ${breakpoints.lg}) {
//     left: -${dimensions.headerHeight};
//   }
//   .open & {
//     @media (min-width: ${breakpoints.lg}) {
//       margin-left: ${spacing["6"]};
//     }
//   }
// `;
// const ItemsInCart = styled.div`
//   align-items: center;
//   display: flex;
//   font-size: 0.8rem;
//   line-height: 1.2;
//   /* text-align: right; */
//   font-family: ${fonts.sans};
//   color: ${colors.gray["700"]};
//   ${ItemsNumber} {
//     margin-left: ${spacing["2"]};
//     margin-right: ${spacing["4"]};
//   }
// `;

// const Content = styled.div`
//   bottom: 0;
//   overflow-y: auto;
//   padding: ${spacing["6"]};
//   position: absolute;
//   top: ${dimensions.headerHeight};
//   width: 100%;

//   @media (min-width: ${breakpoints.lg}) {
//     ::-webkit-scrollbar {
//       height: 6px;
//       width: 6px;
//     }
//     ::-webkit-scrollbar-thumb {
//       background: ${colors.white};
//     }
//     ::-webkit-scrollbar-thumb:hover {
//       background: ${colors.blue["700"]};
//     }
//     ::-webkit-scrollbar-track {
//       background: ${colors.white};
//     }
//   }
// `;

// const Costs = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: ${spacing["2"]};
//   font-family: ${fonts.sans};
// `;

// const Cost = styled.div`
//   display: flex;
//   padding: 0 ${spacing["1"]} ${spacing["2"]};
//   color: ${colors.blue["900"]};
//   font-family: ${fonts.sans};
//   :last-child {
//     padding-bottom: 0;
//   }

//   span {
//     color: ${colors.gray["700"]};
//     flex-basis: 60%;
//     font-size: 0.9rem;
//     /* text-align: right; */
//   }
//   @media (min-width: 560px) {
//     span {
//       text-align: right;
//     }
//   }
//   strong {
//     color: ${colors.gray["800"]};
//     flex-basis: 40%;
//     text-align: right;
//   }
//   .free {
//     color: ${colors.red["800"]};
//   }
// `;

// const Total = styled(Cost)`
//   border-top: 1px solid ${colors.gray["400"]};
//   color: ${colors.blue["900"]};
//   margin-top: ${spacing["2"]};
//   padding-top: ${spacing["3"]};

//   span {
//     font-weight: bold;
//     text-transform: uppercase;
//   }

//   strong,
//   span {
//     color: inherit;
//   }
// `;
// const CheckOut = styled(PrimaryButton)`
//   font-size: 1.25rem;
//   margin: ${spacing["8"]} 0 ${spacing["4"]};
//   width: 100%;
// `;
// const BackLink = styled(Button)`
//   font-size: 1.25rem;
//   margin-bottom: ${spacing["4"]};
//   width: 100%;
// `;
// const EmptyCartRoot = styled.div`
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   height: 350px;
//   justify-content: center;
//   font-family: ${fonts.sans};
//   .fa-empty-cart {
//     color: ${colors.red["900"]};
//     width: 45px;
//   }
//   p {
//     color: ${colors.blue["900"]};
//   }
// `;
const Cart = ({ toggle, status, menuStatus, pin }) => {
  // const [loading, setLoading] = useState(false);
  // const {
  //   store: { checkout, client },
  //   removeLineItem,
  //   updateLineItem,
  // } = useContext(StoreContext);

  // const handleRemove = (itemID) => async (event) => {
  //   event.preventDefault();
  //   await removeLineItem(client, checkout.id, itemID);
  //   setLoading(false);
  // };

  // const handleQuantityChange = (lineItemID) => async (quantity) => {
  //   if (!quantity) {
  //     return;
  //   }
  //   await updateLineItem(client, checkout.id, lineItemID, quantity);
  //   setLoading(false);
  // };

  // const itemsInCart = checkout.lineItems.reduce(
  //   (total, item) => total + item.quantity,
  //   0,
  // );
  // const [zIndex, setZindex] = useState(10);
  // useEffect(() => {
  //   function zIndexTimer(value, time) {
  //     setTimeout(() => {
  //       setZindex(value);
  //     }, time);
  //   }
  //   if (status === "open") {
  //     setZindex(11);
  //   } else {
  //     zIndexTimer(10, 750);
  //   }
  //   return () => clearTimeout(zIndexTimer);
  // }, [status]);
  // const isHidden = status === "open";
  // const taxCheck = (subTotal, totalTax) => {
  //   if (totalTax !== "0.00") return totalTax;
  //   const tax = Number(subTotal) * 0.098;
  //   return tax.toFixed(2);
  // };

  return (
    // <CartRoot
    //   className={`${status} ${loading ? "loading" : ""}`}
    //   status={status}
    //   zIndex={zIndex}
    //   aria-hidden={!isHidden}
    //   pin={pin}
    // >
    //   <Heading>
    //     <CartToggle
    //       aria-label={`Shopping cart with ${itemsInCart} items`}
    //       onClick={toggle}
    //       pin={pin}
    //       menuStatus={menuStatus}
    //     >
    //       <span aria-hidden>
    //         <VisuallyHidden>close shoping cart</VisuallyHidden>
    //         <CloseIcon
    //           className="fa-times"
    //           title="Close shopping cart menu"
    //           alt="X to close hopping cart"
    //         />
    //       </span>
    //     </CartToggle>
    //     {/* <CartIndicator adding={adding} itemsInCart={itemsInCart} /> */}
    //     <Title>Your Cart</Title>
    //     <ItemsInCart>
    //       items
    //       <br />
    //       in cart
    //       <ItemsNumber>{itemsInCart}</ItemsNumber>
    //     </ItemsInCart>
    //   </Heading>
    //   <Content>
    //     {checkout.lineItems.length > 0 ? (
    //       <>
    //         <CartList
    //           items={checkout.lineItems}
    //           handleRemove={handleRemove}
    //           updateQuantity={handleQuantityChange}
    //           setCartLoading={setLoading}
    //           isCartLoading={loading}
    //         />
    //         <Costs>
    //           <Cost>
    //             <span>Subtotal:</span>
    //             <strong> ${checkout.subtotalPrice}</strong>
    //           </Cost>
    //           <Cost>
    //             <span>Est. Taxes:</span>
    //             <strong>
    //               {taxCheck(checkout.subtotalPrice, checkout.totalTax)}
    //             </strong>
    //           </Cost>
    //           {/* <Cost>
    //             <span>Shipping (nationwide):</span>
    //             <strong className="free">FREE</strong>
    //           </Cost> */}
    //           <Total>
    //             <span>Total Price:</span>
    //             <strong>
    //               USD $
    //               {checkout.totalTax !== "0.00"
    //                 ? checkout.totalPrice
    //                 : Number(
    //                     taxCheck(checkout.subtotalPrice, checkout.totalTax),
    //                   ) + Number(checkout.subtotalPrice)}
    //             </strong>
    //           </Total>
    //         </Costs>
    //         <CheckOut href={checkout.webUrl}>
    //           Check out
    //           <ForwardArrow />
    //         </CheckOut>
    //         <BackLink onClick={toggle}>
    //           <BackArrow />
    //           Back to shopping
    //         </BackLink>
    //       </>
    //     ) : (
    //       <>
    //         <EmptyCartRoot>
    //           <>
    //             <VisuallyHidden>shoping cart</VisuallyHidden>
    //             <span aria-hidden>
    //               <CartIcon
    //                 alt="Shopping cart icon"
    //                 className="fa-empty-cart"
    //                 title="Open shopping cart menu"
    //               />
    //             </span>
    //           </>
    //           <p>Your Cart is empty.</p>
    //         </EmptyCartRoot>
    //         <BackLink onClick={toggle}>
    //           <BackArrow />
    //           Back to shopping
    //         </BackLink>
    //       </>
    //     )}
    //   </Content>
    // </CartRoot>
    <div>ef</div>
  )
}

// Cart.defaultProps = {
//   status: "closed",
//   menuStatus: "closed",
//   pin: true,
//   // menuId: "main-menu",
// };
// Cart.propTypes = {
//   status: string,
//   menuStatus: string,
//   pin: bool,
//   toggle: func.isRequired,
//   // menuId: string,
// };

export default Cart
