import React, {Component} from 'react';
import { ControlLabel, FormControl, FormGroup, Col } from 'react-bootstrap';


export default class PasswordConf extends Component {
    render() {
        return (
            <FormGroup controlId='passwordConf'>
                <Col componentClass={ControlLabel} sm={2}>
                    Confirm Password
                </Col>
                <Col sm={10}>
                    <FormControl
                        value={this.props.passwordConf}
                        onChange={this.props.update}
                        type='password'
                        placeholder='Confirm Password...'
                    />
                </Col>
            </FormGroup>
        )
    }
}