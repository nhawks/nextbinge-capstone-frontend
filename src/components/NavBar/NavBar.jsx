import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { MDBPagination, MDBPaginationItem } from 'mdb-react-ui-kit';

const NavBar = (props) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
            <Navbar.Brand>
                <Link to="/home" className="nav-link">
                    <i className="fas fa-tv"></i>
                    NextBinge
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
                <i className="bi bi-list fa-lg"></i>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    {!props.auth &&
                        <Link to="/access" className="nav-link">
                            <i className="bi bi-person-workspace"></i>
                                Login/Register
                        </Link>
                    }
                    {props.auth &&
                        <React.Fragment>
                            <Nav.Link>
                                <Link to="/home" className="nav-link">
                                    <i className="bi bi-house-fill"></i>
                                        Home
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/search" className="nav-link">
                                    <i className="bi bi-tv-fill"></i>
                                        Search
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/watchlist" className="nav-link">
                                    <i className="bi bi-person-circle"></i>
                                        My Watchlist
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/account" className="nav-link">
                                    <i className="bi bi-person-circle"></i>
                                        My Account
                                </Link>
                            </Nav.Link>
                            <Nav.Link onClick={props.logout}>
                                <Link className="nav-link">
                                    <i className="bi bi-box-arrow-right"></i>
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