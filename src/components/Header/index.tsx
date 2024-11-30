import { useEffect, useState } from 'react';

import { Icon, Logo, Typography } from '../../components';
import { IconType } from '../Icon/Icon.types';
import { TypographyLevel } from '../Typography/Typography.types';

import { colors } from '../../tokens';
import { useTheme, useNavigation } from '../../context';
import { useDevice } from '../../hooks';

import {
  StyledHeader,
  StyledToggle,
  StyledMenu,
  StyledNav,
  StyledCloseButton,
  StyledList,
  StyledListItem,
  StyledLink,
} from './Header.styles';
import { ICON_WIDTH, ICON_HEIGHT, listItems } from './constants';

export const Header = () => {
  const { theme } = useTheme();
  const { navigationHash, setNavigationHash } = useNavigation();

  const { isMobile } = useDevice();

  const [light, setLight] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const currentSectionItem = listItems.find(
    (item) => item.id === navigationHash,
  );

  const handleItemClick = (id: string) => {
    setNavigationHash(id);
    setNavVisible(false);
  };

  useEffect(() => {
    history.pushState(null, '', `#${navigationHash}`);
  }, [navigationHash]);

  useEffect(() => {
    theme === 'dark' ? setLight(true) : setLight(false);
  }, [theme]);

  return (
    <StyledHeader>
      <StyledToggle>
        <Logo onClick={() => setNavVisible(true)} light={light} />
        <Typography
          level={TypographyLevel.BODY_SMALL}
          color={light ? colors.neutral.white : colors.primary.green.darkest}
        >
          {currentSectionItem?.label}
        </Typography>
      </StyledToggle>
      <StyledMenu $visible={navVisible}>
        <StyledNav>
          <StyledCloseButton
            onClick={() => setNavVisible(false)}
            $visible={navVisible}
          />
          <StyledList>
            {listItems.map((item, index) => (
              <StyledListItem key={index} $index={index}>
                <StyledLink
                  href={`#${item.id}`}
                  $light={light}
                  onClick={() => handleItemClick(item.id)}
                  className={navigationHash === item.id ? 'active' : ''}
                >
                  {item.label}
                  {isMobile && (
                    <Icon
                      type={IconType.ARROW}
                      color={colors.primary.green.dark}
                      width={ICON_WIDTH}
                      height={ICON_HEIGHT}
                    />
                  )}
                </StyledLink>
              </StyledListItem>
            ))}
          </StyledList>
        </StyledNav>
      </StyledMenu>
    </StyledHeader>
  );
};
