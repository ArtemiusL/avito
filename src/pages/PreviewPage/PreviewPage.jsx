import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import { push, goBack } from 'react-router-redux';
import CloseButton from './CloseButton';

import styles from './PreviewPage.scss';

@CSSModules(styles, { allowMultiple: true })
class PreviewPage extends PureComponent {
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
    const { className } = this.props;

    return (
      <div className={className} styleName="root">
        <div styleName="overlay">
          <div styleName="details">
            <CloseButton onClick={this.handleCloseClisk} />
            PreviewPage
            <img src="https://pp.userapi.com/c543101/v543101324/46b6c/VnUAhmrCUvg.jpg" alt="Salma" />
          </div>
        </div>
      </div>
    );
  }
}

PreviewPage.propTypes = {
  className: PropTypes.string,
  location: PropTypes.object,
  lastLocation: PropTypes.object,
  onPushHistory: PropTypes.func,
  onGoBack: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onPushHistory(params) {
    dispatch(push(params));
  },
  onGoBack() {
    dispatch(goBack());
  },
});

export default connect(null, mapDispatchToProps)(withLastLocation(PreviewPage));
