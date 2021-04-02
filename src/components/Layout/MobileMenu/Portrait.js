// import styled from "styled-components";
// import { Link } from "gatsby";
// import {
//   FadeIn,
//   SlideIn,
//   ShrinkKeyframe,

// } from "./MobileMenu.styled";
// import { firstSet, secondSet } from "./items";
// import { colors } from "../../../utils/styles";

// const StyledLink = styled(Link)`
//   font-family: ${(props) => props.theme.MainFont1};
//   font-size: 1.1rem;
//   text-decoration: none;
//   font-weight: 700;
//   letter-spacing: 0.2rem;
//   color: ${colors.gray["100"]};
//   padding-left: 10px;
//   background-color: inital;
//   transition: background-color 0.2s ease-in-out;
//   &:hover {
//     cursor: pointer;
//     background-color: rgba(17, 75, 95, 0.4);
//     background-color: ${colors.gray["700"]};
//   }
//   &:focus {
//     box-shadow: 0 0 0 1px ${colors.blue["300"]} inset;
//     outline: 0;
//     transition: box-shadow 0.15s ease-in-out;
//   }
//   &:active {
//     background-color: ${colors.red["900"]};
//   }
//   @media (max-width: 300px) {
//     text-align: center;
//   }
//   @media (max-height: 499px) {
//     text-align: center;
//   }
//   @media (min-width: 375px) {
//     font-size: 1.4rem;
//   }
//   @media (min-width: 410px) {
//     font-size: 1.1rem;
//   }
//   @media (min-width: 400px) and (min-height: 600px) {
//     font-size: 1.2rem;
//   }
//   @media (orientation: portrait) and (min-height: 800px) {
//     font-size: 1.4rem;
//   }
//   @media (min-height: 600px) and (min-width: 900px) and (max-width: 1022px) {
//     font-size: 1.5rem;
//   }
//   @media (min-height: 900px) and (min-width: 400px) and (max-width: 1022px) {
//     font-size: 1.5rem;
//     padding: 5px;
//   }
//   @media (min-width: 768px) and (min-height: 1024px) {
//     font-size: 1.7rem;
//     letter-spacing: 0.25rem;
//     padding: 6px;
//   }
// `;
// const Line = styled.div`
//   width: 0%;
//   height: 1px;
//   background: white;
//   margin: 0 auto;
//   animation: 0.9s ${ShrinkKeyframe} forwards;
//   animation-delay: ${(props) => props.delay};
// `;
// const Wrapper = styled.div`
//   display: none;
//   font-size: 1.2rem;
//   margin: 0;
//   padding: 0;
//   height: 100%;
//   @media (min-width: 300px) and (max-width: 360px) {
//     height: 90%;
//   }
//   @media (min-width: 900px) and (max-width: 1022px) and (min-height: 500px) {
//     display: flex;
//     flex-direction: column;
//   }
//   @media (orientation: portrait) {
//     display: flex;
//     flex-direction: column;
//   }
//   @media (max-width: 400px) and (max-height: 450px) {
//     display: flex;
//     flex-direction: column;
//     text-align: center;
//   }
//   @media (min-height: 600px) and (max-height: 899px) and (min-width: 605px) and (max-width: 900px) {
//     display: flex;
//     flex-direction: column;
//   }
// `;

// const SmallItemsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   h1 {
//     margin: 0;
//     padding: 5px;
//   }
// `;

// const LargeItemsContainer = styled.div`
//   display: none;
//   flex-direction: column;
//   @media (min-height: 700px) {
//     display: flex;
//   }
// `;
// const HideLine = styled(Line)`
//   @media (min-height: 700px) {
//     display: none;
//   }
// `;
// const Space = styled.div`
//   width: 100%;
//   height: 50px;

//   @media (min-width: 414px) and (min-height: 736px) {

//     width: 100%;
//   }

//   @media (max-height: 480px) {
//     display: none;
//   }
// `;
// const ShiftTextOnHover = styled.div`
//   transition: all 0.5s ease-in-out;
//   transform: none;
//   padding: 15px;
//   &:hover {
//     transform: translateX(10px);
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const Portrait = () => {
  return (
    <div>wedf</div>
    // <Wrapper>
    //   <div>
    //     <Space />
    //   </div>
    //   <div>
    //     <SmallItemsContainer>
    //       <Container
    //         onClick={() => {
    //           document.body.style.overflow = "visible";
    //           document.body.style.position = "initial";
    //         }}
    //       >
    //         <StyledLink
    //           to="/"
    //           activeStyle={{
    //             backgroundColor: colors.red["900"],
    //           }}
    //         >
    //           <SlideIn delay={`${0}s`}>
    //             <FadeIn delay={`${0}s`}>
    //               <ShiftTextOnHover>Home</ShiftTextOnHover>
    //             </FadeIn>
    //           </SlideIn>
    //         </StyledLink>
    //       </Container>
    //       <Line delay="0s" />

    //       {firstSet.map((item) => (
    //         <Container
    //           key={item.key}
    //           onClick={() => {
    //             document.body.style.overflow = "visible";
    //             document.body.style.position = "initial";
    //           }}
    //         >
    //           <StyledLink
    //             to={item.to}
    //             partiallyActive
    //             activeStyle={{
    //               backgroundColor: colors.red["900"],
    //             }}
    //           >
    //             <SlideIn delay={`${item.delay}s`}>
    //               <FadeIn delay={`${item.delay}s`}>
    //                 <ShiftTextOnHover>{item.label}</ShiftTextOnHover>
    //               </FadeIn>
    //             </SlideIn>
    //           </StyledLink>
    //           {item.key !== 8 ? (
    //             <Line delay={`${item.delay}s`} />
    //           ) : (
    //             <LargeItemsContainer>
    //               <Line delay={`${item.delay}s`} />
    //             </LargeItemsContainer>
    //           )}
    //         </Container>
    //       ))}
    //     </SmallItemsContainer>
    //     <LargeItemsContainer>
    //       {secondSet.map((item) => (
    //         <Container
    //           key={item.key}
    //           onClick={() => {
    //             document.body.style.overflow = "visible";
    //             document.body.style.position = "initial";
    //           }}
    //         >
    //           <StyledLink
    //             to={item.to}
    //             partiallyActive
    //             activeStyle={{
    //               backgroundColor: "rgba(235, 28, 26, 0.9)",
    //             }}
    //           >
    //             <SlideIn delay={`${item.delay}s`}>
    //               <FadeIn delay={`${item.delay}s`}>
    //                 <ShiftTextOnHover>{item.label}</ShiftTextOnHover>
    //               </FadeIn>
    //             </SlideIn>
    //           </StyledLink>
    //           {item.key !== 11 ? (
    //             <Line delay={`${item.delay}s`} />
    //           ) : (
    //             <HideLine delay={`${item.delay}s`} />
    //           )}
    //         </Container>
    //       ))}
    //     </LargeItemsContainer>
    //   </div>
    // </Wrapper>
  )
}

export default Portrait
