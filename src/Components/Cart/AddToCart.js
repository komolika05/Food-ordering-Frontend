import React, { useState } from "react";
import classes from "./AddToCart.module.css";
import CartIcon from "./CartIcon";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/cartSlice";

const MenuItem = ({ dish }) => {
  //const cart = useSelector((state) => state.cart);
  // const dishInCart = cart.items.find((item) => item.name === dish.name);
  // const quantity = dish ? dish.quantity : 0;
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  function onAddToCart(dish) {
    dispatch(addItem(dish));
  }

  function onRemoveFromCart(dish) {
    dispatch(removeItem(dish));
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onAddToCart(dish);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onRemoveFromCart(dish);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(dish);
    setQuantity(1);
  };

  return (
    <div className={classes.CartButton} style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <h3>{dish.name}</h3>
        <h4>₹{dish.price}</h4>
        <p>{dish.description}</p>
      </div>
      <div className={classes.Cart}>
        {quantity > 0 ? (
          <div className={classes.PlusBtn}>
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
        ) : (
          <button className={classes.AddBtn2} onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
      </div>

      <hr />
    </div>
  );
};

export default MenuItem;
