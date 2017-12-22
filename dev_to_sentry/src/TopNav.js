import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import './style.css';

class TopNav extends Component {
    render() {
        let brand = <a className='site-title'>DSent</a>;
        return (
            <Navbar fixedTop inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        {brand}
                    </Navbar.Brand>
                    <Nav>
                            
                            <NavItem eventKey={3} href="#section-1">section 1</NavItem>
                            <NavItem eventKey={4} href="#section-2">section 2</NavItem>
                            <NavItem eventKey={5} href="#section-3">section 3</NavItem>
                    </Nav>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>                    
                    <Nav pullRight> 
                        <NavItem eventKey={1}>Sign Up</NavItem>
                        <NavItem eventKey={2}>Sign In</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>);
    }
}
export default TopNav; 