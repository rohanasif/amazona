import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ products }) {
  console.log(products, "get products data");
  return (
    <>
      <Card className="my-3 p-3 rounded ">
        <Link to={`/product/${products._id}`}>
          <Card.Img src={products.image} variant="top" />
        </Link>

        <Card.Body>
          <Link to={`/product/${products._id}`}>
            <Card.Title>
              <strong>{products.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <div className="my-3">
              {/* {product.rating} from {product.numReviews} reviews */}
              <Rating rating={products.rating} views={products.numReviews} />
            </div>
          </Card.Text>

          <Card.Text as="h3">${products.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
