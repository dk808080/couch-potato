import React from "react"
import sideMenuItems from "../sideMenuItems.js"
import Item from "./Item"
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function createItem(sideMenuItem) {
    return (
        <Item
            key={sideMenuItem.id}
            item={sideMenuItem.item}
        />
    );
}

function SideMenu() {
    return (
<div>
       <div id="sideMenu-section">
       <i class="fas fa-user user-icon-user-dashboard"></i>
       <h5 style = {{display:"inline", paddingLeft:"1rem", paddingBottom:"1rem"}}>Hello friend</h5>
       </div>
       <div id="sideMenu">
            <Navbar collapseOnSelect expand="lg">
            
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#features">{sideMenuItems.map(createItem)}</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        </div>

    );
}
export default SideMenu;