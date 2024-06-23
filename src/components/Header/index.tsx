import { useEffect, useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

import { Logo, Button, Typography } from '../../components';
import { ButtonSize, ButtonVariant } from '../Button/Button.types';
import { TypographyLevel } from '../Typography/Typography.types';

import { useDevice } from '../../hooks';

import { colors } from '../../tokens';

import { HeaderProps } from './Header.types';
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

export const Header = ({ light = false }: HeaderProps) => {
  const { isDesktop } = useDevice();

  const listItems: { label: string; anchor: string; dark: boolean }[] = [
    { label: "Hi, I'm", anchor: '#about', dark: false },
    { label: 'Work', anchor: '#work', dark: true },
    { label: 'Side Projects', anchor: '#projects', dark: false },
    { label: 'People are saying', anchor: '#featured', dark: false },
    { label: "Let's talk", anchor: '#contact', dark: true },
  ];

  const location = useLocation();

  const [currentSection, setCurrentSection] = useState(listItems[0]);

  useEffect(() => {
    const { hash } = location;

    setCurrentSection(
      listItems.find((item) => item.anchor === hash) || listItems[0],
    );
  }, [location]);

  const [navVisible, setNavVisible] = useState(false);

  const renderLightMode = light || currentSection.dark;

  return (
    <StyledHeader>
      <StyledToggle>
        <Logo onClick={() => setNavVisible(true)} light={renderLightMode} />
        <Typography
          level={TypographyLevel.BODY_SMALL}
          color={
            renderLightMode
              ? colors.neutral.white
              : colors.primary.green.darkest
          }
        >
          {currentSection?.label}
        </Typography>
      </StyledToggle>
      <StyledMenu $visible={navVisible}>
        <BrowserRouter>
          <StyledNav>
            <StyledCloseButton
              onClick={() => setNavVisible(false)}
              $visible={navVisible}
            />
            <StyledList>
              {listItems.map((item, index) => (
                <StyledListItem key={index}>
                  <StyledLink
                    to={item.anchor}
                    smooth
                    $light={renderLightMode}
                    onClick={() => setNavVisible(false)}
                    className={
                      currentSection?.label === item.label ? 'active' : ''
                    }
                  >
                    {item.label}
                  </StyledLink>
                </StyledListItem>
              ))}
            </StyledList>
          </StyledNav>
        </BrowserRouter>
      </StyledMenu>
      <Button
        variant={ButtonVariant.SECONDARY}
        size={isDesktop ? ButtonSize.LARGE : ButtonSize.SMALL}
        light={renderLightMode}
      >
        Contact
      </Button>
    </StyledHeader>
  );
};
