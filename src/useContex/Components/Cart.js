import React, {useContext, useEffect, useState } from 'react';
import { Context } from '../CreateContex';
import SingleProduct from './SingleProduct';


const Cart = () => {

    const [total, setTotal] = useState(0)
    const {cart, setCart} = useContext(Context)



    useEffect(()=>{
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    },[cart])


    return (
        <div>
            <span style={{fontSize : '30px'}}>My cart</span>
            <br />
            <samp style={{fontSize : 30 }}>Total : {total}</samp>

            <div className="productContainer">
                {
                    cart.map(pd => (
                        <SingleProduct data={pd} key={pd.id}  cart={cart} setCart={setCart}></SingleProduct>

                    ))
                }
            </div>


        </div>
    );
};

export default Cart;