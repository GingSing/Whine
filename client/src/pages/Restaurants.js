import React, { Component } from 'react';

class Restaurants extends Component{
  constructor(props){
    super(props);

    this.state={
      restaurantFeed: []
    }
  }
  render(){
    return(
      <div className="restaurants">
      </div>
    );
  }
}

export default Restaurants;
