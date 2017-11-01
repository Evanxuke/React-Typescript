import * as React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {PathConfig} from './pathconfig';
import {RouterTest, Home, Store} from '../page/';

const history = hashHistory;

declare global {
    interface Window {
        openWithHash?: (url?: string, target?: string, features?: string, replace?: boolean) => Window;
        openInTabWithHash?: (url: string) => void;
    }
}

function checkAuth(nextState, replace) {
};

export let router = (
    <Router history={hashHistory}>
        <Route path={PathConfig.RouterTest} onEnter={checkAuth} component={RouterTest}>
            <IndexRoute component={Home}/>
            <Route path="/Store" component={Store}/>
        </Route>
    </Router>
);
