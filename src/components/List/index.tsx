import { useEffect, useRef } from 'react';

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

export const List = ({
  light = false,
  items,
  onItemClick,
  focusIndex,
}: ListProps) => {
  const targetRef = useRef<HTMLUListElement>(null);

  const inViewport = useInViewport(targetRef, {
    threshold: 0,
  });

  useEffect(() => {
    if (focusIndex === undefined) return;

    targetRef.current
      ?.querySelectorAll<HTMLAnchorElement>('a')
      [focusIndex]?.focus();
  }, [focusIndex]);

  return (
    <StyledList ref={targetRef}>
      {items.map((item, index) => {
        // mailto: links open the mail app; only web links open a new tab.
        const isExternal = /^https?:/.test(item.url);

        return (
          <StyledListItem
            key={index}
            $light={light}
            $index={index}
            $inView={inViewport}
          >
            <StyledLink
              href={item.url}
              $light={light}
              {...(isExternal && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
              onClick={() => onItemClick && onItemClick(item.title)}
            >
              <StyledTitle>
                {item.title}
                {isExternal && (
                  <span className="visually-hidden"> (opens in a new tab)</span>
                )}
              </StyledTitle>
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
        );
      })}
    </StyledList>
  );
};
