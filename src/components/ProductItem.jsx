import React, { useState } from 'react';
import addTocart from '../../public/assets/icons/bt_add_to_cart.svg';
import '../styles/ProductItem.scss'

const ProductItem = ({product}) => {
    const [cart, setCart] = useState([]);
    const handleClickCart = () =>{
        setCart([]);
    }
    return(
        <div className="product-card">
            <img src={product.category.image} alt={product.title}/>
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={handleClickCart}>
                    <img src={addTocart} alt=""/>
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;