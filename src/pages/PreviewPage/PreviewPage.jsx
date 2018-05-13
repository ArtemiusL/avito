/* eslint-disable */
import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import { push, goBack } from 'react-router-redux';
import selectors from '_selectors';
import CloseButton from './CloseButton';
import getFirstLetterUpper from '_utils/getFirstLetterUpper';

import styles from './PreviewPage.scss';

import {
  fetchProducts,
} from '_actions/products';

@CSSModules(styles, { allowMultiple: true })
class PreviewPage extends PureComponent {
  componentDidMount() {
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
    const { className, data, match } = this.props;
    if (!data) {
      return <div></div>;
    }
    const { title } = data;
    console.log('data', data, 'match', match);
    return (
      <div className={className} styleName="root">
        <div styleName="overlay">
          <div styleName="details">
            <CloseButton onClick={this.handleCloseClisk} />
            <h2 styleName="title">{getFirstLetterUpper(title)}</h2>
            <img src="https://pp.userapi.com/c543101/v543101324/46b6c/VnUAhmrCUvg.jpg" alt="Salma" />
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
  }),
  location: PropTypes.object,
  lastLocation: PropTypes.object,
  onPushHistory: PropTypes.func,
  onGoBack: PropTypes.func,
  onPushHistory: PropTypes.func,
};

const { currentProductSelector } = selectors;

const mapStateToProps = (state, ownProps) => {
  const getDataToId = currentProductSelector(ownProps.match.params.id);

  return ({
    data: getDataToId(state),
  });
}

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
});

export default connect(mapStateToProps, mapDispatchToProps)(withLastLocation(PreviewPage));
