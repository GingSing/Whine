import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class Post extends Component{
  constructor(){
    super();
    this.onDrop = this.onDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state={
      title: '',
      content: '',
      pictures: []
    }
  }

  handleChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  onDrop(acceptedFiles, rejectedFiles){
    acceptedFiles.map(file => {
      this.setState({ pictures: [...this.state.pictures, file]});
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.post(this.state);
  }

  render(){
    return(
      <div className="post">
        <form onSubmit={this.handleSubmit}>
          <label>Title</label> <input onChange={this.handleChange}/>
          <label>Content</label> <input onChange={this.handleChange}/>
          <label>Pictures</label><Dropzone onDrop={this.onDrop}></Dropzone>
          <button type="submit" value="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Post;
