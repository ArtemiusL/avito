import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
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
  handleSubmit = (values) => {
    console.log(values);
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
  products: PropTypes.array,
  onFetchProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  products: (state.products.data),
});

const mapDispatchToProps = dispatch => ({
  onFetchProducts() {
    dispatch(fetchProducts());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
