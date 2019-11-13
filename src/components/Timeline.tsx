import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

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
  // eslint-disable-next-line @typescript-eslint/camelcase,max-len
  April_18, April_19, August_18, August_19, December_18, February_19, January_19, July_18, July_19, June_18, June_19, March_19, May_18, May_19, November_18, October_18, October_19, September_18, September_19,
} from './timeline-events';

const HarperTimeline: React.FC<{}> = () => {
  return (
    <>
      <Timeline>
        <LeftTimelineElement
          date="April '18"
          iconStyle={{ background: '#f1eb9a', color: '#fff' }}
          icon={<NewbornIcon />}
        >
          <Element name="April18">
            <April_18 />
          </Element>
        </LeftTimelineElement>
        <RightTimelineElement
          date="May '18"
          iconStyle={{ background: '#f8a978', color: '#fff' }}
          icon={<NappyIcon />}
        >
          <Element name="May18">
            <May_18 />
          </Element>
        </RightTimelineElement>
        <LeftTimelineElement
          date="June '18"
          iconStyle={{ background: '#a4f6a5', color: '#fff' }}
          icon={<BottleIcon />}
        >
          <Element name="June18">
            <June_18 />
          </Element>
        </LeftTimelineElement>
        <RightTimelineElement
          date="July '18"
          iconStyle={{ background: '#f8a978', color: '#fff' }}
          icon={<NewbornIcon />}
        >
          <Element name="July18">
            <July_18 />
          </Element>
        </RightTimelineElement>
        <LeftTimelineElement
          date="August '18"
          iconStyle={{ background: '#a4f6a5', color: '#fff' }}
          icon={<NappyIcon />}
        >
          <Element name="August18">
            <August_18 />
          </Element>
        </LeftTimelineElement>
        <RightTimelineElement
          date="September '18"
          iconStyle={{ background: '#f8a978', color: '#fff' }}
          icon={<BottleIcon />}
        >
          <Element name="September18">
            <September_18 />
          </Element>
        </RightTimelineElement>
        <LeftTimelineElement
          date="October '18"
          iconStyle={{ background: '#a4f6a5', color: '#fff' }}
          icon={<NewbornIcon />}
        >
          <Element name="October18">
            <October_18 />
          </Element>
        </LeftTimelineElement>
        <RightTimelineElement
          date="November '18"
          iconStyle={{ background: '#f8a978', color: '#fff' }}
          icon={<NappyIcon />}
        >
          <Element name="November18">
            <November_18 />
          </Element>
        </RightTimelineElement>
        <LeftTimelineElement
          date="December '18"
          iconStyle={{ background: '#a4f6a5', color: '#fff' }}
          icon={<BottleIcon />}
        >
          <Element name="December18">
            <December_18 />
          </Element>
        </LeftTimelineElement>
        <RightTimelineElement
          date="January '19"
          iconStyle={{ background: '#f8a978', color: '#fff' }}
          icon={<NewbornIcon />}
        >
          <Element name="January19">
            <January_19 />
          </Element>
        </RightTimelineElement>
        <LeftTimelineElement
          date="February '19"
          iconStyle={{ background: '#a4f6a5', color: '#fff' }}
          icon={<NappyIcon />}
        >
          <Element name="February19">
            <February_19 />
          </Element>
        </LeftTimelineElement>
        <RightTimelineElement
          date="March '19"
          iconStyle={{ background: '#f8a978', color: '#fff' }}
          icon={<BottleIcon />}
        >
          <Element name="March19">
            <March_19 />
          </Element>
        </RightTimelineElement>

        <LeftTimelineElement
          date="April '19"
          iconStyle={{ background: '#a4f6a5', color: '#fff' }}
          icon={<NappyIcon />}
        >
          <Element name="April19">
            <April_19 />
          </Element>
        </LeftTimelineElement>
        <RightTimelineElement
          date="May '19"
          iconStyle={{ background: '#f8a978', color: '#fff' }}
          icon={<BottleIcon />}
        >
          <Element name="May19">
            <May_19 />
          </Element>
        </RightTimelineElement>
        <LeftTimelineElement
          date="June '19"
          iconStyle={{ background: '#a4f6a5', color: '#fff' }}
          icon={<NappyIcon />}
        >
          <Element name="June19">
            <June_19 />
          </Element>
        </LeftTimelineElement>
        <RightTimelineElement
          date="July '19"
          iconStyle={{ background: '#f8a978', color: '#fff' }}
          icon={<BottleIcon />}
        >
          <Element name="July19">
            <July_19 />
          </Element>
        </RightTimelineElement>
        <LeftTimelineElement
          date="August '19"
          iconStyle={{ background: '#a4f6a5', color: '#fff' }}
          icon={<NappyIcon />}
        >
          <Element name="August19">
            <August_19 />
          </Element>
        </LeftTimelineElement>
        <RightTimelineElement
          date="September '19"
          iconStyle={{ background: '#f8a978', color: '#fff' }}
          icon={<BottleIcon />}
        >
          <Element name="Sept19">
            <September_19 />
          </Element>
        </RightTimelineElement>
        <LeftTimelineElement
          date="October '19"
          iconStyle={{ background: '#a4f6a5', color: '#fff' }}
          icon={<NappyIcon />}
        >
          <Element name="Oct19">
            <October_19 />
          </Element>
        </LeftTimelineElement>
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

    transition: filter 0.1s ease-in-out;

    &:hover {
  // cursor: pointer !important;
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
  // max-height: 400px !important;
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
  // max-height: 45px;
  // width: 40px !important;
      height: auto !important;
      width: auto !important;
  // height: 40px !important;
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
  // border-right-color: #f3f8ff !important;

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

  // div {
  //  max-height: 500px;
  //  margin-left: -5px;
  // }
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
  overflowY: 'auto',
  overflowX: 'hidden',
};
