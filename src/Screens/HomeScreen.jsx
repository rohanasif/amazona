import React from "react";
import products from "../ProductAPI/products";
import { Row, Col } from "react-bootstrap";
import Product from "../Components/Product";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((products) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            {/* <p>{products.name}</p> */}
            <Product product={products}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
