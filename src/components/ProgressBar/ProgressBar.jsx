import React from 'react';
import PropTypes from 'prop-types';

import birdsCategories from '../../constants/birdsCategories';
import style from './ProgressBar.module.scss';

const ProgressBar = ({ level }) => {
  const arrCategory = birdsCategories.map(({ id, name, categoryNumber }) => (
    <li
      className={categoryNumber <= +level ? style.completeLi : style.li}
      key={id}
    >
      {name}
    </li>
  ));

  return (
    <ul className={style.progressBar}>
      {arrCategory}
    </ul>
  );
};

ProgressBar.propTypes = {
  level: PropTypes.number.isRequired,
};

export default ProgressBar;
