import styled from 'styled-components';

import { colors } from '../../tokens';

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary.light};
`;
