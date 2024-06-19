import { useEffect, useState } from 'react';

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

  const listItems = [
    { label: "Hi, I'm", anchor: '#about' },
    { label: 'Work', anchor: '#work' },
    { label: 'Side Projects', anchor: '#projects' },
    { label: 'People are saying', anchor: '#featured' },
    { label: "Let's talk", anchor: '#contact' },
  ];

  const [currentSection, setCurrentSection] = useState<string>(
    listItems[0].label,
  );

  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash;

      setCurrentSection(
        listItems.find((item) => item.anchor === hash)?.label ||
          listItems[0].label,
      );
    };

    window.addEventListener('hashchange', handleUrlChange);
  });

  const [navVisible, setNavVisible] = useState(false);

  return (
    <StyledHeader>
      <StyledToggle>
        <Logo onClick={() => setNavVisible(true)} light={light} />
        <Typography
          level={TypographyLevel.BODY_SMALL}
          color={light ? colors.neutral.white : colors.primary.green.darkest}
        >
          {currentSection}
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
              <StyledListItem key={index}>
                <StyledLink
                  href={item.anchor}
                  $light={light}
                  onClick={() => setNavVisible(false)}
                >
                  {item.label}
                </StyledLink>
              </StyledListItem>
            ))}
          </StyledList>
        </StyledNav>
      </StyledMenu>
      <Button
        variant={ButtonVariant.SECONDARY}
        size={isDesktop ? ButtonSize.LARGE : ButtonSize.SMALL}
        light={light}
      >
        Contact
      </Button>
    </StyledHeader>
  );
};
