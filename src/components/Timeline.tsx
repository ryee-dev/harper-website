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
import {
  TimelineApril,
  TimelineMay,
  TimelineJune,
  TimelineJuly,
  TimelineAugust,
  TimelineSept,
  TimelineOct,
  TimelineNov,
  TimelineDec,
  TimelineJan,
  TimelineFeb,
} from './timeline-events';

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
        <TimelineJune />
      </LeftTimelineElement>
      <RightTimelineElement
        date="July 2018"
        iconStyle={{ background: '#f8a978', color: '#fff' }}
        icon={<img src={NappyIcon} alt="nappy" />}
      >
        <TimelineJuly />
      </RightTimelineElement>
      <LeftTimelineElement
        date="August 2018"
        iconStyle={{ background: '#a4f6a5', color: '#fff' }}
        icon={<img src={BottleIcon} alt="bottle" />}
      >
        <TimelineAugust />
      </LeftTimelineElement>
      <RightTimelineElement
        date="September 2018"
        iconStyle={{ background: '#f8a978', color: '#fff' }}
        icon={<img src={NappyIcon} alt="nappy" />}
      >
        <TimelineSept />
      </RightTimelineElement>
      <LeftTimelineElement
        date="October 2018"
        iconStyle={{ background: '#a4f6a5', color: '#fff' }}
        icon={<img src={BottleIcon} alt="bottle" />}
      >
        <TimelineOct />
      </LeftTimelineElement>
      <RightTimelineElement
        date="November 2018"
        iconStyle={{ background: '#f8a978', color: '#fff' }}
        icon={<img src={NappyIcon} alt="nappy" />}
      >
        <TimelineNov />
      </RightTimelineElement>
      <LeftTimelineElement
        date="December 2018"
        iconStyle={{ background: '#a4f6a5', color: '#fff' }}
        icon={<img src={BottleIcon} alt="bottle" />}
      >
        <TimelineDec />
      </LeftTimelineElement>
      <RightTimelineElement
        date="January 2018"
        iconStyle={{ background: '#f8a978', color: '#fff' }}
        icon={<img src={NappyIcon} alt="nappy" />}
      >
        <TimelineJan />
      </RightTimelineElement>
      <LeftTimelineElement
        date="February 2018"
        iconStyle={{ background: '#a4f6a5', color: '#fff' }}
        icon={<img src={BottleIcon} alt="bottle" />}
      >
        <TimelineFeb />
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

  .thumbnail {
    width: 92%;

    @media (min-width: 768px) {
      width: 28%;
      max-width: 220px;
    }

    @media (min-width: 1024px) {
      width: 30%;
      max-width: 300px;
    }

    @media (min-width: 1440px) {
      width: 45%;
      max-width: 300px;
    }
  }

  .vertical-timeline-element-content {
    //max-height: 400px !important;
    padding: 1rem 1rem 0 1rem;
    @media (min-width: 1440px) {
      padding: 1rem;
    }
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
    //border-right-color: #f3f8ff !important;

    &:before {
      border-right-color: #f3f8ff !important;
    }

    @media (min-width: 1440px) {
      &:before {
        border-left-color: #f3f8ff !important;
      }
    }
  }
`;

const RightTimelineElement = styled(TimelineElement)`
  .vertical-timeline-element-content {
    background-color: #ffefe0;
    box-shadow: 10px -5px 50px 0 rgba(0, 0, 0, 0.4);

    &:before {
      border-right-color: #ffefe0 !important;
    }

    @media (min-width: 1440px) {
      &:before {
        border-left-color: #ffefe0 !important;
      }
    }
  }

  //div {
  //  max-height: 500px;
  //  margin-left: -5px;
  //}
`;

const BlankTimelineElement = styled(TimelineElement)`
  .vertical-timeline-element-content {
    box-shadow: none;
  }
`;

export const MasonryStyle = {
  width: '100%',
  margin: '0 auto',
  maxHeight: '395px',
  overflow: 'scroll',
};
