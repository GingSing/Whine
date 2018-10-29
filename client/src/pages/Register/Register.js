import React, { Component } from 'react';

import { LogoBar, UserBar } from '../../components';

import './Register.css';

class Register extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={
      username:``,
      name: ``,
      email: ``,
      password: ``,
      passwordConf: ``
    }
  }

  handleChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    fetch('http://localhost:3001/user/register',{
      method:'post',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        passwordConf: this.state.passwordConf
      })
    })
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      this.props.history.push("/");
    })
    .catch((err) =>{
      console.log(err);
    });
  }

  render(){
    return(
      <div className="register">
        <UserBar />
        <LogoBar />
        <form className="register-form" method="post" onSubmit={this.handleSubmit}>
          <label className="register-label">Username:</label> <input name="username" onChange={this.handleChange}/> <br/>
          <label className="register-label">Name:</label> <input name="name" onChange={this.handleChange}/> <br/>
          <label className="register-label">Email:</label> <input name="email" onChange={this.handleChange}/> <br/>
          <label className="register-label">Password:</label> <input name="password" onChange={this.handleChange}/> <br/>
          <label className="register-label">Confirm Password:</label> <input name="passwordConf" onChange={this.handleChange}/> <br/>
          <button type="submit" value="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
