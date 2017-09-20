import * as React from 'react';
import {render} from "react-dom";
import {Page} from './page';

require.ensure([], () => {
    require("./themes/main.less");
}, "main.css");

render(<Page />, document.getElementById('app_content'));
