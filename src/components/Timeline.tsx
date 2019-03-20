import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
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
// import Image from './Image';
// import TimelineApril from './timeline-events/TimelineApril';
import { TimelineApril, TimelineMay, TimelineJune } from './timeline-events';

const HarperTimeline = () => {
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
        <TimelineMay />
      </RightTimelineElement>
      <LeftTimelineElement
        date="June 2018"
        iconStyle={{ background: '#a4f6a5', color: '#fff' }}
        icon={<img src={BottleIcon} alt="bottle" />}
      >
        {/*<AlbumImages />*/}
        <TimelineJune />
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
  //margin-top: 0;

  &:before {
    background-color: #f5f5f5;
  }
`;

const TimelineElement = styled(VerticalTimelineElement)`
  img {
    margin: 0.5rem;
  }

  .vertical-timeline-element-content {
    max-height: 500px;
    overflow: scroll;
  }

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
    border-radius: 20px;

    &:before {
      border-left-color: #f3f8ff !important;
    }
  }

  div {
    width: 100%;
    max-height: 500px;
    margin-left: -5px;
  }
`;

const RightTimelineElement = styled(TimelineElement)`
  .vertical-timeline-element-content {
    background-color: #ffefe0;
    box-shadow: 10px -5px 50px 0 rgba(0, 0, 0, 0.4);
  }

  div {
    //max-height: 500px;
    //margin-left: -5px;
  }

  img {
    //max-height: 500px;
  }
`;

const BlankTimelineElement = styled(TimelineElement)`
  .vertical-timeline-element-content {
    box-shadow: none;
  }
`;
