const path = require("path");

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      adjustables: allDatoCmsProduct(
        filter: { typeOfProduct: { title: { eq: "Adjustable" } } }
      ) {
        nodes {
          slug
        }
      }
      products: allDatoCmsProduct(
        filter: { typeOfProduct: { title: { ne: "Adjustable" } } }
      ) {
        nodes {
          slug
        }
      }
      allDatoCmsNewMattress {
        nodes {
          slug
          shopifyAdjustableBase
          brand {
            shopify2Inch
            shopify5Inch
            shopify9Inch
            urlName
          }
        }
      }
      allDatoCmsNewBlog {
        edges {
          node {
            excerptImage {
              alt
              url
            }
            slug
            title
          }
        }
      }
    }
  `);
  data.products.nodes.forEach((product) => {
    actions.createPage({
      path: `/accessories/${product.slug}`,
      component: path.resolve(`src/templates/product.js`),
      context: {
        slug: product.slug,
      },
    });
  });
  data.adjustables.nodes.forEach((adjustable) => {
    actions.createPage({
      path: `/adjustable/${adjustable.slug}`,
      component: path.resolve(`src/templates/product.js`),
      context: {
        slug: adjustable.slug,
      },
    });
  });

  data.allDatoCmsNewMattress.nodes.forEach((mattress) => {
    actions.createPage({
      path: `/brands/${mattress.brand.urlName}/${mattress.slug}`,
      component: path.resolve(`./src/templates/mattress.js`),
      context: {
        slug: mattress.slug,
        shopifyBase: mattress.shopifyAdjustableBase,
        shopify2Inch: mattress.brand.shopify2Inch,
        shopify5Inch: mattress.brand.shopify5Inch,
        shopify9Inch: mattress.brand.shopify9Inch,
      },
    });
  });
  const newPosts = data.allDatoCmsNewBlog.edges;
  newPosts.forEach((post, index) => {
    const prev = index === 0 ? null : newPosts[index - 1].node;
    const next =
      index === newPosts.length - 1 ? null : newPosts[index + 1].node;
    actions.createPage({
      path: `/blog/${post.node.slug}`,
      component: path.resolve(`./src/templates/blogPost.js`),
      context: {
        slug: post.node.slug,
        prev,
        next,
      },
    });
  });
};

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    DatoCmsNewMattress: {
      shopifyInfo: {
        type: [`ShopifyProduct`],
        resolve(source, args, context, info) {
          const fieldValue = source.entityPayload.attributes.shopify_connection;
          return context.nodeModel.runQuery({
            query: { filter: { shopifyId: { eq: fieldValue } } },
            type: `ShopifyProduct`,
            // firstOnly: true,
          });
        },
      },
    },
    DatoCmsProduct: {
      shopifyInfo: {
        type: [`ShopifyProduct`],
        resolve(source, args, context, info) {
          const fieldValue = source.entityPayload.attributes.shopify_connection;
          return context.nodeModel.runQuery({
            query: { filter: { shopifyId: { eq: fieldValue } } },
            type: `ShopifyProduct`,
            // firstOnly: true,
          });
        },
      },
    },
  });
};
