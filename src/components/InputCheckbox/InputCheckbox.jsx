import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classnames from 'classnames';

import styles from './InputCheckbox.scss';

const InputCheckbox = ({
  className,
  input: { onChange, value: checked, name },
  label,
}) => (
  <label htmlFor={name} styleName={classnames('root', { checked })}>
    {label}
    <input
      className={className}
      value={checked}
      id={name}
      styleName="input"
      type="checkbox"
      onChange={onChange}
    />
  </label>
);

InputCheckbox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }),
};

export default CSSModules(InputCheckbox, styles, { allowMultiple: true });
