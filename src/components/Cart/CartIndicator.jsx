// import { useState, useEffect } from "react";
// import { bool, number, string } from "prop-types";
// import styled, { css } from "styled-components";
// import usePrevious from "../../Hooks/use-previous";
// // import { numberEntry } from "../../../utils/keyframes";
// import {
//   colors,
//   dimensions,
//   radius,
//   spacing,
//   fonts,
//   boxShadow,
// } from "../../../utils/styles";
import React from "react"

// const medScreens = css`
//   transform: ${(props) =>
//     props.visible ? `translateX(0%) scale(1.2)` : `translateX(100%) scale(1)`};
//   width: auto;
//   left: auto;
//   right: 5%;
// `;
// const mobileScreens = css`
//   left: 50%;
//   transform: ${({ visible }) =>
//     visible ? `translateX(-50%) scale(1)` : `translateX(100%) scale(.8)`};
//   width: 95%;
// `;
// const CartIndicatorRoot = styled.div`
//   box-shadow: ${boxShadow.md};
//   font-family: ${fonts.sans};
//   pointer-events: none;
//   background: ${colors.yellow["400"]};
//   border-radius: ${radius.large}px;
//   color: ${colors.blue["900"]};
//   display: flex;
//   opacity: ${(props) => (props.visible ? 1 : 0)};
//   transform: ${(props) =>
//     props.visible ? `translateX(0%) scale(1.2)` : `translateX(100%) scale(1)`};
//   justify-content: center;
//   right: 5%;
//   z-index: 99999;
//   padding: ${spacing["3"]} ${spacing["4"]};
//   position: fixed;
//   top: ${({ pin }) =>
//     pin ? `calc(${dimensions.headerHeight} + ${spacing["4"]})` : spacing["4"]};
//   transition: all 0.3s ease-in-out;
//   @media (min-width: 1550px) {
//     right: 10%;
//   }
//   @media (min-width: 1900px) {
//     right: 15%;
//   }
//   @media (min-width: 2150px) {
//     right: 20%;
//   }
//   @media (min-width: 2350px) {
//     right: 23%;
//   }
//   ${({ width }) => (width < 650 ? mobileScreens : medScreens)}
// `;

// width={width}
// adding={adding}
// itemsInCart={itemsInCart}
// pin={pin}
// cartStatus={cartStatus}
// menuStatus={menuStatus}
const CartIndicator = ({
  adding,
  itemsInCart,
  pin,
  width,
  cartStatus,
  menuStatus,
}) => {
  // const [visible, setVisible] = useState(false);
  // const [message, setMessage] = useState("");
  // const prevAdding = usePrevious(adding);
  // const prevItemsInCart = usePrevious(itemsInCart);
  // useEffect(() => {
  //   if (prevAdding !== adding) {
  //     if (adding) {
  //       setVisible(true);
  //       setMessage("updating cart ...");
  //     }
  //   }
  //   if (itemsInCart > prevItemsInCart) {
  //     const num = itemsInCart - prevItemsInCart;
  //     const newMessage =
  //       num > 1
  //         ? `${num} new items have been added to the cart`
  //         : `${num} new item has been added to the cart`;
  //     setMessage(newMessage);
  //   }
  //   const timer = setTimeout(() => {
  //     setVisible(false);
  //     // setMessage("");
  //   }, 3500);
  //   return () => clearTimeout(timer);
  // }, [adding, itemsInCart, prevAdding, prevItemsInCart]);
  // useEffect(() => {
  //   if (cartStatus || menuStatus) {
  //     setVisible(false);
  //   }
  // }, [menuStatus, cartStatus]);
  return (
    <>
      e
      {/* <CartIndicatorRoot
        visible={visible}
        pin={pin}
        width={width}
        cartStatus={cartStatus}
        menuStatus={menuStatus}
      >
        {message}
      </CartIndicatorRoot> */}
    </>
  )
}

// CartIndicator.defaultProps = {
//   adding: false,
//   itemsInCart: 0,
// }

// CartIndicator.propTypes = {
//   adding: bool,
//   itemsInCart: number,
//   cartStatus: string.isRequired,
//   menuStatus: string.isRequired,
//   width: number.isRequired,
//   pin: bool.isRequired,
// }

export default CartIndicator
