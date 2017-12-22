import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/Stuff">Stuff</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/Stuff" component={Stuff}/>
                    <Route path="/Contact" component={Contact}/>
                </div>            
            </div>      
            </HashRouter>      
        );
    }
}
export default Main;