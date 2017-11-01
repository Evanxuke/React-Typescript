import * as React from 'react';
export interface BasePageProps {

}
export interface BasePageStates {

}
export class BasePage extends React.Component<BasePageProps, BasePageStates> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className={'red'}>
            {this.props.children}
        </div>;
    }
}
