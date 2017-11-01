import * as React from 'react';
import {render} from "react-dom";
//import router from './config/router';
import {BasePage} from './basepage';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

require.ensure([], () => {
    require("./themes/main.less");
}, "main.css");

render(<Router/>, document.getElementById('app_content'));
