import React, {Component} from 'react';
import { ControlLabel, FormControl, FormGroup, Col } from 'react-bootstrap';

class FirstName extends Component {
    
    render() {
        return (
            <FormGroup controlId='firstName'>
                <Col componentClass={ControlLabel} sm={2}>
                    First Name
                </Col>
                <Col sm={10}>
                    <FormControl 
                        type='text'
                        value={this.props.firstName}                     
                        onChange={this.props.update}
                        placeholder='First Name...' 
                    />
                </Col>
            </FormGroup>
        )
    }
}
export default FirstName;