// import { useStaticQuery, graphql } from "gatsby";

// export default () => {
//   const { datoCmsFrontPage } = useStaticQuery(
//     graphql`
//       query top3Matts {
//         datoCmsFrontPage {
//           top3Mattress {
//             footer
//             footerUrl
//             header
//             newmattress {
//               saleBanner
//               slug
//               id
//               name
//               firmness
//               images {
//                 coverImage {
//                   fluid(
//                     maxWidth: 250
//                     imgixParams: { auto: "compress", lossless: true }
//                   ) {
//                     ...GatsbyDatoCmsFluid
//                   }
//                   alt
//                 }
//               }
//               shopifyInfo {
//                 priceRange {
//                   minVariantPrice {
//                     amount
//                   }
//                   maxVariantPrice {
//                     amount
//                   }
//                 }
//               }
//               subline {
//                 name
//               }
//               brand {
//                 urlName
//                 displayName
//               }
//             }
//           }
//         }
//       }
//     `,
//   );
//   return datoCmsFrontPage.top3Mattress[0];
// };
