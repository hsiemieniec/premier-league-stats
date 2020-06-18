import React from 'react';
import Header from './components/layouts/Header';
import { MemoryRouter } from 'react-router-dom';
import Router from './components/routing/Router';

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <MemoryRouter>
        <Container fluid className="main">
          <Header/>
          <Router />  
        </Container>
    </MemoryRouter>
  );
}

export default App;
