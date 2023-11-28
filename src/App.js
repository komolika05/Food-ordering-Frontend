import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Items/Meals";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (cartItem) => {
    const existingItemIndex = cartItems.findIndex((item) => {
      return item.name == cartItem.name;
    });
    if (existingItemIndex >= 0) {
      const newCartItems = cartItems;
      newCartItems[existingItemIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([
        ...cartItems,
        { name: cartItem.dish.name, quantity: cartItem.quantity },
      ]);
    }
  };

  return (
    <>
      <Header cartItems={cartItems} />
      <Meals onAddToCart={handleAddToCart} />
    </>
  );
}

export default App;
