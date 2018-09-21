import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Reviews from './pages/Reviews';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reviews" component={Reviews} />
        </Switch>
      </div>
    );
  }
}

export default App;
