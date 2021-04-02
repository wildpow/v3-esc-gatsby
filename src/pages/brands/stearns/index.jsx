// import PropTypes from "prop-types";
// import { HelmetDatoCms } from "gatsby-source-datocms";
// import { graphql } from "gatsby";
// import Layout from "../../../components/Layout";
// import MattressList from "../../../components/MattressList";
import React from "react"
import Layout from "../../../components/Layout"

const Stearns = ({ data }) => {
  // const { datoCmsBrand, allDatoCmsNewMattress } = data;
  // const sortedMatt = allDatoCmsNewMattress.nodes.sort(
  //   (a, b) =>
  //     Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
  //     Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount),
  // );
  return (
    <Layout>
      {/* <HelmetDatoCms seo={datoCmsBrand.seoLink.seoMetaTags} />
      <MattressList
        headerBG={datoCmsBrand.headerLink.bgImg.url}
        mattresses={sortedMatt}
        title={datoCmsBrand.displayName}
        description={datoCmsBrand.headerLink.tagLine}
        breadCrumbs
        brandName={datoCmsBrand.urlName}
        button={{
          label: "Learn More",
          url: `/brands/${datoCmsBrand.urlName}/landing`,
        }}
      /> */}
      efef
    </Layout>
  )
}

// Stearns.propTypes = {
//   data: PropTypes.instanceOf(Object).isRequired,
// };

export default Stearns

// export const stearnsMattresses = graphql`
//   query stearnsMattresses {
//     datoCmsBrand(urlName: { eq: "stearns" }) {
//       ...brandList
//     }
//     allDatoCmsNewMattress(filter: { brand: { urlName: { eq: "stearns" } } }) {
//       nodes {
//         ...newMattressList
//       }
//     }
//   }
// `;
