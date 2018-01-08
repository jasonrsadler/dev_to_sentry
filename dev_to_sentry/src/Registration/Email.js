import React, {Component} from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';


class Email extends Component {
    constructor(props) {
        super(props);
        this.state = { className: '', value: '' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        var value = e.target.value;
        var className = value ? 'ok' : 'err';
        this.setState({className: className, value: value});

    }
    render() {
        return (
            <FormGroup controlId='email'>
                <ControlLabel>Email Address</ControlLabel>
                <FormControl autoFocus
                    type='email'
                    value={this.state.value} placeholder='Email...' 
                    onChange={this.handleChange} />
            </FormGroup>
        )
    }
}
export default Email;