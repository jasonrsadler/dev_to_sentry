import React, {Component} from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';


class PasswordInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { password: '' };
    }
    render() {
        return (
            <FormGroup controlId='password' bsSize='large'>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                    value={this.props.password}
                    onChange={this.props.update}
                    type='password'
                    placeholder='Password...'
                />
            </FormGroup>
        )
    }
}
export default PasswordInfo;