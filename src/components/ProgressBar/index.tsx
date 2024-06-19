import { StyledProgress, StyledProgressBar } from './ProgressBar.styles';
import { ProgressBarProps } from './ProgressBar.types';

export const ProgressBar = ({
  numberOfItems,
  activeItem,
}: ProgressBarProps) => {
  return (
    <StyledProgressBar>
      {Array.from({ length: numberOfItems }, (_, index) => (
        <StyledProgress
          key={index}
          $numberOfItems={numberOfItems}
          $active={index === activeItem}
          $past={index < activeItem}
        />
      ))}
    </StyledProgressBar>
  );
};
