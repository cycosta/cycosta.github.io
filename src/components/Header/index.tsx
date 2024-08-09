import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Icon, Logo, Typography } from '../../components';
import { IconType } from '../Icon/Icon.types';
import { TypographyLevel } from '../Typography/Typography.types';

import { colors } from '../../tokens';
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

export const Header = () => {
  const { isMobile } = useDevice();

  const listItems: { label: string; anchor: string; dark: boolean }[] = [
    { label: "Hi, I'm", anchor: '#', dark: false },
    { label: 'Work', anchor: '#work', dark: true },
    { label: 'Side Projects', anchor: '#projects', dark: false },
    { label: 'People are saying', anchor: '#featured', dark: false },
    { label: "Let's talk", anchor: '#contact', dark: true },
  ];

  const location = useLocation();

  const currentSection = listItems.find(
    (item) => item.anchor === location.hash,
  );

  const [navVisible, setNavVisible] = useState(false);

  const light = currentSection?.dark;

  return (
    <StyledHeader>
      <StyledToggle>
        <Logo onClick={() => setNavVisible(true)} light={light} />
        <Typography
          level={TypographyLevel.BODY_SMALL}
          color={light ? colors.neutral.white : colors.primary.green.darkest}
        >
          {currentSection?.label}
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
                  to={item.anchor}
                  smooth
                  $light={light}
                  onClick={() => setNavVisible(false)}
                  className={
                    currentSection?.label === item.label ? 'active' : ''
                  }
                >
                  {item.label}
                  {isMobile && (
                    <Icon
                      type={IconType.ARROW}
                      color={colors.primary.green.dark}
                      width="16"
                      height="12"
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
