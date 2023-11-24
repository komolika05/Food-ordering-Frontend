import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      const options = {
        method: "GET",
        url: "https://foodiefetch.p.rapidapi.com/swiggy",
        params: {
          query: "grandamas cafe pune",
        },
        headers: {
          "X-RapidAPI-Key":
            "51ee4eddf7msh3d9735a1cae2644p1349d2jsnd58b92ef0eb0",
          "X-RapidAPI-Host": "foodiefetch.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
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
        {menuItems.map((menuItem) => (
          <div className={classes.FoodItem} key={menuItem.id}>
            <h2>{menuItem.about}</h2>
            <p>{menuItem.menu}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableMeals;
