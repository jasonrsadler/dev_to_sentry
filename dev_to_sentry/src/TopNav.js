import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, Modal, Button, FormControl} from "react-bootstrap";
import RouteNavItem from './components/RouteNavItem';
import Login from './containers/Login';
import './style.css';;



    
class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showModal: false,
            password: '',
            passwordConf: '',
            pwdHash: '',
            status: '',
            feedback: ''
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close() {
        this.setState({ showModal: false });
    }
    open() {
        this.setState({ showModal: true });
    }
    
    handleSubmi = (e) => {
        e.stopPropagation();
        e.preventDefault();
        var firstName = this.refs.firstName.state.className
            //email = this.refs.email.state.className;
        var feedback = [], status = '', ok = 'ok';
        if (!firstName !== ok) {
            feedback = 'Error on First Name';
            status = 'err';
            this.setState({status: status, feedback: feedback});
            return 0;
        }
    
        //let email = this.state.email.trim();
        //let password = this.state.password;
        //if (!email || !password) {
            //return;
        //}
        //this.props.onUserSubmit({ email: email, password: password })
        //this.setState({ email: '', password: '' });
        //console.log(`${this.state.email} registered`);
    }
    getValidationState() {
        return 'success';
    }
    validateForm() {
        //let first_name = this.state.firstName.trim();
        //let last_name = this.state.lastName.trim();
        //let email = this.state.email.trim();
        //return (validator.isAlpha(first_name) && validator.isAlpha(last_name) && validator.isEmail(email)) 
        return true;
    }
    render() {
        return (
            <div id="index">
                <Navbar fixedTop collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/" className='site-title'>DSentr</Link>
                        </Navbar.Brand> 
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>                    
                        <Nav pullRight> 
                            <RouteNavItem eventKey={3} href="/DevsHow" className="anchor">section 1</RouteNavItem>
                            <RouteNavItem eventKey={4} href="/Sentries" className="anchor">section 2</RouteNavItem>
                            <RouteNavItem eventKey={5} href="section-3" className="anchor">section 3</RouteNavItem>
                            <RouteNavItem eventKey={6} href="#sign-up" onClick={this.open}>Sign Up</RouteNavItem>
                            <RouteNavItem eventKey={7} href="#sign-in">Sign In</RouteNavItem>                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                <Modal show={this.state.showModal} onHide={this.close} bsClass='modal'>
                    <Modal.Header closeButton>
                        <Modal.Title className='site-title'>Sign Up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <span className='site-title'>Bringing Devs and Sentries Together</span>
                            <hr />
                            <Login url='https://localhost:3001/api/users' />
                        </div>
                    </Modal.Body>
                    <div>
                        <FormControl.Feedback />
                    </div>
                </Modal>
          </div>            
        );            
    }    
}
export default TopNav; 