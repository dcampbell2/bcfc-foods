import React, { useEffect, useState } from "react";
import FoodCard from "../../Components/FoodCard/FoodCard.jsx";
const axios = require("axios");

const Jamaican = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios
      .get("/api/izlandgirls")
      .then((response) => {
        console.log(response)
        setFood(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1> Jamaican Food Menu Page</h1>
        {food.map((foodItems) => {
         return( <FoodCard {...foodItems} key={foodItems._id}/>
        )})}

    </div>
  );
};

export default Jamaican;
