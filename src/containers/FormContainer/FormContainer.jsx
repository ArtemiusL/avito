import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectors from '_selectors';
import Form from '_components/Form';
import { queryStringToObject, objectToQueryString } from '_utils/query';
import { push } from 'react-router-redux';

import { changeFilter } from '_actions/filter';

class FormContainer extends PureComponent {
  getInitialValues = state =>
    (
      { ...state, ...queryStringToObject(location.search) }
    );
  handleSubmit = (values) => {
    const { onPushHistory, location, onChangeFilter } = this.props;
    const query = objectToQueryString(values);

    onPushHistory({
      ...location,
      search: query,
    });

    onChangeFilter(values);
  }

  render() {
    const { className, filterValue } = this.props;
    const initialValues = !__SERVER__ ? this.getInitialValues(filterValue) : filterValue;
    return (
      <div>
        <Form
          className={className}
          test={initialValues}
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
  onChangeFilter: PropTypes.func,
};

const { filterSelector } = selectors;

const mapStateToProps = state => ({
  filterValue: filterSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onPushHistory(params) {
    dispatch(push(params));
  },
  onChangeFilter(filters) {
    dispatch(changeFilter(filters));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
