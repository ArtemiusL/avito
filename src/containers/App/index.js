import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import styles from '_styles/styles.scss';

import config from '../../config';
import routes from '../../routes';

const App = () => {
  // wrap <Route> and use this everywhere instead, then when
  // sub routes are added to any route it'll work
  const RouteWithSubRoutes = route => (
    <Route
      key={route.path}
      exact={route.exact || false}
      path={route.path}
      render={props => (
        // Pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes || null} />
      )}
    />
  );

  return (
    <div className={styles.App}>
      <Helmet {...config.app} />
      <Switch>
        {routes.map(route => RouteWithSubRoutes(route))}
      </Switch>
    </div>
  );
};

export default App;
