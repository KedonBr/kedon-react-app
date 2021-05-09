import React, { Suspense } from "react"
import { Route } from "react-router-dom";

import { Redirect } from 'react-router-dom'
import { ContextLayout } from "../../utils/context/Layout"
import Spinner from "../../components/spinner/LoadingSpinner"
import { isAuthenticated } from "../../utils/auth"

class PublicRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const { layout } = this.props;

        return !isAuthenticated() ? (
            <Route
                render={props => {
                return (
                    <ContextLayout.Consumer>
                    {context => {
                        let LayoutTag =
                        layout === 'full'
                            ? context.fullLayout
                            : layout === "horizontal"
                            ? context.horizontalLayout
                            : context.VerticalLayout
                        return (
                        <LayoutTag {...props} permission={props.user}>
                            <Suspense fallback={<Spinner />}>
                                <Component {...props} />
                            </Suspense>
                        </LayoutTag>
                        )
                    }}
                    </ContextLayout.Consumer>
                )
                }}
            />
        ) : isAuthenticated() ? 
            <Route
            render={props => {
            return (
                <ContextLayout.Consumer>
                {context => {
                    let LayoutTag =
                    layout === 'full'
                        ? context.fullLayout
                        : layout === "horizontal"
                        ? context.horizontalLayout
                        : context.VerticalLayout
                    return (
                    <LayoutTag {...props} permission={props.user}>
                        <Suspense fallback={<Spinner />}>
                            <Component {...props} />
                        </Suspense>
                    </LayoutTag>
                    )
                }}
                </ContextLayout.Consumer>
            )
            }}
        />
        :(
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

export default PublicRoute;