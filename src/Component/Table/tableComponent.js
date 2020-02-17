import React, { Component } from 'react';
import axios from 'axios';
import DetailComponent from '../DetailComponent/details';

class Table extends Component {

  state = {
    posts:[]
  }

  componentDidMount(){
    console.log("componentdid")
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res =>{
      console.log(res);
      const data = res.data.slice(0,9);
      const updatedPosts = data.map(p => {
        return{
          ...p,
          author:"urvi"
        }
      })

      this.setState({posts:updatedPosts})
    });
  }

    render() {

      let tableStyle = {
        align:"center"
    };
    
      const posts = this.state.posts.map(post => {
        return (
          <tr key={post.id} >
            <td>{post.title}</td>
             <td>{post.author}</td>
        </tr>
        )
      });

      return (
        <div>
          <h1>Table</h1>
         <table cellSpacing="3" id="mytable" style={tableStyle}>
                        <tbody>{posts}</tbody>
        </table>
      </div>
      );
    }
  }
  
  export default Table;