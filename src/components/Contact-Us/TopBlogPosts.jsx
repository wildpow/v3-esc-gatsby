import React from "react"

// import styled from "styled-components";
// import { Link } from "gatsby";
// import useTopBlogPosts from "./useTopBlogPosts";
// import {
//   colors,
//   spacing,
//   fontSize,
//   breakpoints,
//   radius,
// } from "../../utils/styles";

// const TopBlogRoot = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-bottom: 20px;
//   .post-wrapper {
//     margin-bottom: ${spacing[4]};
//     border: 1px solid ${colors.gray[500]};
//     border-radius: ${radius.large}px;
//     padding: ${spacing[4]};
//     padding-top: 5px;
//     padding-bottom: 5px;
//     text-decoration: none;
//     :hover {
//       box-shadow: 0px 5px 5px 0px ${colors.gray["500"]};
//       transition: box-shadow 0.15s ease-in-out;
//     }
//     p {
//       margin: 0;
//       padding-bottom: 5px;
//       padding-top: 5px;
//       font-size: ${fontSize.root};
//       line-height: ${spacing[5]};
//     }
//     position: relative;
//     ::after {
//       position: absolute;
//       content: "";
//       left: 0;
//       top: 18px;
//       height: 50px;
//       width: 100%;
//       z-index: 0;
//       background-color: ${colors.red[900]};
//       opacity: 0.9;
//     }
//   }
//   .post-title {
//     display: flex;
//     position: relative;
//     z-index: 1;
//     img {
//       max-height: 70px;
//       margin-top: 5px;
//     }
//     h4 {
//       margin-top: 17px;
//       margin-bottom: 0;
//       padding-left: 5px;
//       padding-top: 1px;
//       color: ${colors.white};
//       font-size: ${fontSize.lg};
//     }
//   }

//   @media (min-width: ${breakpoints.xsm}) {
//     .post-title {
//       h4 {
//         white-space: nowrap;
//         text-overflow: ellipsis;
//         overflow-y: hidden;
//         overflow: hidden;
//         margin-top: 26px;
//         padding-left: 10px;
//       }
//     }
//   }

//   @media (min-width: ${breakpoints.md}) {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
//     grid-column-gap: ${spacing[4]};
//     grid-row-gap: ${spacing[4]};
//     .post-wrapper {
//       margin-bottom: 0px;
//       p {
//         padding-bottom: 15px;
//         padding-top: 10px;
//         font-size: ${fontSize.lg};
//         line-height: ${spacing[6]};
//       }
//       ::after {
//         top: 34px;
//         height: 45px;
//         width: 100%;
//       }
//     }
//     .post-title {
//       img {
//         max-height: 90px;
//         margin-top: 10px;
//       }
//       h4 {
//         padding-left: 15px;
//         margin-top: 38px;
//         font-size: ${fontSize.xl};
//       }
//     }
//   }
//   @media (min-width: ${breakpoints.lg}) {
//     .post-title {
//       h4 {
//         padding-top: 12px;
//         margin-top: 32px;
//         font-size: ${fontSize["2xl"]};
//       }
//       img {
//         max-height: 110px;
//       }
//     }
//     .post-wrapper {
//       ::after {
//         top: 37px;
//         height: 54px;
//       }
//       p {
//         padding-top: 15px;
//       }
//     }
//   }
// `;
const TopBlogPosts = () => {
  // const topBlogData = useTopBlogPosts();
  return (
    // <TopBlogRoot>
    //   {topBlogData.map((item) => {
    //     return (
    //       <Link
    //         key={item.slug}
    //         className="post-wrapper"
    //         to={`/blog/${item.slug}`}
    //       >
    //         <div className="post-title">
    //           <img src={item.excerptImage.url} alt={item.excerptImage.alt} />
    //           <h4>{item.title}</h4>
    //         </div>
    //         <p>{item.excerpt}</p>
    //       </Link>
    //     );
    //   })}
    // </TopBlogRoot>
    <div>efwef</div>
  )
}

export default TopBlogPosts
