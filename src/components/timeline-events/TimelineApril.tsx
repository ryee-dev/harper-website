import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';

import { MasonryStyle } from '../Timeline';
import MediumLightbox from '../MediumLightbox';

const MasonryOptions = {
  gutter: 1,
  // fitWidth: true,
  percentPosition: true,
};

// const Img = posed(ImageZoom)({
//   hoverable: true,
//   init: { filter: 'blur(2px)' },
//   hover: { filter: 'blur(0px)' },
// });

const TimelineApril: React.FC<{}> = () => {
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
            {data.septImages.edges.map(({ node }) => (
              // @ts-ignore
              <MediumLightbox
                src={node.secure_url}
                key={node.id}
                imgHeight={node.height}
                imgWidth={node.width}
              />
            ))}
          </Masonry>
        </MasonryWrapper>
      )}
    />
  );
};

export default TimelineApril;

{
  /*<Img*/
}
{
  /*  image={{*/
}
{
  /*    src: `${node.secure_url}`,*/
}
{
  /*    alt: `${node.public_id}`,*/
}
{
  /*    className: 'thumbnail',*/
}
{
  /*  }}*/
}
{
  /*  key={node.id}*/
}
{
  /*/>*/
}

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
