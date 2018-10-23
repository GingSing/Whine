import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import { Footer, LogoBar, NewsFeed, UserBar } from '../components';

class Home extends Component{
  render(){
    return(
      <div className="home">
        <UserBar />
        <div className="hero-header">
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

        <Footer />
      </div>
    );
  }
}

export default Home;
