import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import {PathConfig} from './pathconfig';
import {RouterTest} from '../page/';

const history = hashHistory;

function checkAuth(nextState, replace) {
};
export let router = (
    <Router history={history}>
        <Route path={PathConfig.RouterTest} onEnter={checkAuth} component={RouterTest}/>
    </Router>
);
