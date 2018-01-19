import React, {Component} from 'react';
import { ControlLabel, FormControl, FormGroup, Col } from 'react-bootstrap';


export default class Email extends Component {
    render() {
        return (
            <FormGroup controlId='email'>
                <Col componentClass={ControlLabel} sm={2}>
                    Email
                </Col>
                <Col sm={10}>
                    <FormControl autoFocus
                        type='email'
                        value={this.props.email}                     
                        onChange={this.props.update}
                        placeholder='Email...' 
                    />
                </Col>
            </FormGroup>
        )
    }
}