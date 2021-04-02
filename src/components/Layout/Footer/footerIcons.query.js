// import { useStaticQuery, graphql } from "gatsby";

// const useFooterIcons = () => {
//   const { datoCmsImage } = useStaticQuery(
//     graphql`
//       query footerImages {
//         datoCmsImage(uniqueName: { eq: "footer" }) {
//           uniqueName
//           images {
//             title
//             alt
//             fluid(maxWidth: 270, imgixParams: { auto: "compress" }) {
//               ...GatsbyDatoCmsFluid_noBase64
//             }
//           }
//         }
//       }
//     `,
//   );
//   return datoCmsImage;
// };

// export default useFooterIcons;
