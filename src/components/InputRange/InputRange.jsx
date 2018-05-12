import React from 'react';
import PropTypes from 'prop-types';

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
    <input
      className={className}
      value={isFirstFetchData ? max : value}
      type="range"
      min={min}
      max={max}
      step={step}
      onChange={onChange}
    />
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

export default InputRange;
