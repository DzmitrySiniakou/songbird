import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import birdsCategories from '../../constants/birdsCategories';
import playAudio from '../../helpers/playAudio';

import changeAnswers from '../../helpers/changeAnswers';
import style from './style.module.scss';
import Button from '../Button';

const BirdAnswerBlock = ({
  level,
  answers,
  setAnswers,
  rightBird,
  setRightBird,
  isReadyForNextLevel,
  setIsReadyForNextLevel,
  addScore,
  additionalScore,
  decreaseAdditionalScore,
  setIsCongratulationsShowed,
  setCurrentBird,
}) => {
  useEffect(() => {
    if (level < birdsCategories.length) {
      const { birds } = birdsCategories[level];
      setAnswers(birds);
      setRightBird(birds[Math.floor(Math.random() * birds.length)]);
    } else {
      setIsCongratulationsShowed(true);
    }
  }, [level]);

  const answerFunction = ({ target: { dataset: { id } } }) => {
    const rightId = rightBird.id;
    const newAnswers = changeAnswers(answers, id);
    const currentBird = newAnswers.find((el) => el.id === id);
    setCurrentBird(currentBird);
    if (!isReadyForNextLevel) {
      if (rightId === id) {
        playAudio('win');
        setIsReadyForNextLevel(true);
        addScore(additionalScore);
      } else {
        playAudio('error');
        decreaseAdditionalScore();
      }
    }
    setAnswers(newAnswers);
  };

  const checkBird = ({ target: { dataset: { id } } }) => {
    const newAnswers = changeAnswers(answers, id);
    const currentBird = newAnswers.find((el) => el.id === id);
    setCurrentBird(currentBird);
  };

  const styleButton = (pressed, isTrueAnswer) => {
    if (!pressed) return style.answerVariant;
    return (pressed && isTrueAnswer)
      ? style.answerVariantTrue
      : style.answerVariantFalse;
  };
  const answerVariants = answers.map((bird) => (
    <Button
      key={bird.id}
      dataId={bird.id}
      className={styleButton(bird.pressed, bird.id === rightBird.id)}
      text={bird.ruName}
      onClick={!bird.pressed ? answerFunction : checkBird}
      pressed={bird.pressed}
    />
  ));
  return (
    <div className={style.flexColumn}>
      {console.log(rightBird.ruName)}
      {answerVariants}
    </div>
  );
};

BirdAnswerBlock.propTypes = {
  level: PropTypes.number.isRequired,
  setAnswers: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
  rightBird: PropTypes.objectOf(PropTypes.any).isRequired,
  setRightBird: PropTypes.func.isRequired,
  isReadyForNextLevel: PropTypes.bool.isRequired,
  setIsReadyForNextLevel: PropTypes.func.isRequired,
  addScore: PropTypes.func.isRequired,
  additionalScore: PropTypes.number.isRequired,
  decreaseAdditionalScore: PropTypes.func.isRequired,
  setIsCongratulationsShowed: PropTypes.func.isRequired,
  setCurrentBird: PropTypes.func.isRequired,
};

export default BirdAnswerBlock;
