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

export const Featured = () => {
  const { isMobile } = useDevice();

  const [visibleList, setVisibleList] = useState(featuredData.slice(0, 5));
  const [visibleListCount, setVisibleListCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleListCount((prevCount) => prevCount + 5);
    setVisibleList(featuredData.slice(0, visibleListCount + 5));
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
