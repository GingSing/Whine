import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import FeedCard from '../components/FeedCard';
import LogoBar from '../components/LogoBar';

class Home extends Component{
  constructor(props){
    super(props);

    this.updateFeed=this.updateFeed.bind(this);

    this.state={
      feed: [],
      page: 0
    }
  }

  componentWillMount(){
    this.updateFeed();
  }

  updateFeed(){
    fetch(`http://localhost:3001/reviews`)
    .then(res => res.json())
    .then((data) => {
      this.setState({
        feed: data
      });
    })
    .catch((error) =>{
      console.log(error);
    })
  }

  render(){
    return(
      <div className="home">

        <div className="hero-header">
          <LogoBar />

          <div className="search">
            <input placeholder="Search..." />
          </div>

        </div>

        <ul className="navigation">
          <Link to="/reviews" className="navigation-link"> Restaurants </Link>
          <Link to="/reviews" className="navigation-link"> Products </Link>
        </ul>

        <div className="home-body">

          <div className="header">

          </div>



          <h3 className="feed-header"> New Reviews </h3>
          <div className="feed">
            <ul className="feed-list">
              {
                this.state.feed.map((data, key) => {return <li key={ key }><FeedCard /></li>})
              }
            </ul>
            <div className="feed-page-selector">
            </div>
          </div>

        </div>

        <div className="footer">
        </div>
      </div>
    );
  }
}

export default Home;
