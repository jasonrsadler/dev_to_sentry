import React, {Component} from 'react';
import { ControlLabel, FormControl, FormGroup, Col } from 'react-bootstrap';


export default class PasswordInfo extends Component {
    render() {
        return (
            <FormGroup controlId='password'>
                <Col componentClass={ControlLabel} sm={2}>
                    Password
                </Col>
                <Col sm={10}>
                    <FormControl
                        value={this.props.password}
                        onChange={this.props.update}
                        type='password'
                        placeholder='Password...'
                    />
                </Col>
            </FormGroup>
        )
    }
}