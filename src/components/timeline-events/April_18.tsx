import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import ImageZoom from 'react-medium-image-zoom';
import { MasonryStyle } from '../Timeline';

const MasonryOptions = {
  gutter: 1,
  percentPosition: true,
};

const April_18: React.FC<{}> = () => {
  return (
    <StaticQuery
      query={graphql`
      query PhotoQuery {
        april18: allS3ImageAsset(filter: {Key: {regex: "/2018/4.18/"}}) {
          edges {
            node {
              Key
              id
            }
          }
        }
      }
    `}
      render={(data: any) => (
        <MasonryWrapper>
          <Masonry
            options={MasonryOptions}
            elementType={'div'}
            style={MasonryStyle}
          >
            {data.april18.edges.map(({ node }: any) => (
              // @ts-ignore
              <ImageZoom
                image={{
                  src: `https://harperwebsite.s3-us-west-1.amazonaws.com/${node.Key}`,
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

export default April_18;

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
