import React, { Component } from 'react';
import Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import { connect } from 'react-redux';
import { logout } from '../action/loginActions';

class NavBarComponent extends Component {

    logout = () => {
        this.props.logout();
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="pricing">Pricing</Nav.Link>                    
                    </Nav>
                    <Nav>
                    {this.props.login !== undefined && (
                        <NavDropdown title={this.props.login.userName} id="collasible-nav-dropdown" className="dropleft">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    )}
                    <Nav.Link href="#about">About</Nav.Link>
                    {this.props.login !== undefined && this.props.login.role ==='[ROLE_ADMIN]' && (
                    <Nav.Link href="#createProduct">
                        Create product
                    </Nav.Link>
                    )}
                    {this.props.login === undefined && (
                        <Nav.Link href="#login">Login</Nav.Link>
                    )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default connect(
    (state)=> ({login: state.login.login}),
    {logout}
)(NavBarComponent );