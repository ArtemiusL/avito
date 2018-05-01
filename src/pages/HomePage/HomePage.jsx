import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import LayoutContent from '_components/LayoutContent';
import Form from '_components/Form';

import {
  fetchProducts,
} from '_actions/products';

import ProductsList from './ProductsList';
import styles from './HomePage.scss';

@CSSModules(styles, { allowMultiple: true })
class HomePage extends PureComponent {
  componentDidMount() {
    this.props.onFetchProducts();
  }
  generateQuery = (values) => {
    let string = '';
    Object.keys(values).forEach((key) => {
      string += `?${key}=${values[key]}`;
    });
    return string;
  }
  handleSubmit = (values) => {
    const { onPushHistory, location } = this.props;
    const query = this.generateQuery(values);

    onPushHistory({
      ...location,
      search: query,
    });
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <Helmet title="Интернет-магазин" />
        <LayoutContent
          leftContent={
            <ProductsList
              data={products}
            />
          }
          rightContent={
            <Form onSubmit={this.handleSubmit} styleName="products-filter" />
          }
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  location: PropTypes.object,
  onPushHistory: PropTypes.func,
  products: PropTypes.array,
  onFetchProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  products: state.products.data,
});

const mapDispatchToProps = dispatch => ({
  onFetchProducts() {
    dispatch(fetchProducts());
  },
  onPushHistory(params) {
    dispatch(push(params));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
