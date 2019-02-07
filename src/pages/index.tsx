import * as React from 'react';
import styled from 'styled-components';
// import HarperElf1 from '../assets/images/IMG_0012.jpeg';
import HarperMasonry from '../components/HarperMasonry';

interface Props {}

class IndexPage extends React.Component<Props> {
  render() {
    return (
      <PageWrapper>
        <h1>Coming soon..</h1>
        <h3>Our elves are currently hard at work!</h3>
        {/*<img src={HarperElf1} alt="harper-elf-1" draggable={false} />*/}
        <HarperMasonry />
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

  img {
    //margin-top: 2rem;
    margin: 1rem;
    //height: 70%;
    //max-width: 600px;
    //max-height: 60%;
    //box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.3);
    //transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
    //cursor: pointer;
    //
    //&:active {
    //  box-shadow: 0 0 80px 20px rgba(0, 0, 0, 0.4);
    //  transform: scale(0.95) rotate(3deg);
    //}
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
