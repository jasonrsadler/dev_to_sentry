import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import axios from 'axios';
import Home from './Home';
import TopNav from './TopNav';
import How from './How';
import Devs from './Devs';
import Sentries from './Sentries';
import SignIn from './SignIn';

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
                <div>
                    <div>            
                        
                        <Switch className="site-title">                    
                            <Route exact path='/' component={Home} />
                            <Route path='/How' component={How} />
                            <Route path='/Devs' component={Devs} />
                            <Route path='/Sentries' component={Sentries} />
                            <Route path='/SignIn' component={SignIn} />
                        </Switch>
                        <div>
                            <section id="section-1" className="split-container" name="split">
                                <div className="left-side">
                                    <article className='split-article'>
                                        <Devs />
                                    </article>
                                </div>
                                <div className="right-side">
                                    <article className='split-article'>
                                        <How />
                                    </article>
                                </div>
                            </section>
                            <section id="section-2">section 2</section>
                            <section id="section-3">section 3</section>
                        </div>                    
                    </div>
                </div>
            </div>
            </BrowserRouter>
        );
    }
}
export default Main;   