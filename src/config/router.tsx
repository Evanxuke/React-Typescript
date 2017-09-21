import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link,browserHistory } from 'react-router';
import {PathConfig} from './pathconfig';
import {RouterTest} from '../page/';
export let router=(
    <Router history={browserHistory}>
        <Route path={PathConfig.RouterTest} component={RouterTest} />
    </Router>
);
