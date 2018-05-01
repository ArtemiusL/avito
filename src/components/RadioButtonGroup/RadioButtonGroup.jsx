import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import RadioButton from './RadioButton';
import styles from './RadioButtonGroup.scss';

@CSSModules(styles)
class RadioButtonGroup extends Component {
  state = {
    activeButtonId: false,
  };

  handleClick = (id, value) => {
    const { input: { onChange } } = this.props;

    this.setState({ activeButtonId: id });
    onChange(value);
  };

  render() {
    const {
      className,
      list,
      meta: { touched, error },
    } = this.props;

    const { activeButtonId } = this.state;
    const hasError = error && touched;

    return (
      <div className={className}>
        <ul>
          {list.map(item => (
            <RadioButton
              stylename="item"
              key={item.id}
              {...item}
              isActive={activeButtonId === item.id}
              onClick={this.handleClick}
            />
          ))}
        </ul>
        {hasError && error}
      </div>
    );
  }
}

RadioButtonGroup.propTypes = {
  className: PropTypes.string,
  modifier: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.any,
    title: PropTypes.string,
  })),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }),
};

export default RadioButtonGroup;
