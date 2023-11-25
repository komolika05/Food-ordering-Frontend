import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import { fetchMenu } from "../../api/foodiefetch";

const AvailableMeals = () => {
  const [restaurantData, setRestaurantData] = useState({});
  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetchMenu();
        console.log(response.data.menu);
        setRestaurantData(response.data);
        setRecommendedItems(response.data.Menu[0].Dishes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMenuData();
  }, []);

  return (
    <div className={classes.meals}>
      <h1>Menu Items</h1>
      <div className={classes.List}>
        <h2>Recommended Food Items</h2>
        {recommendedItems.map((dish) => (
          <div>
            <p>{dish.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableMeals;
