import React from 'react'
import {useState} from 'react';
import {Container, Form, Row, Button, Col} from "react-bootstrap";
import {Link} from "react-router-dom";


function handleSign(e){
    e.preventDefault();

}

function Signup() {
    const [name, setname] = useState(''); 
    const [email, setemail] = useState(''); 
    const [password, setpassword] = useState(''); 


    return (
        <Container> 
            <Row>
                <Col md={7} className="f-flex align-items-center justify-content-center flex-direction-column">
            <Form style={{width: "80%", maxWidth: 500}}>
            <h1> Create an account </h1>
           

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" onChange={(e) => setname(e.target.value)} value={name} required />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setemail(e.target.value)} value={email} required/>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} value={password} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Create an account
              </Button>
              <div> 
                <p> Already have an account? </p> 
                <Link to="/login"> Login here </Link>
                </div>
            </Form>
            </Col>
            </Row>
            </Container>
          );
         }

         export default Signup;
