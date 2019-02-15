import * as React from 'react';
import styled from 'styled-components';
import HarperTimeline from '../components/Timeline';
import Header from '../components/Header';
// import Particles from 'react-particles-js';

interface Props {}

class IndexPage extends React.Component<Props> {
  render() {
    return (
      <PageWrapper>
        <Header />
        <HarperTimeline />
      </PageWrapper>
    );
  }
}

export default IndexPage;

const PageWrapper = styled.div`
  padding: 2rem 4rem;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin: 0;
  }

  @media (max-width: 500px) {
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
