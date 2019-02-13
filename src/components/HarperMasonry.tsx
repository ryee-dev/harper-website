import * as React from 'react';
import Masonry from 'react-masonry-component';
import styled from 'styled-components';
import HarperElf1 from '../assets/images/IMG_0011.jpeg';
import HarperElf2 from '../assets/images/IMG_0012.jpeg';
// import HarperElf3 from '../assets/images/IMG_0013.jpeg';
// import HarperElf4 from '../assets/images/IMG_0014.jpeg';
// import HarperElf5 from '../assets/images/IMG_0015.jpeg';

const MasonryOptions = {
  fitWidth: true,
  gap: 10,
};

const HarperMasonry = () => (
  <>
    <MasonryWrapper>
      <Masonry options={MasonryOptions}>
        <img
          src={HarperElf1}
          alt="harper-elf-1"
          draggable={false}
        />
        <img
          src={HarperElf2}
          alt="harper-elf-2"
          draggable={false}
        />
      </Masonry>
    </MasonryWrapper>
  </>
);

export default HarperMasonry;

const MasonryWrapper = styled.div`
  margin: 0 auto;
  //min-width: 80%;
  //width: 100%;

  img {
    max-width: 500px;
  }
  //img {
  //  height: auto;
  //
  //  &.size-1 {
  //    max-width: 500px;
  //  }
  //
  //  &.size-2 {
  //    max-width: 400px;
  //  }
  //
  //  &.size-3 {
  //    max-width: 300px;
  //  }
  //}
`;
