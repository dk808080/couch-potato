
import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Weblogo from "./Weblogo"

function Signup()
{

    return(
      <div className="login-form">
      <Weblogo/>
    <Form>
    <Form.Group controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control className = "loginfield" type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className = "loginfield" type="email" placeholder="Enter your email" />
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className = "loginfield" type="password" placeholder="Enter your Password" />
      </Form.Group>
      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control className = "loginfield" type="password" placeholder="Confirm your Password" />
      </Form.Group>
      
      <Button style= {{backgroundColor:"#028174",border:"none"}} type="submit" size="lg" block>
        Signup
      </Button>
      <div className="innercontainer-login-form">
      <Button className="cancel-button" variant="danger" type="button">
        Cancle
      </Button>
      <span>Already have an account <a href="#" style={{textDecoration:"underline", color:"#028174"}}> Login</a></span>
      </div>
    </Form>
    </div>
    );
    }

    export default Signup;