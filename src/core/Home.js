import React, {useState, useEffect } from 'react';
import  {getProducts}  from "./helper/CoreApi";
import {ImageHelper} from "./helper/ImageHelper";



import {Base} from "./Base";
import Card from "./Card";

import "../index.css"

const Home = props => {
    const [products, setProducts] =  useState([]);
    const [error, setError] = useState(false);

    const loadAllProducts = () =>{
        getProducts().
        then((data)=>{
            if(data.error){
                setError(data.error);
            }
            else{
                setProducts(data);
            }
        })
        .catch((error)=>{console.log(error)});
    };

    useEffect(()=>{
        loadAllProducts();
    }, []);

    return (
        <Base title="Home" description="This is official site of Mushroom business">
            <div className="row">
               {
                   products.map((product, index)=>{
                      return( <div key={index} className="col-4 mb-4">
                              <Card product={product} />
                       </div>);
                   })
               }
            </div>
        </Base>
    );
};
export default  Home ;