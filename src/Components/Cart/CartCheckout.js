import React from "react";
import { useSelector } from "react-redux";

import classes from "./cartCheckout.module.css";

const CartCheckout = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={classes.cartCheckout}>
      <h2>Your Cart</h2>
      <div className={classes.cartItems}>
        {cartItems.map((item) => (
          <div key={item.name} className={classes.cartItem}>
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Price: ₹{item.price}</span>
          </div>
        ))}
      </div>
      <div className={classes.totalAmount}>
        <strong>Total Amount: ₹{totalAmount}</strong>
      </div>
    </div>
  );
};

export default CartCheckout;
