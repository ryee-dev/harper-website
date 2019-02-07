import * as React from 'react';
import styled from 'styled-components';
import HarperElf1 from '../assets/images/IMG_0012.jpeg';

interface Props {
}

class IndexPage extends React.Component<Props> {
  render() {
    return (
      <PageWrapper>
        <h1>Coming soon..</h1>
        <h3>Our elves are currently hard at work!</h3>
        <img src={HarperElf1} alt="harper-elf-1" draggable={false}/>
      </PageWrapper>
    );
  }
}

export default IndexPage;

const PageWrapper = styled.div`
  //min-height: 80vh;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  img {
    margin-top: 2rem;
    //max-width: 600px;
    max-height: 600px;
    box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
    cursor: pointer;
  
    &:active {
      box-shadow: 0 0 80px 20px rgba(0, 0, 0, 0.4);
      transform: scale(0.95) rotate(3deg);
    }
  }
  
  h1, h2, h3 {
    font-family: Montserrat, sans-serif;
  }
`;
