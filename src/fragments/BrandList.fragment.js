import { graphql } from "gatsby";

// eslint-disable-next-line import/prefer-default-export
export const brandList = graphql`
  fragment brandList on DatoCmsBrand {
    seoLink {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    headerLink {
      tagLine
      title
      bgImg {
        alt
        url
        title
      }
    }
    displayName
    urlName
  }
`;
