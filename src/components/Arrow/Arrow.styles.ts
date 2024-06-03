import styled from 'styled-components';

const setRotation = (direction: string) => {
  switch (direction) {
    case 'up':
      return '-90deg';
    case 'down':
      return '90deg';
    case 'left':
      return '180deg';
    case 'right':
      return '0deg';
    default:
      return '0deg';
  }
};

export const StyledArrow = styled.img<{
  $direction: string;
}>`
  transform: rotate(${({ $direction }) => setRotation($direction)});
`;
