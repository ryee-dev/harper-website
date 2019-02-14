import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  NewbornIcon,
  NappyIcon,
  BottleIcon,
  PacifierIcon,
} from '../assets/icons';
import Image from './Image';
import TimelineApril from './timeline-events/TimelineApril';

const HarperTimeline = () => {
  const [isLoaded, setLoadedState] = useState(null);
  useEffect(() => {
    // @ts-ignore
    setLoadedState(false);
  });

  function handleImagesLoaded() {
    // @ts-ignore
    setLoadedState(true);
  }

  return (
    <Timeline>
      <LeftTimelineElement
        date="April 2018"
        iconStyle={{ background: '#f1eb9a', color: '#fff' }}
        icon={<img src={NewbornIcon} alt="newborn" />}
      >
        <TimelineApril />
      </LeftTimelineElement>
      <RightTimelineElement
        date="May 2018"
        iconStyle={{ background: '#f8a978', color: '#fff' }}
        icon={<img src={NappyIcon} alt="nappy" />}
      >
        <Image />
      </RightTimelineElement>
      <LeftTimelineElement
        date="June 2018"
        iconStyle={{ background: '#a4f6a5', color: '#fff' }}
        icon={<img src={BottleIcon} alt="bottle" />}
      >
        {/*<AlbumImages />*/}
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
};

export default HarperTimeline;

const Timeline = styled(VerticalTimeline)`
  &:before {
    background-color: #f5f5f5;
  }
`;

const TimelineElement = styled(VerticalTimelineElement)`
  //width: 100%;

  img {
    //max-width: 200px;
    //margin: 0.5rem;
  }

  .vertical-timeline-element-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-height: 45px;
    }
  }

  .vertical-timeline-element-content {
    div {
      width: auto !important;
      max-height: 600px;
      overflow-y: scroll;
    }
  }
`;

const LeftTimelineElement = styled(TimelineElement)`
  img {
    max-width: 200px;
    margin: 0.5rem;
  }

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
