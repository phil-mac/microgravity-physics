import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import * as ROUTES from './constants/routes';
import Navigation from './components/Navigation/index'
import Home from './components/Home';
import Pomodoro from './components/Pomodoro';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
          {/* <hr /> */}
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.POMODORO} component={Pomodoro} />
        </header>
      </div>
    </Router>
    
  );
}

export default App;
