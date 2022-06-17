import React from 'react';

const OrderItem = ({product}) => {
    return(
        <div class="shopping-cart">
            <figure>
                <img src={product.category.image} alt={product.title}/>
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
        </div>
    );
}

export default OrderItem;