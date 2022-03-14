import React, { useEffect, useState } from "react";
import FoodCard from "../../Components/FoodCard/FoodCard.jsx";
const axios = require("axios");

const Jamaican = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios
      .get("/api/izlandgirls")
      .then((response) => {
        console.log(response);
        setFood(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1> Jamaican Food Menu Page</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {food.map((foodItems) => {
            return (
              <div className="col">
                
                <FoodCard {...foodItems} key={foodItems._id} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Jamaican;
