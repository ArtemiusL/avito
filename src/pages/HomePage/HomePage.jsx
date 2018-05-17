import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import selectors from '_selectors';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import LayoutContent from '_components/LayoutContent';
import FormContainer from '_containers/FormContainer';

import {
  fetchProducts,
  addProductInFavorite,
} from '_actions/products';

import ProductsList from './ProductsList';
import styles from './HomePage.scss';

@CSSModules(styles, { allowMultiple: true })
class HomePage extends PureComponent {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  handleProductClick = (id) => {
    this.props.onPushHistory(`product/${id}`);
  }

  handleHeartClick = (id) => {
    this.props.onProductHeartClick(id);
  }

  render() {
    const { products, favoriteList } = this.props;

    return (
      <div>
        <Helmet title="Интернет-магазин" />
        <LayoutContent
          leftContent={
            <ProductsList
              data={products}
              favoriteList={favoriteList}
              onProductClick={this.handleProductClick}
              onHeartClick={this.handleHeartClick}
            />
          }
          rightContent={
            <FormContainer
              styleName="products-filter"
            />
          }
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  products: PropTypes.array,
  favoriteList: PropTypes.array,
  onFetchProducts: PropTypes.func,
  onPushHistory: PropTypes.func,
  onProductHeartClick: PropTypes.func,
};

const { sortedProducts, favoriteProductsSelector } = selectors;

const mapStateToProps = state => ({
  products: sortedProducts(state),
  favoriteList: favoriteProductsSelector(state),
});


const mapDispatchToProps = dispatch => ({
  onFetchProducts() {
    dispatch(fetchProducts());
  },
  onPushHistory(params) {
    dispatch(push(params));
  },
  onProductHeartClick(id) {
    dispatch(addProductInFavorite(id));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
