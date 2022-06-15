import React from 'react';
import arrow from '../../public/assets/icons/flechita.svg'

const ShoppingCartItem = () => {
    return(
        <div className="order">
            <p>
                <span>03.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={arrow} alt="arrow"/>
        </div>
    );
}

export default ShoppingCartItem;