import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import LogoBar from '../components/LogoBar';
import NewsFeed from '../components/NewsFeed';

class Home extends Component{
  render(){
    return(
      <div className="home">

        <div className="hero-header">
          <div className="user-bar">
            Login button
          </div>
          <LogoBar />
          <div className="search">
            <input placeholder="Search..." />
          </div>
        </div>

        <ul className="navigation">
          <Link to="/restaurants" className="navigation-link"> Restaurants </Link>
          <Link to="/products" className="navigation-link"> Products </Link>
        </ul>

        <div className="home-body">
          <div className="header">
          </div>

          <NewsFeed />
        </div>

        <div className="footer">
        </div>
      </div>
    );
  }
}

export default Home;
