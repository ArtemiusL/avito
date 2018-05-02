import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectors from '_selectors';
import Form from '_components/Form';
import { queryStringToObject, objectToQueryString } from '_utils/query';
import { push } from 'react-router-redux';

class FormContainer extends PureComponent {
  getInitialValues = state =>
    (
      { ...state, ...queryStringToObject(location.search) }
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
    const { className, filterValue } = this.props;
    console.log('filterValue', filterValue);
    const initialValues = !__SERVER__ ? this.getInitialValues(filterValue) : filterValue;
    console.log('initialValues', initialValues);
    return (
      <div>
        <Form
          className={className}
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
  filterValue: PropTypes.object,
  onPushHistory: PropTypes.func,
};

const { filterSelector } = selectors;

const mapStateToProps = state => ({
  filterValue: filterSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onPushHistory(params) {
    dispatch(push(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
