// import styled from "styled-components";
// import CartListItem from "./CartListITem";
import React from "react"

// import { colors, spacing, fonts } from "../../../utils/styles";

// const CartListRoot = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const Headers = styled.div`
//   border-bottom: 1px solid ${colors.gray["400"]};
//   display: flex;
//   justify-content: space-between;
//   font-family: ${fonts.sans};
//   color: ${colors.blue["900"]};
//   span {
//     /* color: ${colors.green}; */
//     flex-basis: 60px;
//     flex-grow: 0;
//     font-size: 0.8rem;
//     padding-bottom: ${spacing["2"]};
//     text-align: center;

//     &:first-of-type {
//       flex-grow: 1;
//       text-align: left;
//     }
//   }
// `;

const CartList = ({
  items,
  handleRemove,
  updateQuantity,
  setCartLoading,
  isCartLoading,
}) => (
  <>
    {/* <Headers>
      <span>Product</span>
      <span>Qty.</span>
      <span>Remove</span>
    </Headers>
    <CartListRoot>
      {items.map((item) => (
        <CartListItem
          key={item.id}
          item={item}
          handleRemove={handleRemove(item.id)}
          updateQuantity={updateQuantity(item.id)}
          setCartLoading={setCartLoading}
          isCartLoading={isCartLoading}
        />
      ))}
    </CartListRoot> */}
    e
  </>
)

export default CartList
