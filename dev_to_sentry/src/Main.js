import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import axios from 'axios';
import TopNav from './TopNav';
import DevsHow from './containers/DevsHow';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.handleUserSubmit = this.handleUserSubmit.bind(this);
    }
    handleUserSubmit(user) {
        console.log('entering user submit');
        let users = this.state.data;
        this.setState({ data: users });
        console.log('posting data');
        axios.post(this.props.url, user)
        .catch(err => {
            console.error(err);
            this.setState({ data: users});
        }); 
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <TopNav onUserSubmit={this.handleUserSubmit} />
                    <Routes />            
                </div>
            </BrowserRouter>
        );
    }
}
export default Main;   