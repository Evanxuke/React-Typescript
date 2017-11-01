import * as React from 'react';
import {withRouter} from 'react-router';
import {injectIntl,InjectedIntlProps} from "react-intl";


interface RouterTestProps extends ReactRouter.RouteComponentProps<any, any>,InjectedIntlProps{}
interface RouterTestStates{}


class RouterTest extends React.Component<RouterTestProps,RouterTestStates>{
    render(){
        return <div>{this.props.children}</div>;
    }
}

export default injectIntl(withRouter(RouterTest));
