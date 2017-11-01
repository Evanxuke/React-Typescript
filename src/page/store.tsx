import * as React from 'react';
import {withRouter} from 'react-router';
import {injectIntl,InjectedIntlProps} from "react-intl";


interface StoreProps extends ReactRouter.RouteComponentProps<any, any>,InjectedIntlProps{}
interface StoreStates{}


class Store extends React.Component<StoreProps,StoreStates>{
    render(){
        return <div>{'Store'}</div>;
    }
}

export default injectIntl(withRouter(Store));
