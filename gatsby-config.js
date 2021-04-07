require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const queries = require("./src/algoliaQueries");

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.escmattresscenter.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;
console.log(NETLIFY_ENV);

const cfg = {
  siteMetadata: {
    title: "E.S.C Mattress Center",
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-goober`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-goober`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        concurrentQueries: false,
        queries,
        enablePartialUpdates: true,
        matchFields: ["slug", "description", "objectID"],
      },
    },
    // Source Plug-ins
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `${process.env.GATSBY_SHOPIFY_STORE}.myshopify.com`,
        accessToken: process.env.GATSBY_SHOPIFY_API,
        verbose: true,
        apiVersion: "2020-10",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-datocms`,
            options: {
              linkImagesToOriginal: false,
              apiToken: process.env.DATO_API,
              maxWidth: 780,
              wrapperStyle: "margin-top: 40px; margin-bottom: 20px;",
            },
          },
        ],
      },
    },
    // SITE SETTINGS
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `E.S.C Mattress Center`,
        short_name: `E.S.C`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1565c0`,
        display: `minimal-ui`,
        icon: `src/images/squarePanda.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.escmattresscenter.com`,
        stripQueryString: true,
      },
    },
  ],
};

if (process.env.NODE_ENV === "production") {
  const googleAnalyticsCfg = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS,
    },
  };
  const preact = `gatsby-plugin-preact`;

  cfg.plugins.push(preact);
  cfg.plugins.push(googleAnalyticsCfg);
}

module.exports = cfg;
