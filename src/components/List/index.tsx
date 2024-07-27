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

export const List = ({ light = false, items }: ListProps) => (
  <StyledList>
    {items.map((item, index) => (
      <StyledListItem key={index} $light={light}>
        <StyledLink href={item.url} $light={light} target="_blank">
          <StyledTitle>{item.title}</StyledTitle>
          <Icon
            type={IconType.ARROW}
            color={light ? colors.neutral.offWhite : colors.primary.green.dark}
            width="16"
            height="12"
          />
        </StyledLink>
      </StyledListItem>
    ))}
  </StyledList>
);
