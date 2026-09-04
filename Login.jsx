import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import toast from 'react-hot-toast';
import { login } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();

 const dispatch = useDispatch();

 const navigate = useNavigate();
  function handelForm(event){
    event.preventDefault();
    const userEmail = emailRef.current.value;
    const userPassword = passwordRef.current.value;
    console.log(userEmail , userPassword); 
    //validtion
    if(!userEmail || !userPassword){
      toast.error("Invalid Data.");
      return ;
    } 
    // global 
    // login({email : userEmail , password : userPassword});
    dispatch(login({email : userEmail , password : userPassword})); // global ;
    navigate("/profile")
    // storage 
    localStorage.setItem("user" , JSON.stringify({userEmail ,userPassword}));
    
  }

  return (
   <Form  className='border-1 rounded-3 shadow-lg m-3 p-2' onSubmit={handelForm}>
    <Container>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  ref={passwordRef}/>
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Container>
    </Form>
  )
}
