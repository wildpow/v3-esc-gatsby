import { useStaticQuery, graphql } from "gatsby";

const useLogo = () => {
  const { datoCmsFrontPage } = useStaticQuery(
    graphql`
      query logoImage {
        datoCmsFrontPage {
          pandaLogo {
            alt
            gatsbyImageData(layout: CONSTRAINED, width: 90)
          }
        }
      }
    `
  );
  return datoCmsFrontPage;
};

export default useLogo;
