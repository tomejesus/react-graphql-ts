import * as React from 'react';
import AllNotes from './components/AllNotes';
import Container from '@mui/material/Container';
import NewNote from "./components/NewNote/NewNote";

import './App.css';

const App = () => {
  return (
      <div className="App">
          <Container maxWidth="md">
              <h1>Simple Note Taker</h1>
              <NewNote />
              <hr />
              <AllNotes />
          </Container>
      </div>
  );
};

export default App;
