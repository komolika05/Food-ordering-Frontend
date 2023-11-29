import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import { fetchMenu } from "../../api/foodiefetch";
import ScrollMenu from "../Layout/SliderMenu";
import MenuItem from "../Cart/AddToCart";

const AvailableMeals = ({onAddToCart, onRemoveFromCart}) => {
  const [restaurantData, setRestaurantData] = useState({});
  const [recommendedItems, setRecommendedItems] = useState([]);
  const [rice, setRice] = useState([]);
  const [noodles, setNoodles] = useState([]);
  const [soup, setSoup] = useState([]);
  const [starter, setStarter] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Recommended");
  const [sliderItems, setSliderItems] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetchMenu();
        console.log(response.data.Menu);
        setSliderItems(response.data.Menu.map((m) => m.title));
        setRestaurantData(response.data);
        setRecommendedItems(response.data.Menu[0].Dishes);
        setRice(response.data.Menu[1].Dishes);
        setNoodles(response.data.Menu[2].Dishes);
        setSoup(response.data.Menu[3].Dishes);
        setStarter(response.data.Menu[4].Dishes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMenuData();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const getMenuItems = () => {
    switch (selectedCategory) {
      case "Recommended":
        return recommendedItems;
      case "Rice":
        return rice;
      case "Noodles":
        return noodles;
      case "Soup":
        return soup;
      case "Starters":
        return starter;
      default:
        return [];
    }
  };

  return (
    <div className={classes.meals}>
      <ScrollMenu onMenuItemClick={handleCategoryChange} items={sliderItems} />
      <div className={classes.selectedCategoryList}>
        <h2>{selectedCategory} Items</h2>
        <div style={{ width: "100%", marginRight: "90%" }}>
          {getMenuItems().map((dish) => (
            <MenuItem key={dish.id} dish={dish} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default AvailableMeals;
