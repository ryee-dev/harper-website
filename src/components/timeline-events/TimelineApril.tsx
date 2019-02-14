import React from 'react';
// import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';

const MasonryOptions = {
  fitWidth: true,
  gap: 10,
};

const TimelineApril = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(
          filter: { relativeDirectory: { eq: "assets/images/april_2018" } }
        ) {
          edges {
            node {
              publicURL
              name
            }
          }
        }
      }
    `}
    render={data => (
      <Masonry options={MasonryOptions} style={{ margin: '0 auto' }}>
        {data.allFile.edges.map(({ node }) => (
          <img src={node.publicURL} alt={node.name} />
        ))}
      </Masonry>
    )}
  />
);

export default TimelineApril;
