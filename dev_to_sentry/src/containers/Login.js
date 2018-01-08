import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import validator from 'validator';
import Email from '../Registration/Email';
import '../style.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    validateForm() {
        return validator.isEmail(this.state.email.trim()) && this.state.password.trim().length > 6;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <Email />
                </form>
            </div>
        );
    }
}
export default Login;