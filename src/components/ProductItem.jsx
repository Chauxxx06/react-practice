import React from 'react';
import cart from '../../public/assets/icons/bt_add_to_cart.svg';
import '../styles/ProductItem.scss'

const ProductItem = () => {
    return(
        <div className="product-card">
            <img src="https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
            <div className="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                <figure>
                    <img src={cart} alt=""/>
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;