import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = (props) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
            <Navbar.Brand>
                <Link to="/home" className="nav-link text-white">
                    <button type="button" className="btn btn-primary btn-floating btn-sm me-1">
                    <i className="fas fa-couch fa-lg"></i>
                    </button>
                    NextBinge
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
                <i className="bi bi-list fa-lg"></i>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    {!props.auth &&
                        <React.Fragment>
                        <Link to="/access" className="nav-link">
                            <i className="me-1 bi bi-box-arrow-in-right"></i>
                                Login/Register
                        </Link>
                         <Link to="/about" className="nav-link">
                             <i className="me-1 bi bi-info-circle"></i>
                                 About
                         </Link>
                     </React.Fragment>
                    }
                    {props.auth &&
                        <React.Fragment>
                            <Nav.Link>
                                <Link to="/home" className="nav-link">
                                    <i className="me-1 bi bi-house-fill"></i>
                                        Home
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/search" className="nav-link">
                                    <i className="me-1 bi bi-search"></i>
                                        Search
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/watchlist" className="nav-link">
                                    <i className="me-1 bi bi-collection-play-fill"></i>
                                    My Watchlist
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/account" className="nav-link">
                                    <i className="me-1 bi bi-person-circle"></i>
                                        My Account
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/about" className="nav-link">
                                    <i className="me-1 bi bi-info-circle"></i>
                                        About
                                </Link>
                            </Nav.Link>
                            <Nav.Link onClick={props.logout}>
                                <Link className="nav-link">
                                    <i className="me-1 bi bi-box-arrow-right"></i>
                                        Logout
                                </Link>
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