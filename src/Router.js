import React, { Suspense, lazy } from "react"
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/spinner/LoadingSpinner"
import ProtectedRoute from "./global/routes/ProtectedRoute"
import PublicRoute from "./global/routes/PublicRoute"
//import ProtectedRoute from './utils/protectedRoute'
import { ContextLayout } from "./utils/context/Layout"
import { useParams } from "react-router";

//import "./index.scss";

// Route-based code splitting
const home = lazy(() => import("./screens/home/home"))
const doctors = lazy(() => import("./screens/doctors/doctors"))
const profile = lazy(() => import("./screens/profile/profile"))
const unauthorized = lazy(() => import("./screens/defaultPages/401"))
const notFound = lazy(() => import("./screens/defaultPages/404"))
const login = lazy(() => import("./screens/login/login"))

const supportsHistory = "pushState" in window.history;
// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, layout, ...rest }) => (
  <Route
    {...rest}
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
)
const mapStateToProps = state => {
  return {
    //user: state.auth.login.userRole
  }
}


const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <ProtectedRoute exact={true} path="/home" component={home} layout={"full"} permission={["administrator", "pacients", "doctors", "partners"]} />
          <PublicRoute exact={true} path="/login" component={login} layout={"full"} />
          <PublicRoute exact={true} path="/unauthorized" component={unauthorized} layout={"full"} />
          <PublicRoute exact={true} path="/" component={login} layout={"full"} />
          <ProtectedRoute exact={true} path="/doctors" component={doctors} layout={"horizontal"} permission={["administrator", "doctors"]} />
          {/*<ProtectedRoute exact={true} path="/doctors" component={doctors}  layout={"full"} permission={["administrator","pacients", "doctors", "partners"]} />*/}
          <ProtectedRoute exact path="/profile" component={profile} layout={"horizontal"} permission={["administrator", "doctors", "pacients"]} />
          {/*<ProtectedRoute path="/example" component={example} layout={"horizontal"} permission={["administrator","supervisor", "agent"]} />*/}
          <AppRoute component={notFound} layout={"full"} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
