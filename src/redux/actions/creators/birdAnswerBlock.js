import {
  RESET_BIRD_ANSWER_BLOCK,
  PRESS_BIRD_ANSWER_BUTTON,
} from '../types/action-types';

export const addScore = () => ({
  type: RESET_BIRD_ANSWER_BLOCK,
});

export const resetScore = (buttonId) => ({
  type: PRESS_BIRD_ANSWER_BUTTON,
  payload: buttonId,
});
