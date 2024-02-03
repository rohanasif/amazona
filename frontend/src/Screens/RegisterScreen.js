import React, { useState, useEffect } from 'react';
import { Link , useLocation , useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import {  useDispatch, useSelector } from 'react-redux';
import Message from '../Components/Message';
import FormContainer from '../Components/FormContainer';
import Loader from '../Components/Loader';
import { register } from '../action/userAction';


function RegisterScreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
    
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister
    const redirect = location.search ? location.search.split('=') : "/"
    
    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [userInfo, redirect])
    
    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage("password do not match")
        } else {
            dispatch(register(name , email , password))
        }
    }
  return (
    <div className='py-5'>
      <FormContainer>
        <h1>Sign Up</h1>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>confirmPassword</Form.Label>
            <Form.Control
              type="confirmPassword"
              placeholder="Enter your confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
                  </Form.Group>
                  <Button type='submit' variant='primary' className='mt-3'>Register</Button>
              </Form>
              <Row className='py-3'>
                  <Col>
                      Have an a Account ? <Link to={redirect ? `/login$redirect=${redirect}`:"/login"}>Login</Link>
                  </Col>
              </Row>
      </FormContainer>
    </div>
  );
}

export default RegisterScreen
