import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './InputRange.scss';

const InputRange = ({
  className,
  input: { onChange, value },
  isFirstFetchData,
  min,
  max,
  step,
}) => {
  const inputValue = isFirstFetchData ? max : value;
  return (
    <div>
      <span>{min}</span>
      <div styleName="inputContainer">
        <input
          className={className}
          value={inputValue}
          type="range"
          min={min}
          max={max}
          step={step}
          onChange={onChange}
        />
        <div styleName="value">
          {inputValue}
        </div>
      </div>
      <span>{max}</span>
    </div>
  );
};

InputRange.propTypes = {
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }),
  isFirstFetchData: PropTypes.bool,
};

export default CSSModules(InputRange, styles, { allowMultiple: true });
