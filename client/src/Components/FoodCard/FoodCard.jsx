import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FoodCard = ({title, description, imageURL, price}) => {
  return (
    <div className="wrapper">
      <Card style={{ width: "18rem", height: "30rem" }}>
        <Card.Img variant="top" src={imageURL} style={{width: "18rem", height: "10rem"}}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Button variant="primary" style={{marginLeft: "50px"}}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCard;