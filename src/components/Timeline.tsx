import * as React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AprilImg1 from '../assets/images/april_2018/IMG_0179.jpg';
import AprilImg2 from '../assets/images/april_2018/IMG_0218.jpeg';
import {
  NewbornIcon,
  NappyIcon,
  BottleIcon,
  PacifierIcon,
} from '../assets/icons';

const MasonryOptions = {
  fitWidth: true,
  gap: 10,
};

const HarperTimeline = () => (
  <Timeline>
    <LeftTimelineElement
      date="April 2018"
      iconStyle={{ background: '#f1eb9a', color: '#fff' }}
      icon={<img src={NewbornIcon} alt="newborn" />}
    >
      <Masonry options={MasonryOptions} style={{ margin: '0 auto' }}>
        <img src={AprilImg1} alt="april-1" />
        <img src={AprilImg2} alt="april-2" />
      </Masonry>
    </LeftTimelineElement>
    <RightTimelineElement
      date="May 2018"
      iconStyle={{ background: '#f8a978', color: '#fff' }}
      icon={<img src={NappyIcon} alt="nappy" />}
    >
      <p>test</p>
    </RightTimelineElement>
    <LeftTimelineElement
      date="June 2018"
      iconStyle={{ background: '#a4f6a5', color: '#fff' }}
      icon={<img src={BottleIcon} alt="bottle" />}
    >
      <p>test</p>
    </LeftTimelineElement>
    <BlankTimelineElement
      iconStyle={{ background: '#8ed6ff', color: '#fff' }}
      icon={<img src={PacifierIcon} alt="pacifier" />}
    />
  </Timeline>
);

export default HarperTimeline;

const Timeline = styled(VerticalTimeline)`
  //background-color: lightgray;
  &:before {
    background-color: lightgray;
  }
`;

const TimelineElement = styled(VerticalTimelineElement)`
  width: 100%;

  img {
    max-width: 200px;
    margin: 0 0.5rem;
  }

  //.vertical-timeline-element-content {
  //}

  .vertical-timeline-element-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-height: 45px;
    }
  }
`;

const LeftTimelineElement = styled(TimelineElement)`
  .vertical-timeline-element-content {
    background-color: #f3f8ff;

    box-shadow: -10px -5px 50px 0 rgba(0, 0, 0, 0.4);
  }
`;

const RightTimelineElement = styled(TimelineElement)`
  .vertical-timeline-element-content {
    background-color: #ffefe0;
    box-shadow: 10px -5px 50px 0 rgba(0, 0, 0, 0.4);
  }
`;

const BlankTimelineElement = styled(TimelineElement)`
  .vertical-timeline-element-content {
    box-shadow: none;
  }
`;
