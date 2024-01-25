import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button
} from "react-bootstrap";
import Rating from "../Components/Rating";
import { useParams } from "react-router-dom";
import axios from "axios";
function ProductsScreen() {
  const { id } = useParams();
  const [product, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      console.log(data,'check my data');
      setProducts(data);
    };
    fetchProducts();
  }, [id]);
  console.log(product);
  return (
    <div>
      <>
        <Link to="/" className="btn btn-light my-3">
          Go Back
        </Link>
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
                <ListGroup.Item>
                  <Button className="btn-block" type="button">
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
    </div>
  );
}

export default ProductsScreen;