import React from 'react'
import { Row, Col } from "react-bootstrap"
import Product from "../Components/Product";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../action/productAction';
import Message from '../Components/Message';
import Loader from '../Components/Loader';
function HomeScreen() {

  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  React.useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  
  return (
    <>
      <h1 className="py-5">Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varient="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product products={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}
export default HomeScreen


