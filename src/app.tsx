import * as React from 'react';
import {render} from "react-dom";
import {router} from './config/router';
import {Page} from './page1';

require.ensure([], () => {
    require("./themes/main.less");
}, "main.css");

render(<Page></Page>, document.getElementById('app_content'));
