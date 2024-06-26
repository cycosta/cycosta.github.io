import { Container, List } from '../../components';
import { featuredData } from '../../data';

export const Featured = () => {
  return (
    <Container id="featured">
      <List items={featuredData} />
    </Container>
  );
};
