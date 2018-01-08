import React, {Component} from 'react';
import { ControlLabel, FormControl } from 'react-bootstrap';
import validator from 'validator';

class FirstName extends Component {
    constructor(props) {
        super(props);
        this.state = { className: '', value: '' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        var value = e.target.value;
        var className = validator.isAlpha(value.trim()) ? 'ok' : 'err';
        this.setState({className: className, value: value});
        console.log(className);
    }
    render() {
        return (
            <div>
                <ControlLabel>First Name</ControlLabel>
                <FormControl type='text' name='firstName' className={this.state.className} value={this.state.value} placeholder='First Name...' onChange={this.handleChange} />
            </div>
        )
    }
}
export default FirstName;