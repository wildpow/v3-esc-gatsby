// import { useState, useRef, useEffect, useContext } from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";;
import Headroom from "react-headroom";
// import FocusLock from "react-focus-lock";
// import { useOnClickOutside, useKeyboardEvent, useIntersect } from "../Hooks";
// import { useWindowSize } from "../../context/WindowSizeContext";
// import MenuOverLay from "../shared/MenuOverLay";
// import { StructuredDataMain, PageContent, GlobalStyle } from "./Extra";
import React from "react";
import { GlobalStyles } from "twin.macro";
import { Footer, MobileMenu, Cart, Header } from "./LayoutComponents";
// import CartIndicator from "./Cart/CartIndicator";
// import StoreContext from "../../context/StoreContext";
import StoreProvider from "../../context/StoreContext";
// const MainRoot = styled.div`
//   max-width: 1440px;
//   margin-left: auto;
//   margin-right: auto;
//   /* padding-right: ${({ cartStatus, menuStatus }) =>
//     cartStatus === "open" || menuStatus === "open" ? "15px" : "0px"}; */
// `;

function Layout({ children, ...rest }) {
  return (
    <StoreProvider>
      <GlobalStyles />
      <div {...rest}>
        <Headroom>
          <Header />
        </Headroom>
        {children}
        <Footer />
      </div>
    </StoreProvider>
  );
}

export default Layout;
