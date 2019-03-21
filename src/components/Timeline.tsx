import React from 'react';
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
  TimelineMarch,
} from './timeline-events';

const HarperTimeline = () => {
  return (
    <>
      <Timeline>
        <LeftTimelineElement
          date="April '18"
          iconStyle={{ background: '#f1eb9a', color: '#fff' }}
          icon={<NewbornIcon />}
        >
          <TimelineApril />
        </LeftTimelineElement>
        <RightTimelineElement
          date="May '18"
          iconStyle={{ background: '#f8a978', color: '#fff' }}
          icon={<NappyIcon />}
        >
          <TimelineMay />
        </RightTimelineElement>
        <LeftTimelineElement
          date="June '18"
          iconStyle={{ background: '#a4f6a5', color: '#fff' }}
          icon={<BottleIcon />}
        >
          <TimelineJune />
        </LeftTimelineElement>
        <RightTimelineElement
          date="July '18"
          iconStyle={{ background: '#f8a978', color: '#fff' }}
          icon={<NewbornIcon />}
        >
          <TimelineJuly />
        </RightTimelineElement>
        <LeftTimelineElement
          date="August '18"
          iconStyle={{ background: '#a4f6a5', color: '#fff' }}
          icon={<NappyIcon />}
        >
          <TimelineAugust />
        </LeftTimelineElement>
        <RightTimelineElement
          date="September '18"
          iconStyle={{ background: '#f8a978', color: '#fff' }}
          icon={<BottleIcon />}
        >
          <TimelineSept />
        </RightTimelineElement>
        <LeftTimelineElement
          date="October '18"
          iconStyle={{ background: '#a4f6a5', color: '#fff' }}
          icon={<NewbornIcon />}
        >
          <TimelineOct />
        </LeftTimelineElement>
        <RightTimelineElement
          date="November '18"
          iconStyle={{ background: '#f8a978', color: '#fff' }}
          icon={<NappyIcon />}
        >
          <TimelineNov />
        </RightTimelineElement>
        <LeftTimelineElement
          date="December '18"
          iconStyle={{ background: '#a4f6a5', color: '#fff' }}
          icon={<BottleIcon />}
        >
          <TimelineDec />
        </LeftTimelineElement>
        <RightTimelineElement
          date="January '19"
          iconStyle={{ background: '#f8a978', color: '#fff' }}
          icon={<NewbornIcon />}
        >
          <TimelineJan />
        </RightTimelineElement>
        <LeftTimelineElement
          date="February '19"
          iconStyle={{ background: '#a4f6a5', color: '#fff' }}
          icon={<NappyIcon />}
        >
          <TimelineFeb />
        </LeftTimelineElement>
        <RightTimelineElement
          date="March '19"
          iconStyle={{ background: '#f8a978', color: '#fff' }}
          icon={<BottleIcon />}
        >
          <TimelineMarch />
        </RightTimelineElement>

        <BlankTimelineElement
          iconStyle={{ background: '#8ed6ff', color: '#fff' }}
          icon={<PacifierIcon />}
        />
      </Timeline>
    </>
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

    transition: filter 0.2s ease-in-out;

    &:hover {
      cursor: pointer !important;
      filter: brightness(120%);
    }
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

    .vertical-timeline-element-date {
      font-family: 'Como', sans-serif;
    }
  }

  .vertical-timeline-element-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      transform: scale(0.6);
      //max-height: 45px;
      //width: 40px !important;
      height: auto !important;
      width: auto !important;
      //height: 40px !important;
      top: auto;
      left: auto;
      margin: 0;
      
      @media (min-width: 1024px) {
        transform: scale(1);
      }
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
        border-right-color: transparent !important;
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
        border-right-color: #ffefe0 !important;
        border-left-color: transparent !important;
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
