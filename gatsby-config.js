module.exports = {
  siteMetadata: {
    title: `Jeremy Rivera Blog`,
    description: `Just wanted to make this blog to practice my styling.`,
    author: `@itsjeremyrivera`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
