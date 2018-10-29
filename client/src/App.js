import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { Products, Home, Restaurants, Register, SignIn, Post } from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/products" component={Products} />
          <Route path="/register" component={Register} />
          <Route path="/signin" component={SignIn} />
          <Route path="/post" component={Post} />
        </Switch>
      </div>
    );
  }
}

export default App;
