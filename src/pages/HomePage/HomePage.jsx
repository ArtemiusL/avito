import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';
import LayoutContent from '_components/LayoutContent';
import Form from '_components/Form';
import ProductsList from './ProductsList';

import styles from './HomePage.scss';

class HomePage extends PureComponent {
  handleSubmit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <div>
        <Helmet title="Интернет-магазин" />
        <LayoutContent
          leftContent={
            <ProductsList />
          }
          rightContent={
            <Form onSubmit={this.handleSubmit} styleName="products-filter" />
          }
        />
      </div>
    );
  }
}

export default CSSModules(HomePage, styles, { allowMultiple: true });
