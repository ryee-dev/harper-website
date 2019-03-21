import React, { useState } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

interface Props {
  imgWidth: number;
  imgHeight: number;
}

const Frame = posed.div({
  init: {
    applyAtEnd: { display: 'none' },
    opacity: 0,
  },
  zoom: {
    applyAtStart: { display: 'block' },
    opacity: 1,
  },
});

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99],
};

const Image = posed.img({
  init: {
    position: 'relative',
    width: 'auto',
    height: 'auto',
    transition,
    flip: true,
  },
  zoom: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition,
    flip: true,
  },
});

const MediumLightbox: React.FC<Props> = (props: Props) => {
  const [isFocused, setFocused] = useState(false);

  const zoomOut = () => {
    setFocused(false);
  };

  const zoomIn = () => {
    window.addEventListener('scroll', zoomOut);
    setFocused(true);
  };

  const toggleZoom = () => {
    // window.addEventListener('scroll', zoomOut);
    isFocused ? zoomOut() : zoomIn();
  };

  const { imgWidth, imgHeight } = props;
  const pose = isFocused ? 'zoom' : 'init';

  return (
    <div style={{ width: imgWidth, height: imgHeight }} onClick={toggleZoom}>
      <StyledFrame pose={pose} />
      <StyledImg pose={pose} {...props} />
    </div>
  );
};

export default MediumLightbox;

const StyledFrame = styled(Frame)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  background: white;
  transform: translateZ(0);
`;

const StyledImg = styled(Image)`
  display: block;
  max-width: 100%;
  margin: auto;
`;
