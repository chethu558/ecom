import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {Base} from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/CartHelper";
import Payment from "./Payment";
const Cart = props => {
    const [reload, setReload] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(()=>{setProducts(loadCart())},[reload])

    const loadAllProducts = (products)=>{
        console.log(products);
       return (
           <div>
               <h1>products</h1>
            {
              products.map((product, index)=>{
                return (<Card product={product} key={index} addtoCart={false} removeFromCart={true} reload={reload} setReload={setReload}/>);
              })
            }
           </div>
       );
    }

    return (
        <Base title="Cart">
            <div className="row text-center">
                <div className="col-6">
                  {loadAllProducts(products)}
                </div>
                <div className="col-6">
                <Payment products={products} setReload={setReload} />
                </div>
            </div>
        </Base>
    );
};

Cart.propTypes = {};

export default Cart;