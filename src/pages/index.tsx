import React from 'react';
import styled from 'styled-components';
import useWindowSize from '@rooks/use-window-size';
import HarperTimeline from '../components/Timeline';
import Header from '../components/Header';
import JumpToAge from '../components/JumpToAge';
import BgParticles from '../components/BgParticles';

// interface Props {}

const IndexPage = () => {
  const { innerWidth } = useWindowSize();

  return (
    <PageWrapper>
      <BgParticles />
      <Header />
      {innerWidth > 1024 && <JumpToAge />}
      <HarperTimeline />
    </PageWrapper>
  );
};

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
