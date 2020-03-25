import React from 'react';
import Home from './views/home';
import New from './views/new';
import Edit from './views/edit';
import Details from './views/details'

import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <New path="/pets/new" />
        <Edit path="/pets/:id/edit" />
        <Details path="/pets/:id" />
      </Router>
    </div>
  );
}
export default App;