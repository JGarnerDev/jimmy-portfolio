module.exports = {
  siteMetadata: {
    title: `Jimmy Karamanis Photography`,
    description: `Photography`,
    author: `Jeffrey Garner`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "nkpqqrl1",
        dataset: "production",
        watchMode: true,
        token: process.env.GATSBY_SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jimmy Karamanis Photography `,
        short_name: `jimmykphotography`,
        lang: "en",
        description: "Photography portfolio of Jimmy Karamanis",
        start_url: `/`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
  ],
}
