import styled from 'styled-components';

export const autoGrid = (minColumnWidth = 250, gridGap = 0) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap,
});

export const Gallery = styled.div`
  ...autoGrid(230, 15)
`;

export const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  //box-shadow: ;
`;
