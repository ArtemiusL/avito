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
}) => (
  <div>
    <span>{min}</span>
    <div styleName="inputContainer">
      <input
        className={className}
        value={isFirstFetchData ? max : value}
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />
      <div styleName="value">
        {isFirstFetchData ? max : value}
      </div>
    </div>
    <span>{max}</span>
  </div>
);

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
