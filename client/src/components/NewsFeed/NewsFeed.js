import React, { Component } from 'react';
import { getNewPosts } from '../../_actions/homeActions';
import { connect } from 'react-redux';
import './NewsFeed.css';

import FeedCard from './FeedCard';

class NewsFeed extends Component{
  constructor(props){
    super(props);

    this.updateFeed=this.updateFeed.bind(this);

    this.state={
      page: 0
    }
  }

  componentWillMount(){
    this.updateFeed();
  }

  updateFeed(){
    this.props.getNewPosts();
  }

  render(){
    return(
      <div className="news-feed">
        <h3 className="feed-header"> New Reviews </h3>
        <div className="feed">
          <ul className="feed-list">
            {
              this.props.feed.map((data, key) => {return <FeedCard key={key} data={data} />})
            }
          </ul>
          <div className="feed-page-selector">
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  feed: state.feed.feed
});

export default connect(mapStateToProps, { getNewPosts })(NewsFeed);
