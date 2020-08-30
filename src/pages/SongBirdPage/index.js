import { connect } from 'react-redux';

import SongBirdPage from './SongBirdPage';
import {
  increaseLevel,
  setIsReadyForNextLevel,
  setRightBird,
  resetAdditionalScore,
} from '../../redux/actions/creators/songBirdData';

const mapStateToProps = ({
  songBirdData: {
    isReadyForNextLevel,
    rightBird,
    isCongratulationsShowed,
  },
}) => ({
  isReadyForNextLevel,
  rightBird,
  isCongratulationsShowed,
});

const actionCreators = {
  increaseLevel,
  setIsReadyForNextLevel,
  setRightBird,
  resetAdditionalScore,
};

export default connect(mapStateToProps, actionCreators)(SongBirdPage);
