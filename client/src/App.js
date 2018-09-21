import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Products from './pages/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/products" component={Products} />
        </Switch>
      </div>
    );
  }
}

export default App;
