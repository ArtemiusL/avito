import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import { push, goBack } from 'react-router-redux';
import selectors from '_selectors';
import getFirstLetterUpper from '_utils/getFirstLetterUpper';

import {
  fetchProducts,
  fetchSellers,
} from '_actions/products';

import CloseButton from './CloseButton';
import Main from './Main';
import Aside from './Aside';

import styles from './PreviewPage.scss';


@CSSModules(styles, { allowMultiple: true })
class PreviewPage extends PureComponent {
  componentDidMount() {
    this.props.onFetchSellers();
    this.props.onFetchProducts();
  }

  handleCloseClisk = () => {
    const {
      location,
      lastLocation,
      onPushHistory,
      onGoBack,
    } = this.props;
    if (lastLocation) {
      onGoBack();
    } else {
      onPushHistory({
        ...location,
        pathname: '/',
      });
    }
  }

  render() {
    const {
      className,
      data,
      seller,
    } = this.props;

    if (!data) {
      return <div />;
    }
    const { title } = data;

    return (
      <div className={className}>
        <div styleName="overlay">
          <div styleName="details">
            <CloseButton onClick={this.handleCloseClisk} />
            <h2 styleName="title">{getFirstLetterUpper(title)}</h2>
            <Main styleName="main" {...data} />
            <Aside {...data} seller={seller} />
          </div>
        </div>
      </div>
    );
  }
}

PreviewPage.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    year: PropTypes.number,
    pictures: PropTypes.array,
    address: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
    id: PropTypes.string,
  }),
  seller: PropTypes.shape({
    category: PropTypes.string,
    isCompany: PropTypes.bool,
    name: PropTypes.string,
    rating: PropTypes.number,
    id: PropTypes.string,
  }),
  location: PropTypes.object,
  lastLocation: PropTypes.object,
  onPushHistory: PropTypes.func,
  onGoBack: PropTypes.func,
  onFetchSellers: PropTypes.func,
  onFetchProducts: PropTypes.func,
};

const { currentProductSelector, currentSellerSelector } = selectors;

const mapStateToProps = (state, ownProps) => {
  const getDataToId = currentProductSelector(ownProps.match.params.id);
  const curData = getDataToId(state);
  if (!curData) {
    return ({
      data: curData,
    });
  }
  const curSellerId = curData.relationships.seller;
  const getSellerToId = currentSellerSelector(curSellerId);

  return ({
    data: curData,
    seller: getSellerToId(state),
  });
};

const mapDispatchToProps = dispatch => ({
  onPushHistory(params) {
    dispatch(push(params));
  },
  onGoBack() {
    dispatch(goBack());
  },
  onFetchProducts() {
    dispatch(fetchProducts());
  },
  onFetchSellers() {
    dispatch(fetchSellers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withLastLocation(PreviewPage));
