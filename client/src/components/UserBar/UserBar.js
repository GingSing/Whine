import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../_actions/userActions';

import './UserBar.css';

class UserBar extends Component{
  constructor(props){
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut(){
    this.props.signOut();
  }

  render(){
    return(
      <div className="user-bar">
        {this.props.signedIn ?
          <div>
            <Link to ="/post" className="post-link">Post</Link>
            <div className="signout" onClick={this.signOut}>Sign Out</div>
          </div>
        : <div>
            <div className="register">
              <Link to="/register" className="user-bar-links">Register</Link>
            </div>
            <Link className="signin-button" to="/signin"> Sign In </Link>
          </div>
          }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signedIn: state.auth.signedIn
});

export default connect(mapStateToProps, {signOut})(UserBar);
