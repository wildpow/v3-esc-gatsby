import { graphql } from "gatsby";

// imgixParams: { auto: "compress", lossless: true }

// eslint-disable-next-line import/prefer-default-export
export const landing = graphql`
  fragment landing on DatoCmsLanding {
    seoLink {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    title
    headingImg {
      alt
      title
      url
      gatsbyImageData(layout: CONSTRAINED, width: 662)
    }
    # , maxHeight: 116
    # , maxHeight: 325
    heroImg {
      alt
      title
      url
      gatsbyImageData(layout: CONSTRAINED, width: 1080)
    }
    description
    tabBox {
      topButtonUrl
      topButtonName
      id
      name
      topText
      topImage {
        alt
        height
        width
        title
        url
        gatsbyImageData(layout: CONSTRAINED, width: 458)
      }
      box {
        buttonUrl
        buttonText
        title
        description
        picture {
          gatsbyImageData(layout: CONSTRAINED, width: 528)
          alt
          title
          url
        }
      }
    }
  }
`;
// imgixParams: { auto: "compress", lossless: true }
