import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class Post extends Component{
  constructor(){
    super();
    this.onDrop = this.onDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={

    }
  }

  onDrop(acceptedFiles, rejectedFiles){
    console.log(acceptedFiles);
    acceptedFiles.map(file => {
      console.log(file.name);
    });
  }

  handleSubmit(){

  }

  render(){
    return(
      <div className="post">
        <form onSubmit={this.handleSubmit}>
          <label>Title</label> <input />
          <label>Content</label> <input />
          <label>Pictures</label><Dropzone onDrop={this.onDrop}></Dropzone>
          <button type="submit" value="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Post;
