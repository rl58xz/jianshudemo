import React from 'react';
import {GlobalStyle,Container} from './style'
import Header from './header/index'

function App() {
  return (
  <React.Fragment>
    <GlobalStyle/>
    <Container>
    <Header/>
    </Container>
  </React.Fragment>
  );
}

export default App;
