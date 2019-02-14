import React from 'react';
// import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import Lightbox from './Lightbox';

const AlbumImages = () => (
  <StaticQuery
    query={graphql`
      query {
        albumImages: allFile(
          filter: { sourceInstanceName: { eq: "april_2018" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox albumImages={data.albumImages.edges} />}
  />
);

export default AlbumImages;
