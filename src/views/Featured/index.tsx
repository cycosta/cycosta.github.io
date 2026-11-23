import { useState } from 'react';

import { Button, Container, List } from '../../components';
import {
  ButtonSize,
  ButtonVariant,
} from '../../components/Button/Button.types';
import { Padding } from '../../components/Container/Container.types';

import { featuredData } from '../../data';
import { useDevice } from '../../hooks';

import { StyledWrapper, StyledBottomWrapper } from './Featured.styles';

const PAGE_SIZE = 5;

export const Featured = () => {
  const { isMobile } = useDevice();

  const [visibleListCount, setVisibleListCount] = useState(PAGE_SIZE);
  const visibleList = featuredData.slice(0, visibleListCount);

  const handleLoadMore = () => {
    setVisibleListCount((prevCount) => prevCount + PAGE_SIZE);
  };

  return (
    <Container id="featured" padding={Padding.FULL}>
      <StyledWrapper>
        <List items={visibleList} />
      </StyledWrapper>
      {visibleList.length !== featuredData.length && (
        <StyledBottomWrapper>
          <Button
            variant={ButtonVariant.SECONDARY}
            size={isMobile ? ButtonSize.SMALL : ButtonSize.LARGE}
            onClick={() => handleLoadMore()}
            fullWidth
          >
            Load more
          </Button>
        </StyledBottomWrapper>
      )}
    </Container>
  );
};
