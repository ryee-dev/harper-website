require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat'],
        },
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: 'ryee-cloud',
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: 'image',
        // type: `type Value`,
        maxResults: 300,
        // tags:`fetch image tags?`,
        // prefix: `abc-xyz/`
      },
    },
  ],
};
