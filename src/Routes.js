import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Answers from './components/lists/Answers';
import Subscribers from './components/lists/Subscribers';
import Login from './screens/Login';
import Main from './screens/main';

const SubscribersScreen = () => (
    <Main>
        <Subscribers/>
    </Main>
)

const AnswersScreen = () => (
    <Main>
        <Answers/>
    </Main>
)

export default props => (
    <Switch>
        <Route exact path='/login' component={Login}/>
        <Route path='/inscritos' component={SubscribersScreen}/>
        <Route path='/respostas' component={AnswersScreen}/>
        <Redirect from="/" exact to="/login" />
    </Switch>
)

