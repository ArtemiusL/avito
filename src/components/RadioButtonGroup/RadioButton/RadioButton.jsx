import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

import styles from './RadioButton.scss';

class RadioButton extends Component {
  handleClick = () => {
    const { id, value, onClick } = this.props;

    onClick(id, value);
  };

  render() {
    const { className, title, isActive } = this.props;

    return (
      <li
        className={className}
        styleName={classnames('root', { active: isActive })}
        onClick={this.handleClick}
      >
        {title}
      </li>
    );
  }
}

RadioButton.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  value: PropTypes.any,
  title: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CSSModules(RadioButton, styles, { allowMultiple: true });
