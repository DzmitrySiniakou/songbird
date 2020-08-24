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
} from '../types/action-types';

export const setCurrentBird = (currentBird) => ({
  type: SET_CURRENT_BIRD,
  payload: currentBird,
});

export const setIsCongratulationsShowed = (isShowed) => ({
  type: SET_IS_CONGRATULATIONS_SHOWED,
  payload: isShowed,
});

export const resetAdditionalScore = () => ({
  type: RESET_ADDITIONAL_SCORE,
});

export const decreaseAdditionalScore = () => ({
  type: DECREASE_ADDITIONAL_SCORE,
});

export const setRightBird = (rightBird) => ({
  type: SET_RIGHT_BIRD,
  payload: rightBird,
});

export const setIsReadyForNextLevel = (isReady) => ({
  type: SET_IS_READY_FOR_NEXT_LEVEL,
  payload: isReady,
});

export const setAnswers = (newAnswers) => ({
  type: SET_ANSWERS,
  payload: newAnswers,
});

export const addScore = (scores) => ({
  type: ADD_SCORE,
  payload: scores,
});

export const resetScore = () => ({
  type: RESET_SCORE,
});

export const increaseLevel = () => ({
  type: INCREASE_LEVEL,
});

export const resetLevel = () => ({
  type: RESET_LEVEL,
});

export const resetInitialSongBirdData = () => ({
  type: RESET_INITIAL_SONG_BIRD_DATA,
});
