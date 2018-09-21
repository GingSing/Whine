import React, { Component } from 'react';

class FeedCard extends Component{
  render(){
    return(
      <div className="feed-card">
        {this.props.img ? <img src="this.props.img" /> : null}
        <header>{this.props.title}</header>
        <article>{this.props.body}</article>
      </div>
    );
  }
}

export default FeedCard;
