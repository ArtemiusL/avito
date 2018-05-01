import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './LayoutContent.scss';

const LayoutContent = ({ leftContent, rightContent }) => (
  <div styleName={classnames('root', 'centered')}>
    <section styleName="layout-main">
      {leftContent}
    </section>

    <aside styleName="layout-sidebar">
      {rightContent}
    </aside>
  </div>
);

LayoutContent.propTypes = {
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
};

export default CSSModules(LayoutContent, styles, { allowMultiple: true });
