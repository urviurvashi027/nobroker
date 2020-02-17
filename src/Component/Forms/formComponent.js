import React, { Component } from 'react';
import axios from 'axios';

class Forms extends Component {

  state={
    title:'title',
    content:'',
    author:''
  }


  postDataHandler = () => {
    console.log("clicked");
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    }
    axios.post('https://jsonplaceholder.typicode.com/posts',data)
    .then(res => {

    })
  }

  inputChangedHandler = (event) => {
    console.log(event);
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    // const updatedKeyword = event.target.value;
    // May be call for search result
}

    render() {
    
      return (
        <div>
        <div>
          <label>Title</label>
          <input type="text" defaultValue={this.state.title} name="title" onChange={(event)=>this.inputChangedHandler(event)}/>
        </div>
        <div>
          <label>content</label>
          <input type="text" defaultValue={this.state.content} name="content" onChange={(event)=>this.inputChangedHandler(event)}/>
        </div>
        <div>
          <label>author</label>
          <input type="text" defaultValue={this.state.author} name="author" onChange={(event)=>this.inputChangedHandler(event)}/>
          <button onClick={this.postDataHandler}>Submit</button>
        </div>
      </div>
      );
    }
  }
  
  export default Forms;