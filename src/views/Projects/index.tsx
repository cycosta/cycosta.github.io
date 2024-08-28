import { useState } from 'react';

import { Container } from '../../components';
import { Padding } from '../../components/Container/Container.types';

import { projectsData } from '../../data';
import { useDevice } from '../../hooks';

import {
  StyledGalleryContainer,
  StyledGalleryItem,
  StyledGalleryImage,
} from './Projects.styles';

export const Projects = () => {
  const { isLargeDesktop } = useDevice();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + projectsData.length) % projectsData.length,
    );
  };

  const handleOnClick = (index: number) => {
    const nextNumber = isLargeDesktop ? 2 : 1;

    if (index >= currentIndex + nextNumber) {
      handleNext();
    } else if (index < currentIndex) {
      handlePrev();
    }

    return null;
  };

  return (
    <Container id="projects" padding={Padding.VERTICAL}>
      <StyledGalleryContainer>
        {projectsData.map((project, index) => (
          <StyledGalleryItem
            to={project.url}
            target="_blank"
            key={index}
            onMouseOver={() => handleOnClick(index)}
            $index={index}
            $current={currentIndex}
          >
            <StyledGalleryImage src={project.src} autoPlay muted loop />
          </StyledGalleryItem>
        ))}
      </StyledGalleryContainer>
    </Container>
  );
};
