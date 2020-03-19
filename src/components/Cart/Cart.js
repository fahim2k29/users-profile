import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    let total= 0;
    for(let i=0; i<cart.length; i++){
        const profile = cart[i];
        total = total + profile.salary;
    }

    return (
        <div className="main-cart">
            <h4>Profile Summary</h4>
            <p>Total Profile: {cart.length}</p>
            <h3 className="totalSalary">Total Salary: $ {total}</h3>
        </div>
    );
};

export default Cart;