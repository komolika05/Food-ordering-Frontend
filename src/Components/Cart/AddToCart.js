import React, { useState } from "react";
import classes from "./AddToCart.module.css";
import CartIcon from "./CartIcon";


const MenuItem = ({ dish, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);


  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      const newItem = { dish, quantity };
      onAddToCart(newItem);
      setQuantity(0);
    }
  };

  return (
    <div className={classes.CartButton} style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <h3>{dish.name}</h3>
        <h4>₹{dish.price}</h4>
        <p>{dish.description}</p>
      </div>
      <div className={classes.Cart}>
        <div className="PlusBtn">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button className={classes.AddBtn2} onClick={handleAddToCart} >
          Add to Cart
        </button>
      </div>
      
      <hr />
    </div>
  );
};

export default MenuItem;
