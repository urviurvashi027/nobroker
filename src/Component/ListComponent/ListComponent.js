import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class ListComponent extends Component {

    state = {
        property_list:[]
      }

    componentDidMount(){
        console.log("componentdid")
        axios.get('https://demo8808386.mockable.io/fetchProperties')
        .then(res =>{
          this.setState({property_list:res['data']['data']});
        });
      }


    render() {

      const list = this.state.property_list.map(property => {
        return (
          <div key={property.id} className="row card">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
              <div className="title">
                <div className="row">
                  <div className="col-8 col-lg-8 col-md-8 col-sm-8 text-align-l">
                  <span className="headingColor">{property.propertyTitle}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6 text-align-l Font-normal">
                  <span>{property.propertySize} sqft</span>
                  </div>
                  <div className="col-6 col-lg-6 col-md-6 col-sm-6 text-align-r Font-normal">
                  <span>Deposit Amount : &#8377; {property.rent}</span>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-6 col-lg-6 col-md-6 col-sm-6 text-align-l Font-normal">
                <Carousel>
                  {property.photos.map(p=>{
            const imgUrl = 'https://images.nobroker.in/images/'+ property.id +'/'+ p.imagesMap.thumbnail;
              
            console.log(imgUrl)
            return (
              <div key={property.id}>
              <img src={imgUrl} />
              <p className="legend">Legend 1</p>
              </div>
            )
          })}
            </Carousel>
                </div>
              </div>
            </div>
          </div>
        )
      });
    
      return (
        <div>
        {list}
      </div>
      );
    }
  }
  
  export default ListComponent;