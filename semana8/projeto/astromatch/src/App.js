import React from 'react';
import styled from 'styled-components';
import Tela from './Components/TelaInicial/Tela';
import Matches from './Components//TelaMatches/Matches';
import 'nes.css/css/nes.min.css';
import { useState } from 'react';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [pagina, setPagina] = useState('home');
  const changePage = () => {
    if (pagina === 'home') {
      setPagina('matches');
    } else if (pagina === 'matches') {
      setPagina('home');
    }
    console.log(pagina);
  };

  const renderPage = () => {
    switch (pagina) {
      case 'home':
        return <Tela />;
      case 'matches':
        return <Matches />;
      default:
        return <div></div>;
    }
  };
  return (
    <AppContainer>
      {renderPage()}
      <button onClick={changePage} class="nes-btn">MUDAR DE PÁGINA</button>
    </AppContainer>
  );
};

export default App;
