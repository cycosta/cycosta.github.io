import { useState } from 'react';

import { Logo, Button, Typography } from '../../components';
import { ButtonSize, ButtonVariant } from '../Button/Button.types';
import { TypographyLevel } from '../Typography/Typography.types';

import { useDevice } from '../../hooks';

import { colors } from '../../tokens';

import { HeaderProps } from './Header.types';
import {
  StyledHeader,
  StyledIntro,
  StyledMenu,
  StyledNav,
  StyledToggle,
  StyledList,
  StyledListItem,
  StyledLink,
} from './Header.styles';

export const Header = ({ light = false }: HeaderProps) => {
  const { isDesktop } = useDevice();

  const listItems = [
    { text: "Hi, I'm", anchor: '#about' },
    { text: 'Work', anchor: '#work' },
    { text: 'Side Projects', anchor: '#projects' },
    { text: 'People are saying', anchor: '#featured' },
    { text: "Let's talk", anchor: '#contact' },
  ];

  const activeItem = listItems[0].text;

  const [navVisible, setNavVisible] = useState(false);

  return (
    <StyledHeader>
      <StyledIntro>
        <Logo onClick={() => setNavVisible(true)} light={light} />
        <Typography
          level={TypographyLevel.BODY_SMALL}
          color={light ? colors.neutral.white : colors.primary.green.darkest}
        >
          {activeItem}
        </Typography>
      </StyledIntro>
      <StyledMenu $visible={navVisible}>
        <StyledNav>
          <StyledToggle
            onClick={() => setNavVisible(false)}
            $visible={navVisible}
          />
          <StyledList>
            {listItems.map((item, index) => (
              <StyledListItem key={index}>
                <StyledLink href={item.anchor} $light={light}>
                  {item.text}
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