import React from 'react';
import logo from './logo.svg';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <Header></Header>
      {/* <Footer></Footer> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
