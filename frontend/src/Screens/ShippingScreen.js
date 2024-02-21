import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import {  useDispatch, useSelector } from 'react-redux';
import FormContainer from "../Components/FormContainer";
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../action/cartAction';
import CheckoutSteps from '../Components/CheckoutSteps';


function ShippingScreen() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

     const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country);

   
    

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        navigate('/payment')
    }
    
  return (
    <div className='py-5'>
      <FormContainer>
              <h1>Shipping</h1>
              <CheckoutSteps step1 step2/>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter CityName"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter PostalCode"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Country Name"
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary" className="mt-3">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
}

export default ShippingScreen
