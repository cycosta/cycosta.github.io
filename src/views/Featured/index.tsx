import { Container, List } from '../../components';
import { Padding } from '../../components/Container/Container.types';
import { featuredData } from '../../data';

export const Featured = () => {
  return (
    <Container id="featured" padding={Padding.FULL}>
      <List items={featuredData} />
    </Container>
  );
};
