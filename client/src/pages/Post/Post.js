import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { postItem } from '../../_actions';
import { connect } from 'react-redux';

class Post extends Component{
  constructor(){
    super();
    this.onDrop = this.onDrop.bind(this);
    this.postItem = this.postItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state={
      username: '5bb86724724e831be0a21a22',
      title: '',
      content: '',
      pictures: [],
      rating: 5,
      item: 'stuff'
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

  postItem(e){
    e.preventDefault();
    this.props.postItem(this.state);
  }

  render(){
    return(
      <div className="post">
        <form onSubmit={this.postItem}>
          <label>Title</label> <input name='title' onChange={this.handleChange}/>
          <label>Content</label> <input name='content' onChange={this.handleChange}/>
          <label>Pictures</label><Dropzone onDrop={this.onDrop}></Dropzone>
          <button type="submit" value="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posting: state.post.posting,
});

const mapDispatchToProps = (dispatch) => ({
  postItem: (state) =>{
    const { username, title, content, rating, pictures, item } = state;
    dispatch(postItem(username, title, content, rating, pictures, item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
