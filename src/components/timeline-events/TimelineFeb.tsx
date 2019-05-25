import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import { MasonryStyle } from '../Timeline';
import ImageZoom from 'react-medium-image-zoom';

const MasonryOptions = {
  gutter: 1,
  // fitWidth: true,
  percentPosition: true,
};

const TimelineFeb: React.FC<{}> = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          septImages: allCloudinaryMedia(
            filter: { public_id: { regex: "/2.19/" } }
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
            style={MasonryStyle}
          >
            {data.septImages.edges.map(({ node }) => (
              // @ts-ignore
              <ImageZoom
                image={{
                  src: `${node.secure_url}`,
                  alt: `${node.public_id}`,
                  className: 'thumbnail',
                }}
                key={node.id}
              />
            ))}
          </Masonry>
        </MasonryWrapper>
      )}
    />
  );
};

export default TimelineFeb;

const MasonryWrapper = styled.div`
  width: 100% !important;
  margin: 0 auto;

  div {
    //width: 100% !important;
    //max-height: 500px;
    //overflow-y: scroll;
  }

  img {
    width: 28%;
    max-width: 220px;
    cursor: pointer;
  }
`;

// const MasonryImg = styled(Img)`
//   max-width: 220px;
//   //margin-bottom: 5px;
//   img {
//     cursor: pointer;
//   }
// `;
