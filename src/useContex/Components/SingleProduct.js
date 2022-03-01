import React, { useContext } from 'react';
import { Context } from '../CreateContex';

function SingleProduct({ data }) {

    const {cart, setCart} = useContext(Context)
    const { name, image, id, price } = data;
    return (
        <div className='product'>
            <img src={image} alt="imag" />
            <div className="productDesc">

                <b>{name}</b>
                <p>  ${price.substring(0, 3)}</p>
            </div>

            {
                cart.includes(data)
                    ?

                    <button onClick={() => { setCart(cart.filter((pd) => pd.id !== id)) }}
                        className='btn m-1 btn-warning'>Remove to cart</button>
                    :

                    <button onClick={() => setCart([...cart, data])} className='btn m-1 btn-info'>Add to cart</button>


            }


        </div>
    );
}

export default SingleProduct;