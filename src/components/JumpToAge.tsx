import React from 'react';
import styled from 'styled-components';
import {
  Zero,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
} from '../assets/icons';

const JumpToAge = () => {
  return (
    <Container>
      <div className="rowA">
        <Zero />
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
      </div>
      <div className="rowB">
        <Six />
        <Seven />
        <Eight />
        <Nine />
        <Ten />
        <Eleven />
      </div>
    </Container>
  );
};

export default JumpToAge;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  z-index: 1;
  padding: 1rem 0;
  margin-bottom: 2rem;
  //border: 1px solid #ffdfd3;
  //box-shadow: inset 0 0 4px 1px rgba(0, 0, 0, 0.4);
  //box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.4);
  //background-color: rgba(255, 163, 202, 0.4);
  //border-radius: 2rem;

  svg {
    transition: transform 0.3s ease-in-out;
    z-index: 1;

    &:hover {
      transform: scale(1.1) rotate(15deg);
      cursor: pointer;
    }
  }

  .rowA {
    padding: 0.6rem 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    h4 {
      margin: 0;
    }
  }

  .rowB {
    padding: 0.6rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;
