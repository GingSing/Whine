import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import LogoBar from '../components/LogoBar';
import NewsFeed from '../components/NewsFeed';

class Home extends Component{
  constructor(props){
    super(props);
    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.register = this.register.bind(this);
    this.state = {
      signedIn: false
    }
  }

  toggleSignIn(){
    this.setState({
      signedIn: !this.state.signedIn
    });
  }

  register(){

  }

  render(){
    return(
      <div className="home">

        <div className="hero-header">
          <div className="user-bar">
            {this.state.signedIn ? null :<div className="register" onClick={this.register}>
              <span> Register </span>
            </div>}
            <div className="signin" onClick={this.toggleSignIn}>
              {this.state.signedIn ? <span>Sign Out</span> : <span>Sign In</span>}
            </div>
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
