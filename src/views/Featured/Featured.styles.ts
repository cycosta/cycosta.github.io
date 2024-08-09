import styled from 'styled-components';

import { devices, spacing } from '../../tokens';

export const StyledWrapper = styled.div`
  margin-top: ${spacing.xsmall};

  @media ${devices.lg} {
    margin-top: ${spacing.medium};
  }
`;
