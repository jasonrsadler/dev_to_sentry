import React, {Component} from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';


class Email extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '' };
    }
    
    render() {
        return (
            <FormGroup controlId='email' bsSize='large'>
                <ControlLabel>Email Address</ControlLabel>
                <FormControl autoFocus
                    type='email'
                    value={this.props.email}                     
                    onChange={this.props.update}
                    placeholder='Email...' 
                />
            </FormGroup>
        )
    }
}
export default Email;