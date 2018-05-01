import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import selectors from '_selectors';
import PropTypes from 'prop-types';
import Form from '_components/Form';

import { clearFormStatus } from '_actions/form';

class FormContainer extends PureComponent {
  render() {
    const {
      content,
      successSend,
      failSend,
      onSubmit,
      clearStatuses,
      onCloseClick,
    } = this.props;
    return (
      <Form
        successSend={successSend}
        failSend={failSend}
        onSubmit={onSubmit}
        clearStatuses={clearStatuses}
        onCloseClick={onCloseClick}
        {...content}
      />
    );
  }
}

FormContainer.propTypes = {
  content: PropTypes.object,
  successSend: PropTypes.bool,
  failSend: PropTypes.bool,
  onSubmit: PropTypes.func,
  clearStatuses: PropTypes.func,
  onCloseClick: PropTypes.func,
};

const {
  successStatusFormSelector,
  failStatusFormSelector,
} = selectors;


const mapStateToProps = state => ({
  successSend: successStatusFormSelector(state),
  failSend: failStatusFormSelector(state),
});

const mapDispatchToProps = dispatch => ({
  clearStatuses() {
    dispatch(clearFormStatus());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
