import * as React from 'react';
import {withRouter} from 'react-router';
import {injectIntl, InjectedIntlProps} from "react-intl";


export interface RouterTestProps extends ReactRouter.RouteComponentProps<any, any>, InjectedIntlProps {
}
export interface RouterTestStates {
}


export class RouterTest extends React.Component<RouterTestProps, RouterTestStates> {
    render() {
        return <div>{'asdasd'}</div>;
    }
}

export default injectIntl(withRouter(RouterTest));
