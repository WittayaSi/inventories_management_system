import React from 'react';
import { Container } from 'reactstrap'
 
import Router from './Router'
import Navbar from './components/layouts/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Container style={{marginTop: '1rem'}}>
        <Router />
      </Container>
    </div>
  );
}

export default App;
