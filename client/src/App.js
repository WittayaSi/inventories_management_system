import React from 'react';
import { Container, Card } from 'reactstrap'
 
import Router from './Router'
import Navbar from './components/layouts/Navbar'
import NavbarHeader  from './components/layouts/NavbarHeader'

function App() {
  return (
    <div>
      <NavbarHeader />
      <Navbar />
      <Container style={{marginTop: "-2rem"}}>
        <Card body style={{ backgroundColor: '#EAEAEA' }}>
          <Router />
        </Card>
      </Container>
    </div>
  );
}

export default App;
