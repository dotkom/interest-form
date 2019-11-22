import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import Form from './components/Form';

const Main = styled.main`
  display: flex;
  flex-direction:column;
  width: 100%;
`

const App: React.FC = () => {
  return (
    <div className="App">
      <Main>
        <Header/>
        <Form/>
      </Main>
    </div>
  );
}

export default App;
