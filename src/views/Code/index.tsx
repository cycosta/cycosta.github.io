import { useState } from 'react';

import { Container } from '../../components';
import { Padding } from '../../components/Container/Container.types';

import { codeData } from '../../data';
import { useDevice } from '../../hooks';

import {
  StyledGalleryContainer,
  StyledGalleryItem,
  StyledGalleryVideo,
} from './Code.styles';

export const Code = () => {
  const { isLargeDesktop } = useDevice();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % codeData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + codeData.length) % codeData.length,
    );
  };

  const handleOnHover = (index: number) => {
    const nextNumber = isLargeDesktop ? 2 : 1;

    if (index >= currentIndex + nextNumber) {
      handleNext();
    } else if (index < currentIndex) {
      handlePrev();
    }

    return null;
  };

  return (
    <Container id="code" labelledBy="code-heading" padding={Padding.VERTICAL}>
      <h2 id="code-heading" className="visually-hidden">
        Code snippets
      </h2>
      <StyledGalleryContainer>
        {codeData.map((code, index) => (
          <StyledGalleryItem
            href={code.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            onMouseOver={() => handleOnHover(index)}
            // Slide the desktop gallery so keyboard focus stays in view.
            onFocus={() => handleOnHover(index)}
            $index={index}
            $current={currentIndex}
          >
            <StyledGalleryVideo src={code.src} aria-hidden="true" />
            <span className="visually-hidden">
              {code.title}
              {code.url.includes('codepen.io') ? ' on CodePen' : ' demo'}
              {' (opens in a new tab)'}
            </span>
          </StyledGalleryItem>
        ))}
      </StyledGalleryContainer>
    </Container>
  );
};
