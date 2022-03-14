import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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


    </div>
  );
};

export default Jamaican;
