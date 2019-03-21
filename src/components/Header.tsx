import React from 'react';
import styled from 'styled-components';
// import Baby from '../assets/icons/babys-room.svg';

const Header = () => (
  <HeaderWrapper>
    {/*<img src={Baby} alt="baby" />*/}
    <h1 className="first">harper</h1>
    <h1 className="last">ebel</h1>
    {/*<img src={Baby} alt="baby" />*/}
  </HeaderWrapper>
);

export default Header;

const HeaderWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  h1 {
    font-weight: normal;

    &.first {
      font-size: 2.6rem;
      margin-top: -1rem;
      margin-right: -2rem;
      letter-spacing: 4px;
      font-weight: 300;
    }

    &.last {
      font-family: 'PilGi', cursive;
      font-size: 6.4rem;
      opacity: 0.3;
      margin-left: -2rem;
      margin-top: -2rem;
    }
  }
  
  @media (min-width: 1024px) {
    margin: 4rem 0 3rem 0;
    
    h1 {
      &.first {
        font-size: 4rem;
      margin-top: -1rem;
      margin-right: -3rem;
      letter-spacing: 4px;
      font-weight: 300;
      }
      
      &.last {
        font-family: 'PilGi', cursive;
      font-size: 10rem;
      opacity: 0.3;
      margin-left: -3rem;
      margin-top: -2rem;
      }
    }
  }
`;
