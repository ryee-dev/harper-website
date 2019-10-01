import * as React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import ImageZoom from 'react-medium-image-zoom';
import { MasonryStyle } from '../Timeline';

const MasonryOptions = {
  gutter: 1,
  percentPosition: true,
};

const June_19: React.FC<{}> = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allCloudinaryMedia(
            filter: { public_id: { regex: "/6.19/" } }
          ) {
            edges {
              node {
                secure_url
                public_id
                id
                width
                height
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
            {data.images.edges.map(({ node }) => (
              // @ts-ignore
              <ImageZoom
                image={{
                  src: `${node.secure_url}`,
                  alt: `${node.id}`,
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

export default June_19;

const MasonryWrapper = styled.div`
  width: 100% !important;
  margin: 0 auto;
  
  img {
    width: 28%;
    max-width: 220px;
    cursor: pointer;
  }

  .vertical-timeline-element-date {
    padding: 0;
  }
`;
