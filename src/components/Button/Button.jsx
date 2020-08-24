import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import style from './style.module.scss';

const buttonClass = (className1, className2) => classNames(className1, className2);

const Button = ({
  className,
  text,
  onClick,
  pressed,
  isWorking,
  dataId,
}) => (
  <button
    className={`${buttonClass(className, style.button)} ${pressed ? style.pressed : ''}`}
    type="button"
    onClick={isWorking ? onClick : () => {}}
    data-id={dataId}
  >
    {text}
  </button>
);

Button.defaultProps = {
  pressed: false,
  className: 'button',
  onClick: () => {},
  isWorking: true,
  dataId: '',
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  pressed: PropTypes.bool,
  onClick: PropTypes.func,
  isWorking: PropTypes.bool,
  dataId: PropTypes.string,
};

export default Button;
