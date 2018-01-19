import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import axios from 'axios';
import TopNav from './TopNav';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] , isAuthenticated: false };
        this.handleUserSubmit = this.handleUserSubmit.bind(this);
    }
    userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated });
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
        const childProps = { 
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
        };
        return (
            <BrowserRouter >
                <div>
                    <TopNav onUserSubmit={this.handleUserSubmit} />
                    <Routes childProps={childProps} />            
                </div>
            </BrowserRouter>
        );
    }
}
export default Main;   