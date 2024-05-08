import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar as BootstrapNavbar, Nav, Button, Image } from 'react-bootstrap';


const Navbar = () => {
    const state = useSelector(state => state.handleCart);

    return (
        <BootstrapNavbar collapseOnSelect expand="lg" bg="white" variant="white" className="py-3 sticky-top">
            <div className="container">
                <NavLink to="/">
                        <Image src="https://www.marks-iplaw.jp/wp-content/uploads/2020/12/El-Clasico.jpg" alt="Logo" className="logo-img" style={{ width: '200px' }} />
                </NavLink>
                <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <BootstrapNavbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto my-2 text-center">
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/" className="text-dark">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/product" className="text-dark">Products</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/about" className="text-dark">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/contact" className="text-dark">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="buttons text-center">
                        <Button as={NavLink} to="/login" variant="outline-dark" className="m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</Button>
                        <Button as={NavLink} to="/register" variant="outline-dark" className="m-2"><i className="fa fa-user-plus mr-1"></i> Register</Button>
                        <Button as={NavLink} to="/cart" variant="outline-dark" className="m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})</Button>
                    </div>
                </BootstrapNavbar.Collapse>
            </div>
        </BootstrapNavbar>
    );
};

export default Navbar;
