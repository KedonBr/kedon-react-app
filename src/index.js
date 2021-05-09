import React, { Suspense, lazy } from "react"
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Layout } from './utils/context/Layout'
import Store from './global/redux/store';
import { BrowserRouter as Router } from "react-router-dom"
import Spinner from "./components/spinner/LoadingSpinner"
import "./index.scss"


const LazyApp = lazy(() => import("./App"))

ReactDOM.render(
  /*<Provider store={Store}>
    <Router>
      <App />
    </Router>
  </Provider>*/
  <Provider store={Store}>
    <Suspense fallback={<Spinner />}>
      <Layout>
          <LazyApp />
      </Layout>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
