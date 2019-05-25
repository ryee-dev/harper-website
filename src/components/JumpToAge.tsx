import React from 'react';
import styled from 'styled-components';
import { Link as LinkBase } from 'react-scroll';
import posed from 'react-pose';
// import { ScrollTo } from 'react-scroll-to';
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

const posedProps = {
  draggable: true,
};

const JumpToAge: React.FC<{}> = () => {
  return (
    <PosedContainer>
      <div className="rowA">
        <Link to="April18" smooth={true} duration={500} offset={-280}>
          <Zero />
        </Link>
        <Link to="May18" smooth={true} duration={500} offset={-280}>
          <One />
        </Link>
        <Link to="June18" smooth={true} duration={500} offset={-280}>
          <Two />
        </Link>
        <Link to="July18" smooth={true} duration={500} offset={-280}>
          <Three />
        </Link>
        <Link to="August18" smooth={true} duration={500} offset={-280}>
          <Four />
        </Link>
        <Link to="September18" smooth={true} duration={500} offset={-280}>
          <Five />
        </Link>
      </div>
      <div className="rowB">
        <Link to="October18" smooth={true} duration={500} offset={-280}>
          <Six />
        </Link>
        <Link to="November18" smooth={true} duration={500} offset={-280}>
          <Seven />
        </Link>
        <Link to="December18" smooth={true} duration={500} offset={-280}>
          <Eight />
        </Link>
        <Link to="January19" smooth={true} duration={500} offset={-280}>
          <Nine />
        </Link>
        <Link to="February19" smooth={true} duration={500} offset={-280}>
          <Ten />
        </Link>
        <Link to="March19" smooth={true} duration={500} offset={-280}>
          <Eleven />
        </Link>
      </div>
    </PosedContainer>
  );
};

export default JumpToAge;

const Container = styled.div`
  position: fixed;
  left: 5vw;
  top: 30%;
  //margin-left:
  display: flex;
  align-items: center;
  justify-content: center;
  //flex-direction: column;
  //width: 60%;
  z-index: 5;
  opacity: 0.25;
  //margin: -2rem 0 2rem 0;
  //margin-bottom: 2rem;
  //border: 1px solid #ffdfd3;
  //box-shadow: inset 0 0 4px 1px rgba(0, 0, 0, 0.4);
  //box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.4);
  //background-color: rgba(255, 163, 202, 0.4);
  //border-radius: 2rem;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }

  svg {
    transition: transform 0.3s ease-in-out;
    z-index: 1;

    &:hover {
      transform: scale(1.1) rotate(15deg);
      cursor: pointer;
    }
  }

  .rowA {
    padding: 0.6rem 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    //width: 100%;

    h4 {
      margin: 0;
    }
  }

  .rowB {
    padding: 0.6rem 0.2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
  }
`;

const Link = styled(LinkBase)`
  padding: 0.2rem 0;
`;

const PosedContainer = posed(Container)(posedProps);
