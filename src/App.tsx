import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import Form from './components/Form';
import { GlobalStyle } from '@dotkomonline/design-system';

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Form />
      </Main>
    </>
  );
};

export default App;
