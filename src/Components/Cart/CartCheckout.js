import React from "react";
import { useSelector } from "react-redux";
import classes from "./cartCheckout.module.css";
import Header from "../Layout/Header.js";

const CartCheckout = () => {
  const cart = useSelector((state) => state.cart);

  const totalAmount = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Header />
      <div className={classes.cartCheckout}>
        <h2>Your Cart</h2>
        <div className={classes.cartItems}>
          {cart.items.map((item) => (
            <div key={item.name} className={classes.cartItem}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>Price: ₹{item.price}</span>
            </div>
          ))}
        </div>
        <div className={classes.totalAmount}>
          <strong>Total Amount: ₹{totalAmount}</strong>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
