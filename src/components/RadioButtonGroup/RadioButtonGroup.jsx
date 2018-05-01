import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import RadioButton from './RadioButton';
import styles from './RadioButtonGroup.scss';

@CSSModules(styles)
class RadioButtonGroup extends PureComponent {
  handleClick = (id, value) => {
    const { input: { onChange } } = this.props;

    onChange(value);
  };

  render() {
    const {
      className,
      list,
      input: { value },
      meta: { touched, error },
    } = this.props;

    const hasError = error && touched;

    console.log(value);

    return (
      <div className={className}>
        <ul>
          {list.map(item => (
            <RadioButton
              stylename="item"
              key={item.id}
              {...item}
              isActive={value === item.value}
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
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
};

export default RadioButtonGroup;
