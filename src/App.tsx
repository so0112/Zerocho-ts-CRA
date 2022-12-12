import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GuGuDan from './components/GuGuDan';
import Side from './components/layouts/Side';
import NumberBaseball from './components/NumberBaseball';
import GlobalStyle from './styles/GlobalStyle';
import WordRelay from './components/WordRelay';
import ResponseCheck from './components/ResponseCheck';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Side />
        <RouteContainer>
          <Routes>
            <Route path="/gugudan" element={<GuGuDan />} />
            <Route path="/wordrelay" element={<WordRelay />} />
            <Route path="/numberbaseball" element={<NumberBaseball />} />
            <Route path="/responseCheck" element={<ResponseCheck />} />
          </Routes>
        </RouteContainer>
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
`;

const RouteContainer = styled.div`
  background-color: #cdd0c9;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
export default App;
