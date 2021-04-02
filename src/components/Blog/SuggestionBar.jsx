import React from "react"

// const StyledLink = styled(Link)`
//   display: flex;
//   text-decoration: none;
//   position: relative;
//   flex-direction: ${({ reverse }) => reverse && "row-reverse"};
//   margin-bottom: 18px;
//   background: white;
//   align-items: center;

//   h4 {
//     text-align: ${({ reverse }) => reverse && "right"};
//     margin: 0;
//     padding: 0;
//     font-family: ${fonts.sans};
//     z-index: 11;
//     color: white;
//     max-width: 200px;
//     line-height: 1em;
//   }
//   :after {
//     transition: background-color 0.2s ease-in-out;
//     bottom: 11px;
//     left: ${({ reverse }) => !reverse && "1px"};
//     right: ${({ reverse }) => reverse && "1px"};
//     content: " ";
//     height: 50px;
//     width: 90%;
//     background: ${colors.red[900]};
//     position: absolute;
//   }
//   :before {
//     transition: all 0.2s ease-in-out;
//     left: ${({ reverse }) => !reverse && "90%"};
//     right: ${({ reverse }) => reverse && "90%"};
//     top: 9px;
//     border: solid transparent;
//     content: " ";
//     height: 0;
//     width: 0;
//     z-index: 11;
//     position: absolute;
//     pointer-events: none;
//     border-color: rgba(136, 183, 213, 0);
//     border-right-color: ${({ reverse }) => (reverse ? colors.red["900"] : "")};
//     border-left-color: ${({ reverse }) => (!reverse ? colors.red["900"] : "")};
//     border-width: 25px;
//   }
//   img {
//     transition: transform 0.25s ease-in-out;
//     width: 70px;
//     z-index: 10;

//     margin-left: 5px;
//     margin-right: 5px;
//   }
//   :hover {
//     :after {
//       background: ${colors.blue[900]};
//     }
//     :before {
//       border-right-color: ${({ reverse }) =>
//         reverse ? colors.blue["900"] : ""};
//       border-left-color: ${({ reverse }) =>
//         !reverse ? colors.blue["900"] : ""};
//     }
//     img {
//       transform: scale3d(1.1, 1.1, 1);
//     }
//   }
//   @media (min-width: ${breakpoints.xsm}) {
//     h4 {
//       max-width: 85%;
//     }
//   }
//   @media (min-width: ${breakpoints.phablet}) {
//     h4 {
//       width: 100%;
//       max-width: initial;
//     }
//     img {
//       margin-left: 15px;
//       margin-right: 15px;
//     }
//   }
//   @media (min-width: ${breakpoints.md}) {
//     width: 48%;
//     h4 {
//       width: 60%;
//       line-height: 1.25em;
//       padding-top: 4px;
//     }
//     img {
//       width: 90px;
//     }
//     :after {
//       height: 60px;
//     }
//     :before {
//       border-width: 30px;
//       top: 19px;
//     }
//   }
//   @media (min-width: ${breakpoints.lg}) {
//     h4 {
//       width: 65%;
//       font-size: ${fontSize.lg};
//     }
//   }
//   @media (min-width: ${breakpoints.xl}) {
//     h4 {
//       font-size: ${fontSize["2xl"]};
//     }
//     img {
//       width: 110px;
//     }
//     :after {
//       height: 80px;
//     }
//     :before {
//       border-width: 40px;
//     }
//   }
// `;

// const rowReverse = (n, p) => {
//   if (n && p) {
//     return "row-reverse";
//   }
//   if (n === true && p === false) {
//     return "row-reverse";
//   }
//   return "row";
// };
// const SuggestionRoot = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding-top: 20px;
//   padding-bottom: 0px;
//   flex-direction: column;
//   margin: 0 auto;
//   align-content: center;
//   overflow-x: hidden;
//   @media (min-width: 768px) {
//     flex-direction: ${({ isPrev, isNext }) => rowReverse(isNext, isPrev)};
//   }
// `;

const SuggestionBar = ({ prev, next }) => {
  return (
    // <SuggestionRoot isNext={isNext} isPrev={isPrev}>
    //   {next && (
    //     <StyledLink to={`/blog/${next.slug}`} right>
    //       <img
    //         src={next.excerptImage.url}
    //         alt={
    //           next.excerptImage.alt === null
    //             ? `The blog post called ${next.title}`
    //             : next.excerptImage.alt
    //         }
    //       />
    //       <h4>{next.title}</h4>
    //     </StyledLink>
    //   )}

    //   {prev && (
    //     <StyledLink to={`/blog/${prev.slug}`} left reverse>
    //       <img
    //         src={prev.excerptImage.url}
    //         alt={
    //           prev.excerptImage.alt === null
    //             ? `The blog post called ${prev.title}`
    //             : prev.excerptImage.alt
    //         }
    //       />
    //       <h4>{prev.title}</h4>
    //     </StyledLink>
    //   )}
    // </SuggestionRoot>
    <div>sedfef</div>
  )
}

// SuggestionBar.propTypes = {
//   next: PropTypes.instanceOf(Object),
//   prev: PropTypes.instanceOf(Object),
// }

// SuggestionBar.defaultProps = {
//   next: null,
//   prev: null,
// }

export default SuggestionBar
