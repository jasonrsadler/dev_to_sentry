import React, { Component } from 'react';
import validator from 'validator';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import FirstName from '../Registration/FirstName';
import LastName from '../Registration/LastName';
import Email from '../Registration/Email';
import PasswordInfo from '../Registration/PasswordInfo';
import PasswordConf from '../Registration/PasswordConf';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { firstName: '', lastName: '', email: '', password: '', passwordConf: '' };
    }
    validateForm = () => {

        return validator.isEmail(this.state.email.trim()) && this.state.password.trim().length > 6 && validator.isAlpha(this.state.firstName) &&
            validator.isAlpha(this.state.lastName) && (this.state.password === this.state.passwordConf);
    }
    handleChange = event => {        
        this.setState({[event.target.id]: event.target.value });   
    }
    handleSubmit = event => {
        event.preventDefault();   
        
        const email = encodeURIComponent(this.state.email);
        const password = encodeURIComponent(this.state.password);
        const firstName = encodeURIComponent(this.state.firstName);
        const lastName = encodeURIComponent(this.state.lastName);
        const passwordConf = encodeURIComponent(this.state.passwordConf);
        let authInfo = {firstName: firstName, lastName: lastName, email: email, password: password, passwordConf: passwordConf};
        axios.post(this.props.url + '/register', authInfo).then(res => {
            if (!res.data.redirectUrl) {
                this.props.feedback(res.data.msg);
                this.props.showAlert(res.data.msg, 'danger');
            }
            else {
                this.props.closeModal();
                this.props.history.push(res.data.redirectUrl);
            }
        })
        .catch(err => {
            console.error('Error: ' + err);
        });
    }
    render() {
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <Email email={this.state.email} update={this.handleChange}/>
                <FirstName firstName={this.state.firstName} update={this.handleChange} />
                <LastName lastName={this.state.lastName} update={this.handleChange} />
                <PasswordInfo password={this.state.password} update={this.handleChange}/>
                <PasswordConf passwordConf={this.state.passwordConf} update={this.handleChange} />
                <Button
                    block
                    disabled={!this.validateForm()}
                    type='submit'
                >
                Register
                </Button>
            </Form>
        )
    }
}
export default withRouter(Register);