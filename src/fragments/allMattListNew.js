/* eslint-disable import/prefer-default-export */
import { graphql } from "gatsby";

export const newMattressList = graphql`
  fragment newMattressList on DatoCmsNewMattress {
    nameWithout
    slug
    firmness
    id
    saleBanner
    images {
      coverImage {
        alt
        url
        gatsbyImageData(layout: CONSTRAINED, width: 500)
      }
    }
    subline {
      name
    }
    brand {
      urlName
      displayName
    }
    shopifyInfo {
      priceRange {
        minVariantPrice {
          amount
        }
        maxVariantPrice {
          amount
        }
      }
    }
  }
`;
