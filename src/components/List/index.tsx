import { Button } from '../Button';
import { ButtonVariant } from '../Button/Button.types';
import { useDevice } from '../../hooks';

import { ListProps } from './List.types';
import {
  StyledList,
  StyledListItem,
  StyledLink,
  StyledTitle,
} from './List.styles';

export const List = ({ light = false, items }: ListProps) => {
  const { isDesktop } = useDevice();

  return (
    <StyledList>
      {items.map((item, index) => (
        <StyledListItem key={index}>
          <StyledLink href={item.url} $light={light} target="_blank">
            <StyledTitle>{item.title}</StyledTitle>
            {isDesktop && (
              <Button variant={ButtonVariant.LINK}>Read more</Button>
            )}
          </StyledLink>
        </StyledListItem>
      ))}
    </StyledList>
  );
};
