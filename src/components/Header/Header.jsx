import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';

import style from './Header.module.scss';

const Header = ({ score }) => (
  <div className={style.header}>
    <div className={style.topPanel}>
      <h1 className={style.logo}>Animal Sounds </h1>
      <span className={style.score}>
        Score:
        {score}
      </span>
    </div>
    <ProgressBar />
  </div>
);

Header.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Header;
