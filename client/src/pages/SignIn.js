import React, { Component } from 'react';
import { signIn } from '../_actions/userActions';
import { connect } from 'react-redux';

import './SignIn.css';

class SignIn extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signIn = this.signIn.bind(this);
    this.state={
      username: ``,
      password: ``
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.signedIn === true){
      this.props.history.push("/");
    }
  }

  handleChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  signIn(e){
    e.preventDefault();
    this.props.signIn(this.state);
  }


  render(){
    return(
      <div className="signin">
        <form className="signin-form" onSubmit={this.signIn}>
          <label>Username:</label><input name="username" onChange={this.handleChange}/>
          <label>Password:</label><input name="password" onChange={this.handleChange}/>
          <button type="submit" value="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signedIn: state.auth.signedIn
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (state) =>{
    const { username, password } = state;
    dispatch(signIn(username, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
