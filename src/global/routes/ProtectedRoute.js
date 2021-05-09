import React, { Suspense } from "react"
import { Route } from "react-router-dom";
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'
import { ContextLayout } from "../../utils/context/Layout"
import Spinner from "../../components/spinner/LoadingSpinner"
//import { doSignIn, getUser, doSignOut, isAuthenticated, access_token } from "../../utils/auth"
//import jwt from 'jwt-decode'
import { isAuthenticated } from "../../utils/auth"

class ProtectedRoute extends React.Component {

    

    render() {
        const Component = this.props.component;
        const { layout, permission } = this.props;
        const user = this.props && this.props.user && this.props.user.user && this.props.user.user.access_token
        const loggedUser = {
            role: "doctors"
        }
        //SERÁ PRECISO PEGAR O USERLEVEL PARA BLOQUEAR ESTA TELA
        return isAuthenticated() ? (
            permission.includes(loggedUser.role) ?
                <Route
                render={props => {
                return (
                    <ContextLayout.Consumer>
                    {context => {
                        let LayoutTag =
                        layout === 'blank' ? 
                        context.blankLayout :
                        layout === 'full'
                            ? context.fullLayout
                            : layout === "horizontal"
                            ? context.horizontalLayout
                            : context.VerticalLayout
                        return (
                        <LayoutTag {...props} permission={props.user}>
                            <Suspense fallback={<Spinner />}>
                            <Component {...props} pageMatch={this.props.computedMatch} />
                            </Suspense>
                        </LayoutTag>
                        )
                    }}
                    </ContextLayout.Consumer>
                )
                }}
            />
            :
            <Redirect to={{ pathname: '/unauthorized' }} />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        )

    }
}

const mapStateToProps = state => {
    return {
      user: state.auth
    }
  }

  export default connect(mapStateToProps, {})(ProtectedRoute)

