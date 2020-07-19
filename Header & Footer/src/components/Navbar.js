import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';


function Navbar() {
    return (
        <ReactBootStrap.Navbar collapseOnSelect expand="lg"
            style={{
                backgroundColor: 'lightgreen'
            }} >
            <ReactBootStrap.Navbar.Brand href="#home">
                Couch-Potato
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.Form inline>
                        <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <ReactBootStrap.Button variant="outline-primary">Search</ReactBootStrap.Button>
                    </ReactBootStrap.Form>

                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                    <ReactBootStrap.NavDropdown title="My Account" id="collasible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="#action/1.1">
                            <i class="fa fa-user-plus" aria-hidden="true"></i>  Sign Up</ReactBootStrap.NavDropdown.Item>

                        <ReactBootStrap.NavDropdown.Divider />
                        <ReactBootStrap.NavDropdown.Item href="#action/1.2">
                            <i class="fa fa-sign-in" aria-hidden="true"></i>  Login</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>  My Cart
      </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    )
}

export default Navbar;