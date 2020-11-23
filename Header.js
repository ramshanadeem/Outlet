import React, { Component } from 'react';
import xyz from '../images/logo.PNG';
import shoe1 from '../images/shoe1.PNG'

import shoe2 from '../images/shoe2.PNG'

import shoe3 from '../images/shoe3.PNG'

import shoe4 from '../images/shoe4.PNG'



import { Button, Col, Row, Container, Card, Modal, NavDropdown, ButtonGroup, Dropdown, openModal, closeModal, Navbar, Nav, } from 'react-bootstrap';
function Header() {

    return (
        <div>


            <img style={{ paddingLeft: '500px', width: '50%' }} className="logo" src={xyz} />
            <Navbar bg="light" expand="lg">

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#link">CART</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>




    );
}

export default Header;