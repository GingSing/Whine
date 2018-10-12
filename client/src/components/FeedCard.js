import React, {
  Component
} from 'react';

class FeedCard extends Component {
  render() {
    return (
      <div className="feed-card" >
      {this.props.data.img ? < img src = "this.props.img"alt = "img" / > : null}
        <header > {this.props.data.title} < /header>
        <article > {this.props.data.content} < /article>
      </div>
    );
  }
}

export default FeedCard;
