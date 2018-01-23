import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
export default class FlashAlert extends Component {
    dismissAlert = () => {
        this.props.hideAlert();
    }
    render() {        
        const alertClass = `alert alert-margin alert-${this.props.style}`;
        return (
            <Alert bsStyle={this.props.style} onDismiss={this.dismissAlert}>
                <p>{this.props.text}</p>
            </Alert>
        );        
    }
}