import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar variant="dark" className="mealdb-nav bg-dark" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className="nav-brand">
                    <NavLink
                        to="/home"
                        style={{ textDecoration: "none", color: "#ff9e32" }}
                    >
                        <h2>MealDB</h2>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="nav-menu">
                            <NavLink
                                to="/home"
                                style={{ textDecoration: "none", color: "#ff9e32" }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                Home
                            </NavLink>
                        </Nav.Link>

                        <Nav.Link className="nav-menu">
                            <NavLink
                                to="/meals"
                                style={{ textDecoration: "none", color: "#ff9e32" }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                Meals
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;