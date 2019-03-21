import React, { useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import ImageZoom from 'react-medium-image-zoom';

import { MasonryStyle } from '../Timeline';

const MasonryOptions = {
  gutter: 1,
  // fitWidth: true,
  percentPosition: true,
};

const TimelineApril: React.FC<{}> = () => {
  const [isOpen, toggleLightbox] = useState(false);
  // console.log(isOpen);

  const testClick = () => {
    console.log(isOpen);
  };

  // const { album } = props;

  return (
    <StaticQuery
      query={graphql`
        query {
          septImages: allCloudinaryMedia(
            filter: { public_id: { regex: "/4.18/" } }
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

export default TimelineApril;

const MasonryWrapper = styled.div`
  width: 100% !important;

  margin: 0 auto;

  //div {
  //  //width: 100% !important;
  //  overflow-y: scroll;
  //  max-height: 400px;
  //}

  img {
    width: 28%;
    max-width: 220px;
    cursor: pointer;
  }

  .vertical-timeline-element-date {
    padding: 0;
  }
`;

const MasonryImg = styled(Img)`
  max-width: 220px;
  //margin-bottom: 5px;
  img {
    cursor: pointer;
  }
`;
