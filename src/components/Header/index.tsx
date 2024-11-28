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
import { Section } from './Header.types';
import { listItems } from './constants';

export const Header = () => {
  const { isMobile } = useDevice();

  const [currentSection, setCurrentSection] = useState<Section>(listItems[0]);

  const currentSectionItem = listItems.find(
    (item) => item.id === currentSection.id,
  );

  const [navVisible, setNavVisible] = useState(false);

  const light = listItems.find((item) => item.id === currentSection.id)?.dark;

  const handleItemClick = (section: Section) => {
    setCurrentSection(section);
    setNavVisible(false);
  };

  useEffect(() => {
    window.addEventListener('popstate', () => {
      setCurrentSection(
        listItems.find((item) => item.anchor === window.location.hash) ||
          listItems[0],
      );
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
                  onClick={() => handleItemClick(item)}
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
