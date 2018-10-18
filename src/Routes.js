import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Answers from './components/lists/Answers';
import Subscribers from './components/lists/Subscribers';


export default props => (
    <Switch>
        <Route exact path='/inscritos' component={Subscribers}/>
        <Route path='/respostas' component={Answers}/>
        <Redirect from="/" exact to="/inscritos" />
    </Switch>
)

