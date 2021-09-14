/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `KUROBO-chan site`,
    description: `KUROBO-chanのメインサイト`,
    lang: `ja`,
    siteUrl: `https://kurobo-chan.netlify.app`,
    locale: `ja_JP`,
    fbappid: process.env.FB_APP_ID,
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KUROBO-chan`,
        short_name: `KUROBO`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e040fb`,
        display: `standalone`,
        icon: `src/images/thumb.svg`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.microCMS_API_KEY,
        serviceId: "kurobo-note",
        apis: [
          {
            endpoint: "blog",
          },
          {
            endpoint: "tag",
          },
          {
            endpoint: "portfolio",
          },
          {
            endpoint: "profile",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
        respectDNT: true,
      },
    },
  ],
}
