import styled, { css } from 'styled-components';

import { colors, spacing } from '../../tokens';

import { ButtonVariant } from './Button.types';

const renderArrowSvg = (fillColor?: string) =>
  `
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z" fill="${fillColor}"/>
    </svg>
  `;

const getVariantStyles = (variant: ButtonVariant, light: boolean) => {
  const styleMap = {
    primary: `
      background-color: ${light ? colors.primary.green.lightest : colors.primary.green.dark};
      outline-color: ${light ? 'transparent' : colors.primary.green.dark};
      outline-offset: -2px;
      color: ${light ? colors.primary.green.darkest : colors.neutral.offWhite};
  
      &:hover {
        background-color: ${light ? colors.primary.green.light : colors.primary.green.default};
      }
  
      &:active {
        background-color: ${light ? colors.primary.green.lightest : colors.primary.green.darkest};
      }
  
      &:disabled {
        background-color: ${light ? colors.neutral.gray.dark : colors.neutral.gray.default};
        color: ${light ? colors.neutral.gray.default : colors.neutral.gray.dark};
        outline: none;
      }
    `,

    secondary: `
      background-color: transparent;
      outline-color: ${light ? colors.primary.green.lightest : colors.primary.green.dark};
      outline-offset: -2px;
      color: ${light ? colors.primary.green.lightest : colors.primary.green.dark};
  
      &:hover {
        background-color: ${light ? colors.primary.green.lightest : colors.primary.green.dark};
        color: ${light ? colors.primary.green.darkest : colors.neutral.offWhite};
      }
  
      &:active {
        background-color: ${light ? colors.primary.green.light : colors.primary.green.darkest};
      }
  
      &:disabled {
        background-color: transparent;
        outline-color: ${light ? colors.neutral.gray.dark : colors.neutral.gray.default};
        color: ${colors.neutral.gray.default};
      }
    `,

    link: `
      position: relative;
      background-color: transparent;
      outline: none;
      color: ${light ? colors.primary.green.lightest : colors.primary.green.dark};
      margin-right: 40px;
  
      &::before {
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 100%;
        height: 2px;
        content: '';
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.3s ease;
      }
  
      &::after {
        position: absolute;
        top: 50%;
        left: calc(100% + ${spacing.xsmall});
        transform: translateY(-50%);
        content: url('data:image/svg+xml;charset=UTF-8, ${encodeURIComponent(
          light
            ? renderArrowSvg(colors.primary.green.lightest)
            : renderArrowSvg(colors.primary.green.dark),
        )}');
      }
  
      &:hover {
        color: ${light ? colors.primary.green.lightest : colors.primary.green.default};
  
        &::before {
          transform: scaleX(1);
          background-color: ${light ? colors.primary.green.lightest : colors.primary.green.default};
        }
  
        &::after {
          content: url('data:image/svg+xml;charset=UTF-8, ${encodeURIComponent(
            light
              ? renderArrowSvg(colors.neutral.white)
              : renderArrowSvg(colors.primary.green.default),
          )}');
        }
      }
  
      &:active {
        color: ${colors.primary.green.darkest};
  
        &::before {
          background-color: ${colors.primary.green.darkest};
        }
  
        &::after {
          content: url('data:image/svg+xml;charset=UTF-8, ${encodeURIComponent(
            light
              ? renderArrowSvg(colors.primary.green.lightest)
              : renderArrowSvg(colors.primary.green.darkest),
          )}');
        }
      }
  
      &.disabled {
        color: ${colors.neutral.gray.default};
        cursor: not-allowed;
  
        &::before {
          transform: scaleX(0);
        }
  
        &::after {
          content: url('data:image/svg+xml;charset=UTF-8, ${encodeURIComponent(
            light
              ? renderArrowSvg(colors.neutral.gray.default)
              : renderArrowSvg(colors.neutral.gray.default),
          )}');
        }
      }
    `,
  };

  return styleMap[variant];
};

const buttonStyles = (size: string) => css`
  height: ${size === 'large' ? '56px' : '42px'};
  padding: ${size === 'large' ? `0 ${spacing.small}` : `0 ${spacing.xxsmall}`};
  outline: ${size === 'large' ? '2px solid' : '1px solid'};
  border: none;
  border-radius: 60px;
  line-height: ${size === 'large' ? '25px' : spacing.xsmall};
`;

export const StyledButton = styled.div<{
  $variant: ButtonVariant;
  $size: string;
  $light: boolean;
}>`
  font-family: 'FleuronRegular';
  font-size: ${({ $size }) => ($size === 'large' ? '18px' : '14px')};
  transition: all 0.3s ease;
  cursor: pointer;

  ${({ $variant, $size }) => $variant !== 'link' && buttonStyles($size)};
  ${({ $variant, $light }) => getVariantStyles($variant, $light)};

  &:disabled {
    cursor: not-allowed;
  }
`;
