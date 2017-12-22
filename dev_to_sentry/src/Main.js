import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Home from './Home';
import TopNav from './TopNav';
import How from './How';
import Devs from './Devs';
import Sentries from './Sentries';
import SignIn from './SignIn';
import SignUp from './SignUp';

class Main extends Component {
    
    render() {
        return (
            <BrowserRouter>
            <div>
            <TopNav />
                <div className="split-container">            
                    
                    <Switch className="site-title">                    
                        <Route path='/How' component={How} />
                        <Route path='/Devs' component={Devs} />
                        <Route path='/Sentries' component={Sentries} />
                        <Route exact path='/' component={Home} />
                        <Route path='/SignUp' component={SignUp} />
                        <Route path='/SignIn' component={SignIn} />
                    </Switch>
                    <div className="site-title">
                        <section id="section-1">section 1</section>
                        <section id="section-2">section 2</section>
                        <section id="section-3">section 3</section>
                    </div>
                    <section id="section-1">
                        <div className="left-half">
                            <article>
                                <How />
                            </article>
                        </div>
                        <div className="right-half">
                            <article>
                                <Devs />
                            </article>
                        </div>
                    </section>
                </div>
                </div>
            </BrowserRouter>
        );
    }
}
export default Main;