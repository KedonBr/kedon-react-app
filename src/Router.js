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
const unauthorized = lazy(() => import("./screens/defaultPages/401"))
const notFound = lazy(() => import("./screens/defaultPages/404"))
const login = lazy(() => import("./screens/login/login"))
const register = lazy(() => import("./screens/register/register"))
const recoverPassword = lazy(() => import("./screens/recoverPassword/recoverPassword"))
const newPassword = lazy(() => import("./screens/newPassword/newPassword"))
const consultations = lazy(() => import("./screens/consultations/consultations"))
const payment = lazy(() => import("./screens/payment/payment"))
const healthHistory = lazy(() => import("./screens/healthHistory/healthHistory"))
const addDocument = lazy(() => import("./screens/healthHistory/addDocument/addDocument"))
const documents = lazy(() => import("./screens/documents/documents"))
const profile = lazy(() => import("./screens/profile/profile"))
const editProfile = lazy(() => import("./screens/profile/editProfile/editProfile"))
const editPlan = lazy(() => import("./screens/profile/editPlan/editPlan"))
const notifications = lazy(() => import("./screens/notifications/notifications"))
const medicalRecords = lazy(() => import("./screens/healthHistory/medicalRecords/medicalRecords"))
const prescriptions = lazy(() => import("./screens/healthHistory/prescriptions/prescriptions"))
const healthControl = lazy(() => import("./screens/healthHistory/healthControl/healthControl"))
const exams = lazy(() => import("./screens/healthHistory/exams/exams"))

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
          <PublicRoute exact={true} path="/login" component={login} layout={"full"} />
          <PublicRoute exact={true} path="/recuperar-senha" component={recoverPassword} layout={"full"} />
          <PublicRoute exact={true} path="/nova-senha" component={newPassword} layout={"full"} />
          <PublicRoute exact={true} path="/cadastro" component={register} layout={"full"} />
          <PublicRoute exact={true} path="/unauthorized" component={unauthorized} layout={"full"} />
          <PublicRoute exact={true} path="/" component={login} layout={"full"} />
          <ProtectedRoute exact={true} path="/home" component={home} layout={"horizontal"} permission={["administrator", "pacients", "doctors", "partners"]} />
          <ProtectedRoute exact={true} path="/pagamentos" component={payment} layout={"horizontal"} permission={["administrator", "pacients", "doctors", "partners"]} />
          <ProtectedRoute exact={true} path="/doctors" component={doctors} layout={"horizontal"} permission={["administrator", "doctors"]} />
          <ProtectedRoute exact={true} path="/consultas" component={consultations} layout={"horizontal"} permission={["administrator", "doctors"]} />
          <ProtectedRoute exact={true} path="/historico-de-saude" component={healthHistory} layout={"horizontal"} permission={["administrator", "doctors"]} />
          <ProtectedRoute exact={true} path="/historico-de-saude/adicionar-documento" component={addDocument} layout={"horizontal"} permission={["administrator", "doctors"]} />
          <ProtectedRoute exact={true} path="/historico-de-saude/prontuarios" component={medicalRecords} layout={"horizontal"} permission={["administrator", "doctors"]} />
          <ProtectedRoute exact={true} path="/historico-de-saude/receitas-medicas" component={prescriptions} layout={"horizontal"} permission={["administrator", "doctors"]} />
          <ProtectedRoute exact={true} path="/historico-de-saude/exams" component={exams} layout={"horizontal"} permission={["administrator", "doctors"]} />
          <ProtectedRoute exact={true} path="/historico-de-saude/controle-da-saude" component={healthControl} layout={"horizontal"} permission={["administrator", "doctors"]} />
          <ProtectedRoute exact={true} path="/documentos" component={documents} layout={"horizontal"} permission={["administrator", "doctors"]} />
          <ProtectedRoute exact={true} path="/notificacoes" component={notifications} layout={"horizontal"} permission={["administrator", "doctors"]} />
          {/*<ProtectedRoute exact={true} path="/doctors" component={doctors}  layout={"full"} permission={["administrator","pacients", "doctors", "partners"]} />*/}
          <ProtectedRoute exact path="/perfil" component={profile} layout={"horizontal"} permission={["administrator", "doctors", "pacients"]} />
          <ProtectedRoute exact path="/perfil/editar-perfil" component={editProfile} layout={"horizontal"} permission={["administrator", "doctors", "pacients"]} />
          <ProtectedRoute exact path="/perfil/editar-plano" component={editPlan} layout={"horizontal"} permission={["administrator", "doctors", "pacients"]} />
          {/*<ProtectedRoute path="/example" component={example} layout={"horizontal"} permission={["administrator","supervisor", "agent"]} />*/}
          <AppRoute component={notFound} layout={"full"} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
