import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        testImage: file(
          relativePath: { eq: "assets/images/april_2018/IMG_0179.jpg" }
        ) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.testImage.childImageSharp.fluid} />}
  />
);

export default Image;
