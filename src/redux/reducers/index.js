import { combineReducers } from 'redux';

import songBirdDataReducer from './songBirdData.reducer';
import birdAnswerBlockReducer from './birdAnswerBlock.reducer';

const reducers = combineReducers({
  songBirdData: songBirdDataReducer,
  birdAnswerBlock: birdAnswerBlockReducer,
});

export default reducers;
