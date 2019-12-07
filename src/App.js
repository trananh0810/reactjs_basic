import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import MenuUnit from './menu/MenuUnit';
import RouterApp from './router/RouterApp';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-2 bg-dark p-0 overflow-auto position-fixed" 
              style={{ height: 'auto', maxHeight: '100vh' }}>
            <MenuUnit />
          </div>
          <div className="col-8 offset-4">
            <RouterApp/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
