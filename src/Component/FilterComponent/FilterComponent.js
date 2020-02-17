import React, { Component } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';


class FilterComponent extends Component {

  state={
      PropertySize:'',
      photosAvailable:'',
      Rent:'',
    
  }

 reset(){
    console.log("rest is called")
    this.setState({
      Rent: '',
      PropertySize:'',
      photosAvailable:''
    })
  }

  onInputRent() {
    var input = document.getElementById("rent");
    var currentVal = input.value;
    this.setState({
      Rent: currentVal
    })
}

onInputSize() {
  var input = document.getElementById("propertySize");
  var currentVal = input.value;
  this.setState({
    PropertySize: currentVal
  })
}

filter(){

}

    render() { 
      return (
        <div className="row">
        <div className="col-12 col-lg-12 col-md-12 col-sm-12">
          <div className="card">

            <div className="row">
            <div className="col-6 col-lg-6 col-md-6 col-sm-6 text-align-l">
            <span>Filter</span> 
            </div>
            <div className="col-6 col-lg-6 col-md-6 col-sm-6 text-align-r">
            <span>
          <button className="reset-btn" onClick={this.reset}>Reset</button>
        </span>
            </div>
            </div>

            <hr/>
            <div className="filterblock">
            <div className="row filterpanel">
              <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                <div className="row text-align-l">
                  <div class="row">
                    <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                    <span>Rent</span>
                    </div>
                    <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                    <input type="range" id="rent" min="0" max="500000" step="500" defaultValue="0" onInput={this.onInputRent.bind(this)}/>
                    <span>{this.state.Rent}</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>

            <div className="row filterpanel">
              <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-align-l">
              <div className="row text-align-l">
                  <div class="row">
                    <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                    <span>Propert Size</span>
                    </div>
                    <div className="col-6 col-lg-6 col-md-6 col-sm-6">
                    <input type="range" type="range" id="propertySize" min="0" max="7" step="1" defaultValue="0" onInput={this.onInputSize.bind(this)}/>
                    <span>{this.state.PropertySize}</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>

            <div className="row filterpanel">
              <div className="col-12 col-lg-12 col-md-12 col-sm-12 text-align-l">
              <div className="row">
                    <div className="col-7 col-lg-7 col-md-7 col-sm-7">
                    <span>Photos available</span>
                    </div>
                    <div className="col-5 col-lg-5 col-md-5 col-sm-5">
                    <input type="checkbox"/>
                    </div>
                  </div>
              </div>
              </div>
            </div>
       

          </div>
        </div>
        
      </div>
      );
    }
  }
  
  export default FilterComponent;