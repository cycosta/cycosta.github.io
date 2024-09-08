import { useEffect, useState } from 'react';

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
import { HeaderProps } from './Header.types';

export const Header = ({ currentSection, setCurrentSection }: HeaderProps) => {
  const { isMobile } = useDevice();

  const listItems: { label: string; anchor: string; dark: boolean }[] = [
    { label: "Hi, I'm", anchor: '#', dark: false },
    { label: 'Work', anchor: '#work', dark: true },
    { label: 'Side Projects', anchor: '#projects', dark: false },
    { label: 'People are saying', anchor: '#featured', dark: false },
    { label: "Let's talk", anchor: '#contact', dark: true },
  ];

  const currentSectionItem = listItems.find(
    (item) => item.anchor === currentSection,
  );

  const [navVisible, setNavVisible] = useState(false);

  const light = listItems.find((item) => item.anchor === currentSection)?.dark;

  const handleItemClick = (anchor: string) => {
    setCurrentSection(anchor);
    setNavVisible(false);
  };

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setCurrentSection(window.location.hash);
    });
  }, [window]);

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
                  href={item.anchor}
                  $light={light}
                  onClick={() => handleItemClick(item.anchor)}
                  className={
                    currentSectionItem?.anchor === item.anchor ? 'active' : ''
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
