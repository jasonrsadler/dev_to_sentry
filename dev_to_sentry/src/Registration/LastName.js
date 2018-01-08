import React, {Component} from 'react';
import { ControlLabel, FormControl } from 'react-bootstrap';


class LastName extends Component {
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
            <div>
                <ControlLabel>Last Name</ControlLabel>
                <FormControl type='text' name='lastName' className={this.state.className} value={this.state.value} placeholder='Last Name...' onChange={this.handleChange} />
            </div>
        )
    }
}
export default LastName;