import {
  RESET_INITIAL_SONG_BIRD_DATA,
  ADD_SCORE,
  RESET_SCORE,
  INCREASE_LEVEL,
  RESET_LEVEL,
  SET_ANSWERS,
  SET_IS_READY_FOR_NEXT_LEVEL,
  SET_RIGHT_BIRD,
  RESET_ADDITIONAL_SCORE,
  DECREASE_ADDITIONAL_SCORE,
  SET_IS_CONGRATULATIONS_SHOWED,
  SET_CURRENT_BIRD,
} from '../actions/types/action-types';

const additionalScore = 5; // можно вынести в константы

const initialSongBirdData = {
  score: 0,
  additionalScore,
  level: 0,
  answers: [],
  isReadyForNextLevel: false,
  rightBird: {},
  currentBird: {},
  isCongratulationsShowed: false,
};

const currentMachineReducer = (state = initialSongBirdData, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_BIRD: {
      return {
        ...state,
        currentBird: payload,
      };
    }
    case SET_IS_CONGRATULATIONS_SHOWED:
      return {
        ...state,
        isCongratulationsShowed: payload,
      };
    case RESET_ADDITIONAL_SCORE:
      return {
        ...state,
        additionalScore,
      };
    case DECREASE_ADDITIONAL_SCORE:
      return {
        ...state,
        additionalScore: state.additionalScore - 1,
      };
    case SET_RIGHT_BIRD:
      return {
        ...state,
        rightBird: payload,
      };
    case SET_IS_READY_FOR_NEXT_LEVEL:
      return {
        ...state,
        isReadyForNextLevel: payload,
      };
    case SET_ANSWERS:
      return {
        ...state,
        answers: payload,
      };
    case INCREASE_LEVEL:
      return {
        ...state,
        level: state.level + 1,
      };
    case RESET_LEVEL:
      return {
        ...state,
        level: 0,
      };
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + payload,
      };
    case RESET_SCORE:
      return {
        ...state,
        score: 0,
      };
    case RESET_INITIAL_SONG_BIRD_DATA:
      return initialSongBirdData;
    default:
      return state;
  }
};

export default currentMachineReducer;
