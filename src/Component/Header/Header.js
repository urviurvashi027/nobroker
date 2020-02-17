import React, { Component } from 'react';
import '../../App.css';
import Forms from '../Forms/formComponent';
import Table from '../Table/tableComponent';
import MainPage from '../Pages/MainPage/mainpage';
import { Route,Link } from 'react-router-dom';

class Header extends Component {
    render() {
    
      return (
        <header id="home" className="Header">
        <nav id="nav-wrap">
           <ul id="nav" className="nav">
           <li className="current"> <Link to="/">No Broker</Link></li>
              <li className="current"><Link to={{
                 pathname: "/about",
                 hash:"#submit",
                 search:"?quick-submt"
              }}>Home</Link></li>
            </ul>
        </nav>
        <div className="pages">
        <Route path="/" exact component={MainPage}/>
        <Route path="/home" exact component={MainPage}/>
        <Route path="/forms"  component={Forms}/>
        <Route path="/table"  component={Table}/>
        </div>
     </header>
      );
    }
  }
  
  export default Header;