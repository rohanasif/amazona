import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  ListGroupItem
} from "react-bootstrap";
import Rating from "../Components/Rating";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetail } from "../action/productAction";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { useNavigate } from "react-router-dom";
function ProductsScreen() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [qty, setQty] = useState(1)
  
  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  }
  // const [product, setProducts] = React.useState([]);

  // React.useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get(`/api/products/${id}`);
  //     console.log(data,'check my data');
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, [id]);
  // console.log(product);
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(listProductDetail(id))
  }, [dispatch])
  
  const productDetail = useSelector((state) => state.productDetail)
  const {loading , error , product} = productDetail

  return (
    <div>
      <>
        <Link to="/" className="btn btn-light my-3">
          Go Back
        </Link>
        {loading ? <Loader /> : error ? <Message varient='danger'>{error}</Message> : (
              <Row>
                  <Col md={6}>
                      <Image src={product.image}alt={product.name} fluid/>
                  </Col>
          <Col md={3}>
            <ListGroup varient="flush">
              <ListGroup.Item>
                <h2>{product.name}</h2>
              </ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
              <ListGroup.Item>price:${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description:${product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup varient="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                  </ListGroup.Item>
                  {
                    product.countInStock > 0 && (
                      <ListGroupItem>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <Form.Select as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
                              {
                                [...Array(product.countInStock).keys()].map((x) =>(
                            <option key={x + 1} value={x + 1}>
                                   {x+1}
                                  </option>
                                ))
                              }

                            </Form.Select>
                          </Col>
                        </Row>
                      </ListGroupItem>
                    )
                  }
                <ListGroup.Item>
                  <Button onClick={addToCartHandler} className="btn-block" type="button" disabled={product.countInStock === 0}>
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        )}
      </>
    </div>
  );
}

export default ProductsScreen;
