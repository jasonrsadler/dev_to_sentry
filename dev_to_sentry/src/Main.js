import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Home from './Home';
import TopNav from './TopNav';
import How from './How';
import Devs from './Devs';
import Sentries from './Sentries';
import SignIn from './SignIn';

class Main extends Component {
    
    render() {
        return (
            <BrowserRouter>
            <div>
                <TopNav />
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

//original jsx
//<BrowserRouter>
//<div id="index">
//<TopNav />
//    <div className="split-container">            