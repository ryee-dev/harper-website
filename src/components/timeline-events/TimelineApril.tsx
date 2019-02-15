import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';

const MasonryOptions = {
  gutter: 5,
  fitWidth: true,
  percentPosition: true,
};

const TimelineApril = () => (
  <StaticQuery
    query={graphql`
      query {
        aprilImages: allFile(
          filter: { relativeDirectory: { eq: "assets/images/april_2018" } }
        ) {
          edges {
            node {
              publicURL
              name
              id
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
    render={data => (
      <MasonryWrapper>
        <Masonry
          options={MasonryOptions}
          elementType={'div'}
          style={{ width: '100%', margin: '0 auto' }}
        >
          {data.aprilImages.edges.map(({ node }) => (
            <MasonryImg fluid={node.childImageSharp.fluid} key={node.id} />
          ))}
        </Masonry>
      </MasonryWrapper>
    )}
  />
);

export default TimelineApril;

// const MasonryGrid = styled.div`
//   columns: 5;
//   margin: 0 auto;
//   width: 100%;
//
//   //display: flex;
//   //align-items: center;
//   //justify-content: flex-start;
//   //flex-direction: column;
// `;

const MasonryWrapper = styled.div`
  width: 100% !important;
  overflow-y: scroll;
  margin: 0 auto;

  div {
    //width: 100% !important;
  }
`;

const MasonryImg = styled(Img)`
  max-width: 220px;
  margin-bottom: 5px;
  cursor: pointer;
`;
