// import { useStaticQuery, graphql } from "gatsby";

// export default () => {
//   const { clean, win, clothes, tips } = useStaticQuery(
//     graphql`
//       query topblog {
//         clean: datoCmsNewBlog(slug: { eq: "the-clean-shop-promise" }) {
//           excerpt
//           slug
//           id
//           title
//           excerptImage {
//             alt
//             url
//           }
//         }
//         win: datoCmsNewBlog(slug: { eq: "esc-mattress-center-wins-again" }) {
//           excerpt
//           slug
//           id
//           title
//           excerptImage {
//             alt
//             url
//           }
//         }
//         clothes: datoCmsNewBlog(slug: { eq: "clothes-for-kids" }) {
//           excerpt
//           slug
//           id
//           title
//           excerptImage {
//             alt
//             url
//           }
//         }
//         tips: datoCmsNewBlog(slug: { eq: "five-mattress-shopping-tips" }) {
//           excerpt
//           slug
//           title
//           excerptImage {
//             alt
//             url
//           }
//         }
//       }
//     `,
//   );
//   const topBlogData = [clean, clothes, win, tips];
//   return topBlogData;
// };
