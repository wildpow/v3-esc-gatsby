// /* eslint-disable react/jsx-curly-newline */
// import { useContext, useReducer } from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";
// import { Input, Label, Select } from "../../shared/FormElements";
// import { colors, fonts, fontSize } from "../../../utils/styles";
// import {
//   ProductFormRoot,
//   PriceRange,
//   QtyFieldset,
//   SizeFieldset,
//   AddToCartButton,
// } from "../../shared/ProductForm/ProductForm.styled";
// import generateColors from "./generateColors";
// import ShoppingCart from "../../../assets/shopping-cart-solid.svg";
// import StoreContext from "../../../context/StoreContext";
import React from "react"

// const ColorWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;

//   h5 {
//     font-family: ${fonts.serif};
//     font-size: ${fontSize.xl};
//     margin-bottom: 10px;
//     color: ${colors.blue[900]};
//     margin-top: 0;
//   }
//   .colorPalette {
//     display: flex;
//     width: 100%;
//   }
//   .color_input {
//     display: none;
//   }
//   .color_label {
//     margin-right: 15px;
//     width: 40px;
//     height: 40px;
//     background-size: auto 100%;
//     padding: 10px;
//     cursor: pointer;
//   }
// `;
// const ColorLabel = styled.label`
//   -webkit-print-color-adjust: exact;
//   border: ${({ title, activeTitle }) =>
//     title === activeTitle
//       ? `2px solid ${colors.gray[900]}`
//       : "1px solid #979797"};
//   :hover {
//     border: ${({ title, activeTitle }) =>
//       title === activeTitle
//         ? `2px solid ${colors.gray[900]}`
//         : `2px solid ${colors.gray[800]}`};
//   }
// `;

