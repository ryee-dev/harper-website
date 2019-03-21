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
  //font-family: 'Montserrat', sans-serif;
  margin: 4rem 0 3rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  h1 {
    font-weight: normal;

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

  img {
    max-height: 80px;
    margin: 0 2rem;
  }

  span {
    font-family: 'PilGi', cursive;
    font-size: 3rem;
    opacity: 0.4;
    margin-left: -2rem;
    margin-top: -1rem;
  }
`;
