import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import FormContainer from "../Components/FormContainer";
import { getUserDeatils , updateUser } from "../action/userAction";
import { USER_UPDATE_RESET } from "../constants/userConstants";
import { useParams, useNavigate } from "react-router-dom";


const UserEditScreen = () => {
    
    const { id } = useParams()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userUpdate = useSelector((state) => state.userUpdate);
    const {
      loading: loadingUpdate,
      error: errorUpdate,
      success: successUpdate,
    } = userUpdate;

    useEffect(() => {
      if (successUpdate) {
        dispatch({ type: USER_UPDATE_RESET });
        navigate("/admin/userlist");
      } else {
        if (!user.name || user._id !== id) {
          dispatch(getUserDeatils(id));
        } else {
          setName(user.name);
          setEmail(user.email);
          setIsAdmin(user.isAdmin);
        }
      }
    }, [dispatch, navigate , id, user, successUpdate]);

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(updateUser({ _id: id, name, email, isAdmin }));
    };
 return (
   <>
     <Link to="/admin/userlist" className="btn btn-light my-3">
       Go Back
     </Link>
     <FormContainer>
       <h1>Edit User</h1>
       {loadingUpdate && <Loader />}
       {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
       {loading ? (
         <Loader />
       ) : error ? (
         <Message variant="danger">{error}</Message>
       ) : (
         <Form onSubmit={submitHandler}>
           <Form.Group controlId="name">
             <Form.Label>Name</Form.Label>
             <Form.Control
               type="name"
               placeholder="Enter name"
               value={name}
               onChange={(e) => setName(e.target.value)}
             ></Form.Control>
           </Form.Group>

           <Form.Group controlId="email">
             <Form.Label>Email Address</Form.Label>
             <Form.Control
               type="email"
               placeholder="Enter email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             ></Form.Control>
           </Form.Group>

           <Form.Group controlId="isadmin">
             <Form.Check
               type="checkbox"
               label="Is Admin"
               checked={isAdmin}
               onChange={(e) => setIsAdmin(e.target.checked)}
             ></Form.Check>
           </Form.Group>

           <Button type="submit" variant="primary">
             Update
           </Button>
         </Form>
       )}
     </FormContainer>
   </>
 );
}
export default UserEditScreen


