import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LogoBar.css';

class LogoBar extends Component{
  constructor(props){
    super(props);
    this.dropdown=this.dropdown.bind(this);

    this.state={
      dropdown: false
    }
  }

  dropdown(){
    this.setState({
      dropdown: !this.state.dropdown
    })
  }


  render(){
    return(
      <div className="logo-bar">
        <div className="logo-text-wrapper">
        <Link className="logo" to="/">Whine</Link>
        </div>
      </div>
    );
  }
}

//put logobar css in here from home
export default LogoBar;
