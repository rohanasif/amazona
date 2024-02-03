import React , {useState} from 'react'
import { Form, Button, Col } from "react-bootstrap";
import {  useDispatch, useSelector } from 'react-redux';
import FormContainer from '../Components/FormContainer';
import CheckoutSteps from '../Components/CheckoutSteps';
import { savePaymentMethod } from "../action/cartAction";
import { useNavigate } from 'react-router-dom';

function PaymentScreen() {

    const navigate=useNavigate()
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart
    
    if (!shippingAddress.address) {
        navigate('/shipping')
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal')
    
    const dispatch = useDispatch()
    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }
  return (
    <div className='py-5'>
          <FormContainer>
              <CheckoutSteps step1 step2 step3 />
              <h1>Payment Method</h1>
              <Form onSubmit={submitHandler}>
                  <Form.Group>
                      <Form.Label as='legend'>
                          Select Method
                          <Col>
                              <Form.Check type='radio' label='PayPal or credit Card' id='PayPal' name='paymentMethod' checked onChange={(e)=>setPaymentMethod(e.target.value)}>    
                          </Form.Check>
                          </Col>
                      </Form.Label>
                  </Form.Group>
                  <Button type='submit' variant='primary' className='mt-3'>continue</Button>
              </Form>
      </FormContainer>
    </div>
  )
}

export default PaymentScreen
