import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';


const NavBar = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <Link to="/" className="nav-link">
                    React-Bootstrap
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
                <i class="bi bi-list fa-lg"></i>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    {!props.user &&
                        <Link to="/access" className="nav-link">
                            <i class="bi bi-person-workspace"></i>
                            | Login/Register
                        </Link>
                    }
                    {props.user && <h4>{props.user.username}</h4>}
                    {props.user &&
                        <React.Fragment>
                            <Nav.Link>
                                <Link to="/home" className="nav-link">
                                    <i class="bi bi-house-fill"></i>
                                    | Home
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/search" className="nav-link">
                                    <i class="bi bi-tv-fill"></i>
                                    | Search
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/account" className="nav-link">
                                    <i class="bi bi-person-circle"></i>
                                    | My Account
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <i class="bi bi-box-arrow-right"></i>
                                | Logout
                            </Nav.Link>
                        </React.Fragment>
                    }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;