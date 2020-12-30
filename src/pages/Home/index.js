import React from 'react';

import { Container, Content } from './styles';

function Home() {
  return (
    <Container>
      <Content>
        <h1>
          <span>Gabriel Knoxx</span>
          <span>Front End</span>
          <span>Developer</span>
        </h1>
        <button type="button">Contrate</button>
      </Content>
    </Container>
  );
}

export default Home;