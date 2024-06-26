import { useEffect, useState } from 'react';

import { colors } from '../../tokens';
import { Jobs } from '../../enums';
import { useDevice } from '../../hooks';

import { Container, Typography, ProgressBar } from '../../components';
import { TypographyLevel } from '../../components/Typography/Typography.types';

import {
  StyledCarouselContainer,
  StyledCarouselItem,
  StyledCarouselTitle,
  StyledButton,
  StyledCarouselContent,
  StyledProgressContainer,
} from './Work.styles';
import { getJobsData } from './utils';

export const Work = () => {
  const { isMobile, isDesktop } = useDevice();

  const jobsList = Object.values(Jobs);

  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number>(0);
  const [next, setNext] = useState<number>(0);
  const [paused, setPaused] = useState(false);

  const carouselLoop = () => {
    if (current === jobsList.length - 1) return setCurrent(0);

    return setCurrent(current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paused ? null : carouselLoop();
    }, 2000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    setPrevious(current - 1);
    setNext(current + 1);
  }, [current]);

  return (
    <Container
      id="work"
      backgroundColor={getJobsData(jobsList[current]).color}
      noPadding
    >
      <StyledCarouselContainer>
        {jobsList.map((job, index) => {
          const { company, date, description } = getJobsData(job);

          return (
            <StyledCarouselItem
              key={index}
              $current={current}
              $active={current === index}
            >
              <StyledCarouselTitle
                $active={current === index}
                onMouseEnter={() => isDesktop && setPaused(true)}
                onMouseLeave={() => isDesktop && setPaused(false)}
              >
                <StyledButton onClick={() => setCurrent(current - 1)}>
                  <Typography
                    level={TypographyLevel.HEADING_LARGE}
                    color={colors.neutral.white}
                  >
                    {getJobsData(jobsList[previous])?.company}
                  </Typography>
                </StyledButton>
                <Typography
                  level={TypographyLevel.HEADING_LARGE}
                  color={colors.neutral.white}
                >
                  {company}
                </Typography>
                <StyledButton onClick={() => setCurrent(current + 1)}>
                  <Typography
                    level={TypographyLevel.HEADING_LARGE}
                    color={colors.neutral.white}
                  >
                    {getJobsData(jobsList[next])?.company}
                  </Typography>
                </StyledButton>
              </StyledCarouselTitle>
              <StyledCarouselContent>
                <Typography
                  level={TypographyLevel.BODY_SMALL}
                  color={colors.neutral.white}
                >
                  {date}
                </Typography>
                <Typography
                  level={TypographyLevel.BODY_SMALL}
                  color={colors.neutral.white}
                >
                  {description}
                </Typography>
              </StyledCarouselContent>
            </StyledCarouselItem>
          );
        })}
        {isMobile && (
          <StyledProgressContainer>
            <ProgressBar numberOfItems={jobsList.length} activeItem={current} />
          </StyledProgressContainer>
        )}
      </StyledCarouselContainer>
    </Container>
  );
};
