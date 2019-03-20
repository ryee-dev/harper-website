import React from 'react';
// import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import Lightbox from './Lightbox';

const AlbumImages = () => (
  <StaticQuery
    query={graphql`
      query {
        albumImages: allCloudinaryMedia {
          edges {
            node {
              url
              public_id
              id
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
