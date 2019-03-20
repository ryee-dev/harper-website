import React from 'react';
import styled from 'styled-components';
import Baby from '../assets/icons/icons8-babys-room.svg';

const Header = () => (
  <HeaderWrapper>
    <img src={Baby} alt="baby" />
    <h1>hi, i'm harper</h1>
    <img src={Baby} alt="baby" />
  </HeaderWrapper>
);

export default Header;

const HeaderWrapper = styled.div`
  //font-family: 'Montserrat', sans-serif;
  //margin: 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 80px;
    margin: 0 2rem;
  }
`;
