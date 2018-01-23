import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import axios from 'axios';
import TopNav from './TopNav';
import FlashAlert from './components/Alert';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] , isAuthenticated: false, alertVisible: false, alertText: '', alertStyle: 'info' };
    }
    userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated });
    }
    handleUserSubmit = user => {
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
    handleAlertDismiss = () => {
        this.setState({ alertVisible: false, alertText: '', alertStyle: 'success' })
    }
    handleAlertShow = (text, style) => {
        this.setState({ alertVisible: true, alertText: text, alertStyle: style });
    }
    render() {
        const childProps = { 
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
        };
        let alert = null;
        if (this.state.alertVisible) {
            console.log(this.state.alertVisible);
            alert = <FlashAlert text={this.state.alertText} visible={this.state.alertVisible} style={this.state.alertStyle} hideAlert={this.handleAlertDismiss} />;
        }
        return (
            <BrowserRouter >
                <div>
                    {alert}
                    <TopNav onUserSubmit={this.handleUserSubmit}  showAlert={this.handleAlertShow} hideAlert={this.handleAlertDismiss} />
                    <Routes childProps={childProps} />            
                </div>
            </BrowserRouter>
        );
    }
}
export default Main;   