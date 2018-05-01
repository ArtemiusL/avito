import React from 'react';
import PropTypes from 'prop-types';

const InputRange = ({
  className,
  input: { onChange, value },
  min,
  max,
}) => (
  <input
    className={className}
    value={value}
    type="range"
    min={min}
    max={max}
    onChange={onChange}
  />
);

InputRange.propTypes = {
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }),
};

export default InputRange;
