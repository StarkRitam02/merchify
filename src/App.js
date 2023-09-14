import React, { useState } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Track from './components/Track';
import Card from './components/Card';

function App() {
    
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        {/* <Route exact path='/' element={<Header/>}></Route> */}
        <Route exact path='/Home' element={
        <>
        <Header/>
        <Home/>
        </>}></Route>
        <Route exact path='/Track' element={
        <>
        <Header/>
        <Track/>
        </>
        }></Route>
        <Route exact path='/Cart' element={

        <>
        <Header/>
        <Cart/>
        </>}></Route>
       

      </Routes>
    </BrowserRouter>
    
     {/* <div className='container'>
          <div className='row'>
                {/* <Card product={products[0]} /> // Pass the first product from the array */}
           {/* {products.map((product, index) => (
            <div key={index} className="col-12 col-md-3 m-0 p-0">
              <Card product={product} />
            </div>
          ))} 
          </div>  */}
          {/* <div className='row'>
                <div className='col-12 col-md-3 m-0 p-0 '>
                    <Card />
                </div>

                <div className='col-12 col-md-3 m-0 p-0'>
                    <Card />
                </div>
                <div className='col-12 col-md-3 m-0 p-0'>
                    <Card />
                </div>
                <div className='col-12 col-md-3 m-0 p-0'>
                    <Card />
                </div>
          </div>
          <div className='row'>
                <div className='col-12 col-md-3 m-0 p-0 '>
                    <Card />
                </div>

                <div className='col-12 col-md-3 m-0 p-0'>
                    <Card />
                </div>
                <div className='col-12 col-md-3 m-0 p-0'>
                    <Card />
                </div>
                <div className='col-12 col-md-3 m-0 p-0'>
                    <Card />
                </div>
          </div> */}
        </div> 
      
    // </div>
  );
}

export default App;