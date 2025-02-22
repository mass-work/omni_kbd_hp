import React from 'react';
import styled from 'styled-components';

export default function About() {
  return (
    <Main>
      <h1>About</h1>
      <p>This is the About page of Omni KBD.</p>
    </Main>
  );
}

const Main = styled.main`
  padding: 2rem;
`;