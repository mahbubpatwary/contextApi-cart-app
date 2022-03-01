import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Home from './Components/Home';
import './index.css'

import CreateContex from './CreateContex';






const Index = () => {

    const [cart, setCart] = useState([])



    return (
        <CreateContex>
        <BrowserRouter>
            
            <Header></Header>


            <div className="app">
                <Route exact path='/'>
                    <Home cart={cart} setCart={setCart}></Home>

                </Route>

                <Route path='/cart'>
                    <Cart  cart={cart} setCart={setCart}></Cart>

                </Route>



            </div>




        </BrowserRouter>
        </CreateContex>
    );
};

export default Index;