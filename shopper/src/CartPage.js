import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function CartPage({items, onAddOne, onRemoveOne}) {
    return (
        <ul className="cartpage-items">
            {items.map( item => 
                <li key={item.id} className="cartpage-item">
                    <Item item={item}>
                        <div className="cartItem-controls">
                            <button
                                className="cartItem-removeOne"
                                onClick={() => onRemoveOne(item)}
                            >
                                &ndash;
                            </button>
                            <span className="cartItem-count">{item.count}</span>
                            <button
                                className="cartItem-addOne"
                                onClick={() => onAddOne(item)}
                            >
                                +
                            </button>
                        </div>
                    </Item>
                </li>    
            )}
        </ul>
    );
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;