import React, { Component } from 'react';
//import bCrypt from 'bcrypt';
import {Nav, Navbar, NavItem, Modal, Button, ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import './style.css';



    
class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showModal: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConf: '',
            pwdHash: ''
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordConfChange = this.handlePasswordConfChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    close() {
        this.setState({ showModal: false });
    }
    open() {
        this.setState({ showModal: true });
    }
    handleFirstNameChange() {

    }
    handleLastNameChange() {

    }
    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
        //bCrypt.genSalt(this.saltRounds, function(err, salt) { 
            //bCrypt.hash(this.password, salt, function(err, hash) {
                //pwdHash: hash;
            //});
        //});
    }
    handlePasswordConfChange(e) {
        this.setState({passwordConf: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        let email = this.state.email.trim();
        let password = this.state.password;
        if (!email || !password) {
            return;
        }
        this.props.onUserSubmit({ email: email, password: password })
        this.setState({ email: '', password: '' });
        console.log(`${this.state.email} registered`);
    }
    getValidationState() {
        return 'success';
    }
    validateForm() {
        return false;
    }
    render() {
        let brand = <a href="/#index" className='site-title'>DSentr</a>;
        return (
            <div id="index">
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
                            <NavItem  href='#signup' onClick={this.open}>Sign Up</NavItem>
                            <NavItem>Sign In</NavItem>                            
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
                            <ControlLabel></ControlLabel>
                            <hr />
                            <form action='' method='POST'>
                                <FormGroup controlId='firstName' bsSize='small' validationState={this.getValidationState()}>
                                    <ControlLabel>Email Address</ControlLabel>
                                    <FormControl type='text' value={this.state.email} placeholder='Email...' onChange={this.handleEmailChange} />
                                    <ControlLabel>Password</ControlLabel>
                                    <FormControl type='password' value={this.state.password} placeholder='Password...' onChange={this.handlePasswordChange} />
                                    <ControlLabel>First Name</ControlLabel>
                                    <FormControl type='text' value={this.state.firstName} placeholder='First Name...' onChange={this.handleFirstNameChange} />
                                    <ControlLabel>Last Name</ControlLabel>
                                    <FormControl type='text' value={this.state.lastName} placeholder='Last Name...' onChange={this.handleLastNameChange} />
                                    <Button type='submit' onClick={this.handleSubmit}>Register</Button>                                    
                                </FormGroup>                                
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsSize='small' disabled={!this.validateForm()} onClick={this.close}>Close</Button>
                    </Modal.Footer>
                    <div>
                        <FormControl.Feedback />
                    </div>
                </Modal>
          </div>            
        );            
    }    
}
export default TopNav; 