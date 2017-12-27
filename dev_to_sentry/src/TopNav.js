import React, { Component } from 'react';
import {Nav, Navbar, NavItem, Modal, Button} from "react-bootstrap";
import SignUp from './SignUp';
import './style.css';


    
class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false }
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close() {
        this.setState({ showModal: false });
    }
    open() {
        this.setState({ showModal: true });
    }
    render() {
        let brand = <a href="/#index" className='site-title'>DSentr</a>;
        return (
            <div id="index" className="navbar">
                <Navbar fixedTop inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            {brand}
                        </Navbar.Brand>
                        <Nav>                            
                            <NavItem eventKey={3} href="#section-1" className="anchor">section 1</NavItem>
                            <NavItem eventKey={4} href="#section-2" className="anchor">section 2</NavItem>
                            <NavItem eventKey={5} href="#section-3" className="anchor">section 3</NavItem>
                        </Nav>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>                    
                        <Nav pullRight> 
                            <NavItem eventKey={2} onClick={this.open}>Sign Up</NavItem>
                            <NavItem>Sign In</NavItem>                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title className='site-title'>Sign Up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            This is a test
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
          </div>
            
        );
            
    }
    
}
export default TopNav; 