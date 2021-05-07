import React from 'react';
import { Route, Switch, BrowserRouter, withRouter, Redirect } from 'react-router-dom'

import { Home } from '../../screens'

function PrivateRoutes() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact={true} component={Home} />
            </Switch>
        </React.Fragment>
    )
}
export default PrivateRoutes;