// /* eslint-disable import/prefer-default-export */
// import { graphql } from "gatsby";

// export const newMattressList = graphql`
//   fragment newMattressList on DatoCmsNewMattress {
//     nameWithout
//     slug
//     firmness
//     id
//     saleBanner
//     images {
//       coverImage {
//         alt
//         url
//         fluid(
//           maxWidth: 250
//           imgixParams: { auto: "compress", lossless: true }
//         ) {
//           ...GatsbyDatoCmsFluid
//         }
//       }
//     }
//     subline {
//       name
//     }
//     brand {
//       urlName
//       displayName
//     }
//     shopifyInfo {
//       priceRange {
//         minVariantPrice {
//           amount
//         }
//         maxVariantPrice {
//           amount
//         }
//       }
//     }
//   }
// `;
