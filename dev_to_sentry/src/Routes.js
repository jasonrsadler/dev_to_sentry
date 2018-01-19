import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import DevsHow from './containers/DevsHow';
import Sentries from './containers/Sentries';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Profile from './Profile';


export default () =>
<Switch>
    <Route path="/" exact component={Home} />
    <Route path='/login' exact component={Login} />
    <Route path='/DevsHow' component={DevsHow} />
    <Route path='/Sentries' component={Sentries} />
    <Route path='/Profile' component={Profile} />
    <Route component={NotFound} />
</Switch>;