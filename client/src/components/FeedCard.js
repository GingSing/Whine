import React, { Component } from 'react';

class FeedCard extends Component{
  render(){
    return(
      <div className="feed-card">
        {this.props.img ? <img src="this.props.img" alt="img" /> : null}
        <header>{this.props.title}</header>
        <article>{this.props.content}</article>
      </div>
    );
  }
}

export default FeedCard;
