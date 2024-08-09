import { useRef } from 'react';

import { Icon } from '../Icon';

import { ListProps } from './List.types';
import {
  StyledList,
  StyledListItem,
  StyledLink,
  StyledTitle,
} from './List.styles';
import { IconType } from '../Icon/Icon.types';
import { colors } from '../../tokens';
import { useInViewport } from '../../hooks';

export const List = ({ light = false, items }: ListProps) => {
  const targetRef = useRef(null);

  const inViewport = useInViewport(targetRef, {
    threshold: 0,
  });

  return (
    <StyledList ref={targetRef}>
      {items.map((item, index) => (
        <StyledListItem
          key={index}
          $light={light}
          $index={index}
          $inView={inViewport}
        >
          <StyledLink href={item.url} $light={light} target="_blank">
            <StyledTitle>{item.title}</StyledTitle>
            <Icon
              type={IconType.ARROW}
              color={
                light ? colors.neutral.offWhite : colors.primary.green.dark
              }
              width="16"
              height="12"
            />
          </StyledLink>
        </StyledListItem>
      ))}
    </StyledList>
  );
};