export default function ProductForm({
  variants,
  titleOfProduct,
  priceMin,
  priceMax,
  maxQty,
  children,
}) {
  // const colorInfo = generateColors(variants, titleOfProduct);
  // const { addVariantToCart } = useContext(StoreContext);
  // const initialState = {
  //   activeColor: "",
  //   colorList: null,
  //   quantity: 1,
  //   sizeIndex: "",
  //   compareAtPrice: null,
  //   price: `$${Number(priceMin).toFixed(2)} - $${Number(priceMax).toFixed(2)}`,
  // };
  // const reducer = (state, action) => {
  //   let newPrice;
  //   let newCompareAtPrice = null;
  //   let newQuantity = "1";
  //   switch (action.type) {
  //     case "color":
  //       return {
  //         ...state,
  //         activeColor: action.payload,
  //         colorList: colorInfo.sortedProductsByColor[action.payload],
  //       };
  //     case "quantity":
  //       newQuantity = action.payload === "0" ? "1" : action.payload;
  //       newQuantity = Number(action.payload) > maxQty ? maxQty : newQuantity;
  //       newCompareAtPrice =
  //         state.compareAtPrice === null
  //           ? null
  //           : newQuantity * state.colorList[state.sizeIndex].compareAtPrice;
  //       newPrice = newQuantity * state.colorList[state.sizeIndex].price;
  //       return {
  //         ...state,
  //         quantity: newQuantity,
  //         compareAtPrice: newCompareAtPrice
  //           ? newCompareAtPrice.toFixed(2)
  //           : null,
  //         price: newPrice.toFixed(2),
  //       };
  //     case "size":
  //       newPrice = state.colorList[action.payload].price * state.quantity;
  //       if (state.colorList[action.payload].compareAtPrice !== null) {
  //         newCompareAtPrice =
  //           state.colorList[action.payload].compareAtPrice * state.quantity;
  //       }
  //       return {
  //         ...state,
  //         sizeIndex: action.payload,
  //         price: newPrice.toFixed(2),
  //         compareAtPrice: newCompareAtPrice
  //           ? newCompareAtPrice.toFixed(2)
  //           : null,
  //       };
  //     default:
  //       throw new Error();
  //   }
  // };

  // const [state, dispatch] = useReducer(reducer, initialState);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   addVariantToCart(
  //     state.colorList[state.sizeIndex].shopifyId,
  //     state.quantity,
  //   );
  // };

  return (
    // <ProductFormRoot onSubmit={handleSubmit}>
    //   <div className="children">
    //     {children}
    //     <div className="formItems">
    //       <ColorWrapper>
    //         <h5>
    //           {state.activeColor.length === 0
    //             ? `Choose a color below.`
    //             : `Color: ${state.activeColor}`}
    //         </h5>
    //         <div className="colorPalette">
    //           {colorInfo.colorPalette.map((color) => (
    //             <ColorLabel
    //               title={color.title}
    //               activeTitle={state.activeColor}
    //               key={color.title}
    //               htmlFor={color.title}
    //               className="color_label"
    //               style={{
    //                 backgroundImage: `url(${color.colorImg})`,
    //               }}
    //             >
    //               <input
    //                 value={color.title}
    //                 className="color_input"
    //                 onChange={(e) =>
    //                   dispatch({ type: e.target.name, payload: e.target.value })
    //                 }
    //                 checked={color.title === state.activeColor}
    //                 type="checkbox"
    //                 name="color"
    //                 id={color.title}
    //                 label={color.title}
    //                 aria-required="true"
    //                 aria-label={`Color - ${color.title}`}
    //               />
    //             </ColorLabel>
    //           ))}
    //         </div>
    //       </ColorWrapper>
    //       <QtyFieldset>
    //         <Label htmlFor="quantity">Qty.</Label>
    //         <Input
    //           type="number"
    //           inputmode="numeric"
    //           id="quantity"
    //           disabled={!state.colorList || state.sizeIndex.length === 0}
    //           name="quantity"
    //           min="1"
    //           step="1"
    //           max={maxQty}
    //           aria-label="Pick quantity"
    //           onChange={(e) =>
    //             dispatch({ type: e.target.name, payload: e.target.value })
    //           }
    //           value={state.quantity}
    //         />
    //       </QtyFieldset>
    //       <SizeFieldset>
    //         <Label htmlFor="size">Size</Label>
    //         <Select
    //           as="select"
    //           id="size"
    //           value={state.sizeIndex}
    //           name="size"
    //           aria-required="true"
    //           aria-label="Pick a size"
    //           onChange={(e) =>
    //             dispatch({ type: e.target.name, payload: e.target.value })
    //           }
    //           disabled={state.activeColor.length === 0}
    //         >
    //           <option disabled value="">
    //             Choose Size
    //           </option>
    //           {state.activeColor.length !== 0 &&
    //             state.colorList.map((item, index) => {
    //               const temp = item.title.split(" / ");
    //               return (
    //                 <option
    //                   value={index}
    //                   key={item.shopifyId}
    //                   aria-label={`${temp[0]} - $${item.price}`}
    //                 >
    //                   {`${temp[0]} - $${item.price}`}
    //                 </option>
    //               );
    //             })}
    //         </Select>
    //       </SizeFieldset>
    //       <AddToCartButton
    //         type="submit"
    //         disabled={
    //           state.activeColor.length === 0 || state.sizeIndex.length === 0
    //         }
    //       >
    //         Add to Cart
    //         <ShoppingCart />
    //       </AddToCartButton>
    //     </div>
    //   </div>
    //   <PriceRange compareAtPrice={state.compareAtPrice}>
    //     {state.sizeIndex === "" ? (
    //       <>
    //         <small>Price Range</small>
    //         <h4>{state.price}</h4>
    //       </>
    //     ) : (
    //       <>
    //         <small>
    //           {state.compareAtPrice === null
    //             ? "Total"
    //             : `$${state.compareAtPrice}`}
    //         </small>
    //         <h4>{`$${state.price ? state.price : "error"}`}</h4>
    //       </>
    //     )}
    //   </PriceRange>
    // </ProductFormRoot>
    <div>wef</div>
  )
}

// ProductForm.defaultProps = {
//   maxQty: 10,
// };

// ProductForm.propTypes = {
//   variants: PropTypes.instanceOf(Object).isRequired,
//   titleOfProduct: PropTypes.string.isRequired,
//   priceMin: PropTypes.string.isRequired,
//   priceMax: PropTypes.string.isRequired,
//   maxQty: PropTypes.number,
// };
