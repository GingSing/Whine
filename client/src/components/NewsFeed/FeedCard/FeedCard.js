import React, {
  Component
} from 'react';

import './FeedCard.css';

class FeedCard extends Component {
  constructor(props){
    super(props);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.state = {
      openfeed: false
    }
  }

  toggleOpen(){
    console.log(this.state.openfeed);
    this.setState({openfeed: !this.state.openfeed});
  }

  render() {
    return (
      <React.Fragment>
        <li className={this.state.openfeed ? "longer feed-card" : "feed-card"}>
        {this.props.data.img ? < img src="this.props.img" alt="img" / > : null}
          <div className="feedcard-text">
            <header className="feedcard-header"> {this.props.data.title} < /header>
            <article className="feedcard-article"> {this.props.data.content} < /article>
            <button onClick={this.toggleOpen}>v</button>
          </div>
        </li>
      </React.Fragment>
    );
  }
}

export default FeedCard;
