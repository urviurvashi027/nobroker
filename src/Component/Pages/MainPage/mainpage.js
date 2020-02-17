import React, { Component } from 'react';
import FilterComponent from '../../FilterComponent/FilterComponent';
import ListComponent from '../../ListComponent/ListComponent';

class MainPage extends Component {


    componentDidMount(){
        console.log(this.props)
    }

    render() {
    
      return (
        <div className="main-page">
        <div className="row">
            <div className="col-4 col-lg-4 col-md-4 col-sm-4">
              <FilterComponent></FilterComponent>
            </div>
            <div className="col-8 col-lg-8 col-md-8 col-sm-8">
              <ListComponent></ListComponent>
            </div>
        </div>
      </div>
      );
    }
  }
  
  export default MainPage;