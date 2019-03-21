import React, { useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';

const MasonryOptions = {
  gutter: 1,
  // fitWidth: true,
  percentPosition: true,
};

const TimelineMay: React.FC<{}> = () => {

  return (
    <StaticQuery
      query={graphql`
        query {
          septImages: allCloudinaryMedia(
            filter: { public_id: { regex: "/5.18/" } }
          ) {
            edges {
              node {
                secure_url
                public_id
                id
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
            {data.septImages.edges.map(({ node }) => (
              // @ts-ignore
              <img src={node.secure_url} key={node.id} alt={node.public_id} />
            ))}
          </Masonry>
        </MasonryWrapper>
      )}
    />
  );
};

export default TimelineMay;

const MasonryWrapper = styled.div`
  width: 100% !important;
  overflow-y: scroll;
  margin: 0 auto;

  div {
    //width: 100% !important;
  }

  img {
    width: 28%;
    max-width: 220px;
    cursor: pointer;
  }
`;

const MasonryImg = styled(Img)`
  max-width: 220px;
  //margin-bottom: 5px;
  img {
    cursor: pointer;
  }
`;
