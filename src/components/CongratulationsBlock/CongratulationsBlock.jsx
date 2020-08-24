import React from 'react';
import PropTypes from 'prop-types';
import playAudio from '../../helpers/playAudio';
import style from './style.module.scss';
import Button from '../Button';

const CongratulationsBlock = ({ resetInitialSongBirdData, score }) => {
  const onAnotherAttempt = () => {
    resetInitialSongBirdData();
  };

  const bestresult = () => (
    <div className={style.result}>
      <p className={style.congratulationsWord}>Congratulations</p>
      У Вас идеальный слух!
      {playAudio('bestResult')}
    </div>
  );

  const result = () => (
    <div className={style.result}>
      <p className={style.congratulations}>Поздравляем!</p>
      Вы прошли викторину и набрали
      {' '}
      {score}
      {' '}
      из 30 возможных баллов
    </div>
  );

  return (
    <div className={style.container}>
      {(score === 30) ? bestresult() : result()}
      <Button
        text="попробовать еще раз"
        onClick={onAnotherAttempt}
      />
    </div>
  );
};

CongratulationsBlock.propTypes = {
  resetInitialSongBirdData: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default CongratulationsBlock;
