import * as React from 'react';
import styled from 'styled-components';
import HarperTimeline from '../components/Timeline';
import Header from '../components/Header';
import JumpToAge from '../components/JumpToAge';
import Particles from 'react-particles-js';

interface Props {}

class IndexPage extends React.Component<Props> {
  render() {
    return (
      <PageWrapper>
        <Particles
          className="bubbles"
          params={{
            particles: {
              number: {
                value: 265,
                density: {
                  enable: false,
                  value_area: 1603.4120608655228,
                },
              },
              color: {
                value: '#ffb3ed',
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000',
                },
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 36.076771369474265,
                random: true,
                anim: {
                  enable: true,
                  speed: 4.872463273808071,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 500,
                color: '#ffffff',
                opacity: 0.4,
                width: 2,
              },
              move: {
                enable: true,
                speed: 2,
                direction: 'top',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: 'window',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
                onclick: {
                  enable: false,
                  mode: 'bubble',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 0.5,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 4,
                  duration: 0.3,
                  opacity: 1,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <Header />
        {/*<JumpToAge />*/}
        <HarperTimeline />
      </PageWrapper>
    );
  }
}

export default IndexPage;

const PageWrapper = styled.div`
  .vertical-timeline {
    margin-top: 0;
  }
  padding: 2rem 4rem;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
  font-family: graphie, sans-serif;

  div.bubbles {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 0;

    canvas {
      height: 100%;
      width: 100%;
    }
  }

  h1 {
    margin: 0;
  }

  @media (max-width: 500px) {
    padding: 2rem 1rem;

    h1 {
      font-size: 1.6rem;
    }

    h3 {
      text-align: center;
      font-size: 1rem;
    }

    img {
      max-width: 300px;
    }
  }
`;
