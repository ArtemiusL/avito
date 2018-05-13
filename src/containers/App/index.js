/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import styles from '_styles/styles.scss';
import HomePage from '_pages/HomePage';
import PreviewPage from '_pages/PreviewPage';
import NotFoundPage from '_pages/NotFoundPage';

import config from '../../config';

const App = () => {
  return (
    <div className={styles.App}>
      <Helmet {...config.app} />
      <HomePage />
      <Switch>
        <Route path="/product/:id" component={PreviewPage} />
      </Switch>
    </div>
  );
};

export default App;
