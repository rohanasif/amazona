import React from 'react'
import { Row, Col } from "react-bootstrap"
import Product from "../Components/Product";
import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = React.useState([])
  
  React.useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products/");
      setProducts(data)
    }
    fetchProducts()
  }, [])
  console.log(products);
    return (
      <>
        <h1 className="py-5">Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                  <Product products={product} />
            </Col>
          ))}
        </Row>
      </>
    );
}

export default HomeScreen



