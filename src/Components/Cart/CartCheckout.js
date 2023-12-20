import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./cartCheckout.module.css";
import Header from "../Layout/Header.js";
import { clearCart } from "../../redux/cartSlice.js";

const CartCheckout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalAmount = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <Header />
      <div className={classes.cartCheckout}>
        <h2>Your Cart</h2>
        {cart.items.length === 0 ? (
          <h3>Sorry! Your cart is empty.</h3>
        ) : (
          <div>
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
            <button onClick={handleClearCart}>Clear Cart</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartCheckout;
