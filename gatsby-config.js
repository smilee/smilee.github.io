module.exports = {
  siteMetadata: {
    title: `Seungmin Lee - FE Engineer`,
    description: `Seungmin is an activator interested in delivering value. She aims to define and bring to life product experiences valuable to its users as an UX engineer.`,
    author: `@smilee`,
    siteUrl: 'https://uxplus.dev'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-cname',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        // add relative path to your layout component
        component: `${__dirname}/src/components/layout.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
