import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Jamaican = () => {
    return (
        <div>
            <h1> Jamaican Food Menu Page</h1>

            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Name of Food</Card.Title>
    <Card.Text>
      Food Description
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
        
    );
};

export default Jamaican;