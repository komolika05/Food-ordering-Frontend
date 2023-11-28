import axios from "axios";

export async function fetchMenu() {
  //   const options = {
  //     method: "GET",
  //     url: "https://foodiefetch.p.rapidapi.com/swiggy",
  //     params: {
  //       query: "grandamas cafe pune",
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": "51ee4eddf7msh3d9735a1cae2644p1349d2jsnd58b92ef0eb0",
  //       "X-RapidAPI-Host": "foodiefetch.p.rapidapi.com",
  //     },
  //   };
  //   const response = await axios.get(options);

  const response = {
    data: {
      About: {
        Name: "Grandma'S Cafe",
        Ratings: "NEW",
        Locality: "Mawal",
        AreaName: "Lonavala",
        City: "Pune",
        Cuisines: ["Chinese"],
      },
      Menu: [
        {
          title: "Recommended",
          Dishes: [
            {
              name: "Veg schezwan noodles",
              description:
                "A Delightfully Wholesome Tasty Veg schezwan noodles",
              inStock: false,
              isVeg: false,
              price: 120,
            },
            {
              name: "Veg Manchurian Dry",
              description: "Try our tasty Veg Manchurian Dry",
              inStock: false,
              isVeg: false,
              price: 150,
            },
            {
              name: "Egg hong kong rice",
              description: "A Delightfully Wholesome Tasty Egg Hong Kong Rice.",
              inStock: false,
              isVeg: false,
              price: 120,
            },
            {
              name: "Veg Manchow Soup",
              description: "Try our tasty spicy Veg Manchow Soup",
              inStock: false,
              isVeg: false,
              price: 110,
            },
            {
              name: "Veg Triple Noodles",
              description: "A Delightfully Wholesome Tasty Veg Triple Noodles",
              inStock: false,
              isVeg: false,
              price: 100,
            },
            {
              name: "Egg garlic rice",
              description: "A Delightfully Wholesome Tasty Egg Garlic Rice.",
              inStock: false,
              isVeg: false,
              price: 120,
            },
          ],
        },
        {
          title: "Rice",
          Dishes: [
            {
              name: "Egg fried rice",
              description: "A Delightfully Wholesome Tasty Egg Fried Rice",
              inStock: false,
              isVeg: false,
              price: 120,
            },
            {
              name: "Egg schezwan rice",
              description: "A Delightfully Wholesome Tasty Egg Schezwan Rice.",
              inStock: false,
              isVeg: false,
              price: 120,
            },
            {
              name: "Egg hong kong rice",
              description: "A Delightfully Wholesome Tasty Egg Hong Kong Rice.",
              inStock: false,
              isVeg: false,
              price: 120,
            },
            {
              name: "Egg triple rice",
              description: "A Delightfully Wholesome Tasty Egg Triple Rice.",
              inStock: false,
              isVeg: false,
              price: 120,
            },
            {
              name: "Egg manchurian rice",
              description:
                "A Delightfully Wholesome Tasty Egg Manchurian Rice.",
              inStock: false,
              isVeg: false,
              price: 130,
            },
            {
              name: "Egg garlic rice",
              description: "A Delightfully Wholesome Tasty Egg Garlic Rice.",
              inStock: false,
              isVeg: false,
              price: 120,
            },
            {
              name: "Egg combination rice",
              description:
                "A Delightfully Wholesome Tasty Egg Combination Rice.",
              inStock: false,
              isVeg: false,
              price: 120,
            },
            {
              name: "Veg fried rice",
              description: "A Delightfully Wholesome Tasty Veg Fried Rice.",
              inStock: false,
              isVeg: true,
              price: 120,
            },
            {
              name: "Veg schezwan rice",
              description: "A Delightfully Wholesome Tasty Veg Schezwan Rice.",
              inStock: false,
              isVeg: true,
              price: 120,
            },
            {
              name: "Veg hong kong rice",
              description: "A Delightfully Tasty Veg Hong Kong Rice.",
              inStock: false,
              isVeg: true,
              price: 120,
            },
            {
              name: "Veg triple rice",
              description: "A Delightfully Tasty Veg Triple Rice.",
              inStock: false,
              isVeg: true,
              price: 120,
            },
            {
              name: "Veg manchurian rice",
              description: "A Delightfully Tasty Veg Manchurian Rice.",
              inStock: false,
              isVeg: true,
              price: 90,
            },
            {
              name: "Veg garlic rice",
              inStock: false,
              isVeg: true,
              price: 120,
            },
            {
              name: "Veg combination rice",
              inStock: false,
              isVeg: true,
              price: 120,
            },
          ],
        },
        {
          title: "Noodles",
          Dishes: [
            {
              name: "Veg hakka noodles",
              description: "A Delightfully Wholesome Tasty Veg Hakka Noodles.",
              inStock: false,
              isVeg: true,
              price: 120,
            },
            {
              name: "Veg schezwan noodles",
              description:
                "A Delightfully Wholesome Tasty Veg Schezwan Noodles.",
              inStock: false,
              isVeg: true,
              price: 120,
            },
            {
              name: "Veg hong kong noodles",
              description:
                "A Delightfully Wholesome Tasty Veg Hong Kong Noodles.",
              inStock: false,
              isVeg: true,
              price: 120,
            },
            {
              name: "Veg triple noodles",
              description: "A Delightfully Wholesome Tasty Veg Triple Noodles.",
              inStock: false,
              isVeg: true,
              price: 100,
            },
            {
              name: "Veg garlic noodles",
              description: "A Delightfully Wholesome Tasty Garlic Noodles.",
              inStock: false,
              isVeg: true,
              price: 120,
            },
            {
              name: "Veg manchurian noodles",
              description:
                "A Delightfully Wholesome Tasty Veg Manchurian Noodles.",
              inStock: false,
              isVeg: true,
              price: 130,
            },
            {
              name: "Veg combination noodles",
              description:
                "A Delightfully Wholesome Tasty Veg Combination Noodles.",
              inStock: false,
              isVeg: true,
              price: 120,
            },
          ],
        },
        {
          title: "Soup",
          Dishes: [
            {
              name: "Veg Manchow Soup",
              description: "Spicy and tasty Veg Manchow Soup",
              inStock: false,
              isVeg: true,
              price: 110,
            },
            {
              name: "Veg schezwan soup",
              description: "Spicy and tasty Veg schezwan Soup",
              inStock: false,
              isVeg: true,
              price: 110,
            },
            {
              name: "Veg clear soup",
              description: "Spicy and tasty Veg clear Soup",
              inStock: false,
              isVeg: true,
              price: 100,
            },
          ],
        },
        {
          title: "Starters",
          Dishes: [
            {
              name: "Veg manchurian dry",
              description: "Spicy and tasty Veg Manchurian dry",
              inStock: false,
              isVeg: true,
              price: 150,
            },
            {
              name: "Veg manchurian gravy",
              description: "Spicy and tasty Veg manchurian gravy",
              inStock: false,
              isVeg: true,
              price: 170,
            },
            {
              name: "Veg schezwan dry",
              description: "Spicy and tasty Veg schezwan dry",
              inStock: false,
              isVeg: true,
              price: 150,
            },
          ],
        },
      ],
      URL: "https://www.swiggy.com/restaurants/grandmas-cafe-mawal-lonavala-pune-784993",
    },
  };
  return response;
}
