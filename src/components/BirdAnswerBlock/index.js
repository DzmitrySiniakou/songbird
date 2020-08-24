import { connect } from 'react-redux';

import BirdAnswerBlock from './BirdAnswerBlock';
import {
  setAnswers,
  setIsReadyForNextLevel,
  setRightBird,
  addScore,
  decreaseAdditionalScore,
  setIsCongratulationsShowed,
  setCurrentBird,
} from '../../redux/actions/creators/songBirdData';

const mapStateToProps = ({
  birdAnswerBlock: { pressedButtons },
  songBirdData: {
    level,
    answers,
    rightBird,
    isReadyForNextLevel,
    additionalScore,
  },
}) => ({
  level,
  pressedButtons,
  answers,
  rightBird,
  isReadyForNextLevel,
  additionalScore,
});

const actionCreators = {
  setAnswers,
  setRightBird,
  setIsReadyForNextLevel,
  addScore,
  decreaseAdditionalScore,
  setIsCongratulationsShowed,
  setCurrentBird,
};

export default connect(mapStateToProps, actionCreators)(BirdAnswerBlock);
