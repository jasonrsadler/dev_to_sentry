import React, {Component} from 'react';
import { ControlLabel, FormControl } from 'react-bootstrap';


class PasswordInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { className: '', value: '' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        var value = e.target.value;
        var className = value ? 'ok' : 'err';
        this.setState({className: className, value: value});
        //bCrypt.genSalt(this.saltRounds, function(err, salt) { 
            //bCrypt.hash(this.password, salt, function(err, hash) {
                //pwdHash: hash;
            //});
        //});
    }
    render() {
        return (
            <div>
                <ControlLabel>Password</ControlLabel>
                <FormControl type='password' name='password' id='password' className={this.state.value} value={this.state.value} placeholder='Password...' onChange={this.handleChange} />
            </div>
        )
    }
}
export default PasswordInfo;