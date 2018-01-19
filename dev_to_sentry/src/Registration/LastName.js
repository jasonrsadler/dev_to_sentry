import React, {Component} from 'react';
import { ControlLabel, FormControl, FormGroup, Col } from 'react-bootstrap';


class LastName extends Component {
    render() {
        return (
            <FormGroup controlId='lastName'>
                <Col componentClass={ControlLabel} sm={2}>
                    Last Name
                </Col>
                 <Col sm={10}>
                    <FormControl 
                        type='text'
                        value={this.props.lastName}                     
                        onChange={this.props.update}
                        placeholder='Last Name...' 
                    />
                </Col>
            </FormGroup>
        )
    }
}
export default LastName;