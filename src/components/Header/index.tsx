import { useEffect, useRef, useState } from 'react';

import { Icon, Logo, Typography } from '../../components';
import { IconType } from '../Icon/Icon.types';
import { TypographyLevel } from '../Typography/Typography.types';

import { colors, devices } from '../../tokens';
import { useMotion, useTheme, useNavigation } from '../../context';
import { useDevice, useMediaQuery } from '../../hooks';

import {
  StyledHeader,
  StyledToggle,
  StyledMenu,
  StyledNav,
  StyledCloseButton,
  StyledList,
  StyledListItem,
  StyledLink,
  StyledMotionToggle,
} from './Header.styles';
import { ICON_WIDTH, ICON_HEIGHT, listItems } from './constants';

const MENU_ID = 'site-menu';

const FOCUSABLE = 'a[href], button:not([disabled])';

export const Header = () => {
  const { theme } = useTheme();
  const { navigationHash, setNavigationHash } = useNavigation();
  const { motionPaused, setMotionPaused } = useMotion();

  const { isMobile } = useDevice();
  // Matches the breakpoint where the menu turns into an inline nav bar.
  const isMenuInline = useMediaQuery(devices.lg);

  const [light, setLight] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const isMenuHidden = !isMenuInline && !navVisible;

  const currentSectionItem = listItems.find(
    (item) => item.id === navigationHash,
  );

  const openMenu = () => setNavVisible(true);

  const closeMenu = ({ restoreFocus = true } = {}) => {
    setNavVisible(false);
    if (restoreFocus) toggleRef.current?.focus();
  };

  const handleItemClick = (id: string) => {
    setNavigationHash(id);
    // Focus follows the link to its section, so don't pull it back.
    closeMenu({ restoreFocus: false });
  };

  // Keep keyboard focus inside the open overlay menu; Escape closes it.
  const handleMenuKeyDown = (event: React.KeyboardEvent) => {
    if (isMenuInline || !navVisible) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== 'Tab' || !menuRef.current) return;

    const focusable = menuRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  useEffect(() => {
    if (navVisible && !isMenuInline) closeRef.current?.focus();
  }, [navVisible, isMenuInline]);

  useEffect(() => {
    const url = navigationHash
      ? `#${navigationHash}`
      : window.location.pathname + window.location.search;

    history.replaceState(null, '', url);
  }, [navigationHash]);

  useEffect(() => {
    theme === 'dark' ? setLight(true) : setLight(false);
  }, [theme]);

  const textColor = light ? colors.neutral.white : colors.primary.green.darkest;

  return (
    <StyledHeader>
      <StyledToggle
        ref={toggleRef}
        type="button"
        aria-expanded={navVisible}
        aria-controls={MENU_ID}
        aria-label={
          currentSectionItem
            ? `Menu (current section: ${currentSectionItem.label})`
            : 'Menu'
        }
        onClick={openMenu}
        $light={light}
      >
        <Logo light={light} />
        <Typography
          as="span"
          level={TypographyLevel.BODY_SMALL}
          color={textColor}
        >
          {currentSectionItem?.label}
        </Typography>
      </StyledToggle>
      <StyledMenu
        id={MENU_ID}
        ref={menuRef}
        $visible={navVisible}
        onKeyDown={handleMenuKeyDown}
        // Hidden overlay menu must not be reachable by keyboard or AT.
        // (React 18 needs the raw attribute.)
        {...(isMenuHidden ? { inert: '' } : {})}
      >
        <StyledNav aria-label="Sections">
          <StyledCloseButton
            ref={closeRef}
            type="button"
            aria-label="Close menu"
            onClick={() => closeMenu()}
            $visible={navVisible}
          />
          <StyledList>
            {listItems.map((item, index) => {
              const isCurrent = navigationHash === item.id;

              return (
                <StyledListItem key={item.id} $index={index}>
                  <StyledLink
                    href={`#${item.id}`}
                    $light={light}
                    onClick={() => handleItemClick(item.id)}
                    className={isCurrent ? 'active' : ''}
                    aria-current={isCurrent ? 'true' : undefined}
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
              );
            })}
          </StyledList>
        </StyledNav>
      </StyledMenu>
      <StyledMotionToggle
        type="button"
        onClick={() => setMotionPaused(!motionPaused)}
        $light={light}
      >
        {motionPaused ? 'Play motion' : 'Pause motion'}
      </StyledMotionToggle>
    </StyledHeader>
  );
};
