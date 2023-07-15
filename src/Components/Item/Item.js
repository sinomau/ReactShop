import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom'
import React from 'react'


const Item = ({ article, img, mat, price, stock, id }) => {
  
  return (
    <div className="d-flex flex-row flex-wrap m-5 align-items-center justify-content-center ">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{article}</Card.Title>
          <Card.Text>
            Material:{mat}
            <br/>
             ${price}
          </Card.Text>
          <Link to={`/detail/${id}`}><Button variant="primary">Ver Detalle</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Item;

