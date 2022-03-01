import React, { useContext, useState } from 'react';
import faker from 'faker';
import SingleProduct from './SingleProduct';
import { Context } from '../CreateContex';



faker.seed(100)

function Home() {

    



    const productArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name : faker.commerce.productName(),
        price : faker.commerce.price(),

        image : faker.random.image(),

    }) )
    const [products, setProducts] = useState(productArray)




    



    return (
        <div className='productContainer'>
            {
                products.map((pd) => (
                    <SingleProduct data={pd}  ></SingleProduct>
                ))
            }
        </div>
    );
}

export default Home;