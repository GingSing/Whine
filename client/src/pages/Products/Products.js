import React, { Component } from 'react';

import { UserBar, LogoBar } from '../../components';

class Products extends Component{
  constructor(props){
    super(props);
  }

  fetchProducts(){
    fetch('http://localhost:3001/')
  }
  render(){
    return(
      <div className="products">
        <UserBar />
        <div className="productsSearch">
        </div>
        <div className="productsResult">
          {

          }
        </div>
      </div>
    );
  }
}

export default Products;
