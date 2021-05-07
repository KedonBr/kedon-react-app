import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './assets/scss/core/variables/reset.scss'
import PrivateRoutes from './global/routes/PrivateRoutes';
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' component={PrivateRoutes}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
