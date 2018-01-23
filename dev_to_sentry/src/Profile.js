import React, {Component} from 'react'
import axios from 'axios';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: '',
            email: ''
        }                          
    }
    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:3001/auth/profile' || process.env.API_AUTH_URL + '/profile').then(resp => {
            this.setState({  firstName: resp.data.firstName, lastName: resp.data.lastName, email: resp.data.email });
        });
    }
    render() {
        return (
            <div>
                <hr /><br/><br/>UserID: <span>{this.state.firstName} { this.state.lastName}, {decodeURIComponent(this.state.email)}</span>
            </div>
        );
    }
}