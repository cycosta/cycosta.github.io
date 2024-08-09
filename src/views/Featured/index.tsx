import { Container, List } from '../../components';
import { Padding } from '../../components/Container/Container.types';
import { featuredData } from '../../data';
import { StyledWrapper } from './Featured.styles';

export const Featured = () => {
  return (
    <Container id="featured" padding={Padding.FULL}>
      <StyledWrapper>
        <List items={featuredData} />
      </StyledWrapper>
    </Container>
  );
};
