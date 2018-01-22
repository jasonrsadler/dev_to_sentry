import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, Modal, FormControl} from "react-bootstrap";
import RouteNavItem from './components/RouteNavItem';
import Login from './containers/Login';
import Register from './containers/Register';
import './style.css';;



    
class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showLoginModal: false,
            showRegisterModal: false,
            password: '',
            passwordConf: '',
            pwdHash: '',
            status: '',
            feedback: ''
        };
    }
    closeLogin = () => {
        this.setState({ showLoginModal: false });
    }
    closeRegister = () => {        
        this.setState({ showRegisterModal: false })
    }
    openLogin = () => {
        this.setState({ showLoginModal: true });
    }
    openRegister = () => {
        this.setState({ showRegisterModal: true})
    }
    
    handleSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }

    handleFeedback = (data) => {
        this.setState({feedback: data});
    }
    render() {
        return (
            <div id="index">
                <Navbar fixedTop collapseOnSelect inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/" className='site-title'>DSentr</Link>
                        </Navbar.Brand> 
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>                    
                        <Nav pullRight> 
                            <RouteNavItem eventKey={3} href="/DevsHow">section 1</RouteNavItem>
                            <RouteNavItem eventKey={4} href="/Sentries">section 2</RouteNavItem>
                            <RouteNavItem eventKey={5} href="/section-3">section 3</RouteNavItem>
                            <RouteNavItem eventKey={6} href="#sign-up" onClick={this.openRegister}>Sign Up</RouteNavItem>
                            <RouteNavItem eventKey={7} href="#sign-in" onClick={this.openLogin}>Sign In</RouteNavItem>                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                <Modal show={this.state.showLoginModal} onHide={this.closeLogin} dialogClassName='modal'>
                    <Modal.Header closeButton>
                        <Modal.Title className='site-title'>Sign In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <span className='site-title'>Sign In To Continue</span>
                            <hr />
                            <Login url={process.env.API_AUTH_URL || 'http://localhost:3001/auth/' } />
                        </div>
                    </Modal.Body>
                    <div>
                        <FormControl.Feedback />
                    </div>
                </Modal>
                <Modal show={this.state.showRegisterModal} onHide={this.closeRegister} bsStyle='large'>
                    <Modal.Header closeButton>
                        <Modal.Title className='site-title'>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>                        
                            <span className='site-title'>Bringing Devs and Sentries Together</span>
                            <hr />
                            <Register url={process.env.API_AUTH_URL || 'http://localhost:3001/auth/' } feedback={this.handleFeedback} closeModal={this.closeRegister} />
                    </Modal.Body>
                    <Modal.Footer>
                        <FormControl.Feedback />
                        <span className='feedback'>{this.state.feedback}</span>
                    </Modal.Footer>
                </Modal>
          </div>            
        );            
    }    
}
export default TopNav; 