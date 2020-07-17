import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Weblogo from "./Weblogo"
function Login()
{

return(
  <div className="login-form">
  <Weblogo/>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control className = "loginfield" type="email" placeholder="Enter your email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control className = "loginfield" type="password" placeholder="Enter your Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Rember me" />
  </Form.Group>
  <Button style= {{backgroundColor:"#028174",border:"none"}} type="submit" size="lg" block>
    Login
  </Button>
  <div className="innercontainer-login-form">
  <Button className="cancel-button" variant="danger" type="button">
    Cancle
  </Button>
  <span>Forgot <a href="#" style={{textDecoration:"underline", color:"#028174"}}> password?</a></span>
 <div style={{textAlign:"center",marginTop:"2rem"}}>Don't have any account <a href="#" style={{textDecoration:"underline", color:"#028174"}}> Signup</a></div>
  </div>
</Form>
</div>
);
}

export default Login;