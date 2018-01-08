import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import DevsHow from './containers/DevsHow';
import Sentries from './containers/Sentries';
import NotFound from './containers/NotFound';
import SignIn from './SignIn';


export default () =>
<Switch>
    <Route path="/" exact component={Home} />
    <Route path='/DevsHow' component={DevsHow} />
    <Route path='/Sentries' component={Sentries} />
    <Route component={NotFound} />
</Switch>;