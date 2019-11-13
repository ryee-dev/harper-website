// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-eslint',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: { typekit: { id: 'tfs6nxb' } },
    },
    {
      resolve: 'gatsby-source-cloudinary',
      options: {
        cloudName: 'ryee-cloud',
        apiKey: '486679363458553',
        apiSecret: 'ngXoPyfG3VhN1ojLOV25rW_XQnU',
        maxResults: 500,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: true, // use svgo to optimize SVGs (default)
        svgoConfig: {
          removeViewBox: true, // remove viewBox when possible (default)
          cleanupIDs: true, // remove unused IDs and minify remaining IDs (default)
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: { rule: { include: /assets/ } },
    },
    {
      resolve: 'gatsby-source-s3-image',
      options: {
        bucketName: 'harperwebsite',
        region: 'us-west-1',
        protocol: 'https',
      },
    },
  ],
};
