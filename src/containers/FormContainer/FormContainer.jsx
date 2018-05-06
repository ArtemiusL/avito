import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '_components/Form';
import { queryStringToObject, objectToQueryString } from '_utils/query';
import { push } from 'react-router-redux';

const defaultStateForm = {
  isFavorite: true,
  category: 'all',
  sort: 'cheap-first',
  price: 2000,
};

class FormContainer extends PureComponent {
  getInitialValues = () =>
    (
      { ...defaultStateForm, ...queryStringToObject(location.search) }
    );
  handleSubmit = (values) => {
    console.log('work');
    const { onPushHistory, location } = this.props;
    const query = objectToQueryString(values);

    onPushHistory({
      ...location,
      search: query,
    });
  }

  render() {
    const { className } = this.props;
    const initialValues = !__SERVER__ ? this.getInitialValues() : defaultStateForm;
    return (
      <div>
        <Form
          className={className}
          test={initialValues}
          initialValues={initialValues}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

FormContainer.propTypes = {
  className: PropTypes.string,
  location: PropTypes.any,
  onPushHistory: PropTypes.func,
};


const mapDispatchToProps = dispatch => ({
  onPushHistory(params) {
    dispatch(push(params));
  },
});

export default connect(null, mapDispatchToProps)(FormContainer);
