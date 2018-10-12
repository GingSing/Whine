import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Products from './pages/Products';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import Post from './pages/Post';

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
