import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import classnames from 'classnames';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, label, ...props }) => {
  return (
    <button
      type="button"
      className={classnames(
        styles.button,
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
};
