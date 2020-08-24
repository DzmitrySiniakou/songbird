import { connect } from 'react-redux';

import BirdInformationBlock from './BirdInformationBlock';

const mapStateToProps = ({
  songBirdData: {
    rightBird,
    currentBird,
    isReadyForNextLevel,
  },
}) => ({
  rightBird,
  currentBird,
  isReadyForNextLevel,
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(BirdInformationBlock);
